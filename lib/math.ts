/**
 * Pure financial math for every Capitiro calculator.
 *
 * Rules (see .claude/skills/new-calculator):
 * - No React, no formatting, no rounding here — return full-precision numbers and
 *   round only when displaying. Rounding mid-calculation compounds errors.
 * - Every function must tolerate bad input (NaN, negatives, 0% rates) without
 *   throwing or returning NaN/Infinity.
 * - Every function is covered by lib/math.test.ts (`pnpm test`).
 */

const MAX_MONTHS = 1200; // 100 years — hard cap for every simulation loop

/** Coerce to a finite number within [min, max]. NaN/Infinity become `min`. */
export function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Monthly rate equivalent to an annual nominal rate compounded `compoundsPerYear` times. */
export function equivalentMonthlyRate(annualRatePercent: number, compoundsPerYear: number): number {
  const r = clamp(annualRatePercent, 0, 100) / 100;
  if (r === 0) return 0;
  const n = clamp(compoundsPerYear, 1, 365);
  return Math.pow(1 + r / n, n / 12) - 1;
}

/** Level monthly payment that fully repays `principal` over `months` (standard annuity formula). */
export function monthlyPayment(principal: number, annualRatePercent: number, months: number): number {
  const p = clamp(principal, 0, Number.MAX_SAFE_INTEGER);
  const n = Math.round(clamp(months, 0, MAX_MONTHS));
  if (p === 0 || n === 0) return 0;
  const r = clamp(annualRatePercent, 0, 100) / 100 / 12;
  if (r === 0) return p / n;
  return (p * r) / (1 - Math.pow(1 + r, -n));
}

export interface YearlyData {
  year: number;
  /** Total money put in so far (initial deposit + contributions) */
  principal: number;
  /** Growth earned so far */
  interest: number;
  balance: number;
}

/* -------------------------------------------------------------------------- */
/* Compound interest                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Growth of an initial deposit plus end-of-month contributions.
 * Interest compounds `compoundsPerYear` times; contributions are credited monthly
 * and earn the equivalent monthly rate. Returns one row per year, starting at year 0.
 */
export function calculateCompoundInterest(
  principal: number,
  monthlyContribution: number,
  years: number,
  annualRate: number,
  compoundsPerYear = 12
): YearlyData[] {
  const start = clamp(principal, 0, Number.MAX_SAFE_INTEGER);
  const contribution = clamp(monthlyContribution, 0, Number.MAX_SAFE_INTEGER);
  const totalYears = Math.floor(clamp(years, 0, 100));
  const i = equivalentMonthlyRate(annualRate, compoundsPerYear);

  let balance = start;
  let invested = start;
  const rows: YearlyData[] = [{ year: 0, principal: invested, interest: 0, balance }];

  for (let y = 1; y <= totalYears; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + i) + contribution;
      invested += contribution;
    }
    rows.push({ year: y, principal: invested, interest: balance - invested, balance });
  }
  return rows;
}

/* -------------------------------------------------------------------------- */
/* SIP (systematic investment plan)                                           */
/* -------------------------------------------------------------------------- */

/**
 * Monthly investment made at the *start* of each month (annuity due), compounded
 * monthly at annualRate/12. `annualStepUp` raises the monthly amount by that
 * percentage at the start of every new year.
 */
export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number,
  annualStepUp = 0
): YearlyData[] {
  const base = clamp(monthlyInvestment, 0, Number.MAX_SAFE_INTEGER);
  const totalYears = Math.floor(clamp(years, 0, 100));
  const i = clamp(annualRate, 0, 100) / 100 / 12;
  const step = clamp(annualStepUp, 0, 100) / 100;

  let balance = 0;
  let invested = 0;
  const rows: YearlyData[] = [{ year: 0, principal: 0, interest: 0, balance: 0 }];

  for (let y = 1; y <= totalYears; y++) {
    const amount = base * Math.pow(1 + step, y - 1);
    for (let m = 0; m < 12; m++) {
      balance = (balance + amount) * (1 + i);
      invested += amount;
    }
    rows.push({ year: y, principal: invested, interest: balance - invested, balance });
  }
  return rows;
}

/* -------------------------------------------------------------------------- */
/* Loan amortization                                                          */
/* -------------------------------------------------------------------------- */

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface AmortizationYear {
  year: number;
  principal: number;
  interest: number;
  /** Balance remaining at the end of the year */
  balance: number;
}

export interface AmortizationResult {
  /** Scheduled payment, excluding any extra payment */
  monthlyPayment: number;
  totalInterest: number;
  totalPaid: number;
  /** Months actually needed to repay (shorter than the term when paying extra) */
  months: number;
  schedule: AmortizationRow[];
  yearly: AmortizationYear[];
}

function amortize(principal: number, annualRate: number, termMonths: number, extraMonthly: number): AmortizationResult {
  const p = clamp(principal, 0, Number.MAX_SAFE_INTEGER);
  const n = Math.round(clamp(termMonths, 0, MAX_MONTHS));
  const extra = clamp(extraMonthly, 0, Number.MAX_SAFE_INTEGER);
  const r = clamp(annualRate, 0, 100) / 100 / 12;
  const scheduled = monthlyPayment(p, annualRate, n);

  const schedule: AmortizationRow[] = [];
  let balance = p;
  let totalInterest = 0;

  for (let month = 1; month <= n && balance > 0.005; month++) {
    const interest = balance * r;
    const principalPart = Math.min(scheduled + extra - interest, balance);
    balance -= principalPart;
    if (balance < 0.005) balance = 0;
    totalInterest += interest;
    schedule.push({ month, payment: interest + principalPart, principal: principalPart, interest, balance });
  }

  const yearly: AmortizationYear[] = [];
  for (const row of schedule) {
    const year = Math.ceil(row.month / 12);
    const current = yearly[year - 1] ?? (yearly[year - 1] = { year, principal: 0, interest: 0, balance: 0 });
    current.principal += row.principal;
    current.interest += row.interest;
    current.balance = row.balance;
  }

  return {
    monthlyPayment: scheduled,
    totalInterest,
    totalPaid: p + totalInterest,
    months: schedule.length,
    schedule,
    yearly,
  };
}

export function calculateLoanAmortization(
  principal: number,
  annualRate: number,
  years: number,
  extraMonthly = 0
): AmortizationResult {
  return amortize(principal, annualRate, clamp(years, 0, 100) * 12, extraMonthly);
}

/* -------------------------------------------------------------------------- */
/* Mortgage (PITI + PMI + HOA)                                                */
/* -------------------------------------------------------------------------- */

export interface MortgageInput {
  homePrice: number;
  downPayment: number;
  annualRate: number;
  years: number;
  /** Annual property tax as % of home price */
  propertyTaxRate: number;
  /** Annual homeowners insurance premium */
  homeInsurance: number;
  /** Annual PMI as % of the original loan amount (charged while LTV > 78%) */
  pmiRate: number;
  hoaMonthly: number;
}

export interface MortgageResult {
  loanAmount: number;
  downPaymentPercent: number;
  principalAndInterest: number;
  monthlyTax: number;
  monthlyInsurance: number;
  /** PMI in the first month (0 when the down payment is at least 20%) */
  monthlyPmi: number;
  hoaMonthly: number;
  totalMonthly: number;
  totalInterest: number;
  /** Months PMI is charged before the loan reaches 78% loan-to-value */
  pmiMonths: number;
  totalPmi: number;
  /** Everything paid over the life of the loan: down payment, P&I, tax, insurance, PMI, HOA */
  totalCost: number;
  yearly: AmortizationYear[];
}

export function calculateMortgage(input: MortgageInput): MortgageResult {
  const homePrice = clamp(input.homePrice, 0, Number.MAX_SAFE_INTEGER);
  const downPayment = clamp(input.downPayment, 0, homePrice);
  const loanAmount = homePrice - downPayment;
  const years = clamp(input.years, 0, 50);
  const loan = amortize(loanAmount, input.annualRate, years * 12, 0);

  const monthlyTax = (homePrice * clamp(input.propertyTaxRate, 0, 20)) / 100 / 12;
  const monthlyInsurance = clamp(input.homeInsurance, 0, Number.MAX_SAFE_INTEGER) / 12;
  const hoaMonthly = clamp(input.hoaMonthly, 0, Number.MAX_SAFE_INTEGER);
  const pmiPerMonth = (loanAmount * clamp(input.pmiRate, 0, 5)) / 100 / 12;

  // Lenders must drop PMI automatically once the balance is scheduled to reach 78% of the original value.
  const pmiThreshold = homePrice * 0.78;
  let pmiMonths = 0;
  let openingBalance = loanAmount;
  for (const row of loan.schedule) {
    if (openingBalance > pmiThreshold) pmiMonths++;
    else break;
    openingBalance = row.balance;
  }
  const requiresPmi = homePrice > 0 && loanAmount > homePrice * 0.8;
  if (!requiresPmi) pmiMonths = 0;

  const monthlyPmi = pmiMonths > 0 ? pmiPerMonth : 0;
  const totalPmi = pmiPerMonth * pmiMonths;

  return {
    loanAmount,
    downPaymentPercent: homePrice > 0 ? (downPayment / homePrice) * 100 : 0,
    principalAndInterest: loan.monthlyPayment,
    monthlyTax,
    monthlyInsurance,
    monthlyPmi,
    hoaMonthly,
    totalMonthly: loan.monthlyPayment + monthlyTax + monthlyInsurance + monthlyPmi + hoaMonthly,
    totalInterest: loan.totalInterest,
    pmiMonths,
    totalPmi,
    totalCost:
      downPayment +
      loan.totalPaid +
      totalPmi +
      (monthlyTax + monthlyInsurance + hoaMonthly) * years * 12,
    yearly: loan.yearly,
  };
}

/* -------------------------------------------------------------------------- */
/* Credit card payoff                                                         */
/* -------------------------------------------------------------------------- */

export interface CreditCardPayoffResult {
  /** False when the payment doesn't cover the monthly interest (debt never shrinks) */
  payable: boolean;
  months: number;
  totalInterest: number;
  totalPaid: number;
  /** Interest charged in the first month — the payment must exceed this */
  firstMonthInterest: number;
  /** Remaining balance at the end of each month, starting with month 0 */
  balances: { month: number; balance: number }[];
}

/** Fixed monthly payment against a card balance; interest accrues monthly at APR/12. */
export function calculateCreditCardPayoff(balance: number, apr: number, payment: number): CreditCardPayoffResult {
  const start = clamp(balance, 0, Number.MAX_SAFE_INTEGER);
  const pay = clamp(payment, 0, Number.MAX_SAFE_INTEGER);
  const r = clamp(apr, 0, 100) / 100 / 12;
  const firstMonthInterest = start * r;

  if (start === 0) {
    return { payable: true, months: 0, totalInterest: 0, totalPaid: 0, firstMonthInterest: 0, balances: [{ month: 0, balance: 0 }] };
  }
  if (pay <= firstMonthInterest || pay === 0) {
    return { payable: false, months: Infinity, totalInterest: Infinity, totalPaid: Infinity, firstMonthInterest, balances: [{ month: 0, balance: start }] };
  }

  let remaining = start;
  let totalInterest = 0;
  let month = 0;
  const balances = [{ month: 0, balance: start }];
  while (remaining > 0.005 && month < MAX_MONTHS) {
    month++;
    const interest = remaining * r;
    totalInterest += interest;
    remaining = Math.max(0, remaining + interest - pay);
    if (remaining < 0.005) remaining = 0;
    balances.push({ month, balance: remaining });
  }

  return { payable: true, months: month, totalInterest, totalPaid: start + totalInterest, firstMonthInterest, balances };
}

/* -------------------------------------------------------------------------- */
/* Retirement                                                                 */
/* -------------------------------------------------------------------------- */

export interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  /** Expected nominal annual return before retirement, % */
  annualReturn: number;
  /** Expected annual inflation, % — used to express results in today's money */
  inflationRate: number;
  /** Safe withdrawal rate, % of the nest egg per year (the "4% rule") */
  withdrawalRate: number;
}

export interface RetirementRow {
  age: number;
  contributions: number;
  balance: number;
  /** Balance in today's money */
  realBalance: number;
}

export interface RetirementResult {
  yearsToRetirement: number;
  nestEgg: number;
  realNestEgg: number;
  totalContributions: number;
  totalGrowth: number;
  monthlyIncome: number;
  realMonthlyIncome: number;
  rows: RetirementRow[];
}

export function calculateRetirement(input: RetirementInput): RetirementResult {
  const currentAge = Math.floor(clamp(input.currentAge, 0, 100));
  const retirementAge = Math.floor(clamp(input.retirementAge, currentAge, 100));
  const yearsToRetirement = retirementAge - currentAge;
  const contribution = clamp(input.monthlyContribution, 0, Number.MAX_SAFE_INTEGER);
  const i = clamp(input.annualReturn, 0, 100) / 100 / 12;
  const inflation = clamp(input.inflationRate, 0, 50) / 100;

  let balance = clamp(input.currentSavings, 0, Number.MAX_SAFE_INTEGER);
  let contributions = balance;
  const rows: RetirementRow[] = [{ age: currentAge, contributions, balance, realBalance: balance }];

  for (let y = 1; y <= yearsToRetirement; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + i) + contribution;
      contributions += contribution;
    }
    rows.push({ age: currentAge + y, contributions, balance, realBalance: balance / Math.pow(1 + inflation, y) });
  }

  const realNestEgg = balance / Math.pow(1 + inflation, yearsToRetirement);
  const withdrawal = clamp(input.withdrawalRate, 0, 20) / 100;
  return {
    yearsToRetirement,
    nestEgg: balance,
    realNestEgg,
    totalContributions: contributions,
    totalGrowth: balance - contributions,
    monthlyIncome: (balance * withdrawal) / 12,
    realMonthlyIncome: (realNestEgg * withdrawal) / 12,
    rows,
  };
}

/* -------------------------------------------------------------------------- */
/* Savings goal                                                               */
/* -------------------------------------------------------------------------- */

export interface SavingsGoalResult {
  /** Required end-of-month deposit; 0 when current savings already reach the goal */
  monthlyContribution: number;
  alreadyReached: boolean;
  totalContributions: number;
  interestEarned: number;
  rows: YearlyData[];
}

export function calculateSavingsGoal(
  goal: number,
  currentSavings: number,
  years: number,
  annualRate: number
): SavingsGoalResult {
  const target = clamp(goal, 0, Number.MAX_SAFE_INTEGER);
  const pv = clamp(currentSavings, 0, Number.MAX_SAFE_INTEGER);
  const n = Math.round(clamp(years, 0, 100) * 12);
  const i = clamp(annualRate, 0, 100) / 100 / 12;
  const growth = Math.pow(1 + i, n);
  const shortfall = target - pv * growth;

  let pmt = 0;
  if (shortfall > 0 && n > 0) pmt = i === 0 ? shortfall / n : (shortfall * i) / (growth - 1);
  // With no time left, the only way to reach the goal is to deposit the gap now.
  const lumpSumNow = n === 0 ? Math.max(0, target - pv) : 0;

  let balance = pv + lumpSumNow;
  let invested = pv + lumpSumNow;
  const rows: YearlyData[] = [{ year: 0, principal: invested, interest: 0, balance }];
  for (let m = 1; m <= n; m++) {
    balance = balance * (1 + i) + pmt;
    invested += pmt;
    if (m % 12 === 0 || m === n) {
      rows.push({ year: Math.ceil(m / 12), principal: invested, interest: balance - invested, balance });
    }
  }

  return {
    monthlyContribution: pmt,
    alreadyReached: shortfall <= 0,
    totalContributions: pmt * n + lumpSumNow,
    interestEarned: balance - invested,
    rows,
  };
}

/* -------------------------------------------------------------------------- */
/* Inflation                                                                  */
/* -------------------------------------------------------------------------- */

export interface InflationRow {
  year: number;
  /** What today's basket of goods will cost in `year` years */
  futureCost: number;
  /** What today's money will be worth (buy) in `year` years */
  purchasingPower: number;
}

export interface InflationResult {
  futureCost: number;
  purchasingPower: number;
  /** Percentage of purchasing power lost */
  powerLostPercent: number;
  rows: InflationRow[];
}

export function calculateInflation(amount: number, annualRate: number, years: number): InflationResult {
  const value = clamp(amount, 0, Number.MAX_SAFE_INTEGER);
  const r = clamp(annualRate, -20, 100) / 100;
  const totalYears = Math.floor(clamp(years, 0, 100));

  const rows: InflationRow[] = [];
  for (let y = 0; y <= totalYears; y++) {
    const factor = Math.pow(1 + r, y);
    rows.push({ year: y, futureCost: value * factor, purchasingPower: value / factor });
  }
  const last = rows[rows.length - 1];
  return {
    futureCost: last.futureCost,
    purchasingPower: last.purchasingPower,
    powerLostPercent: value > 0 ? (1 - last.purchasingPower / value) * 100 : 0,
    rows,
  };
}

/* -------------------------------------------------------------------------- */
/* Mortgage refinance                                                         */
/* -------------------------------------------------------------------------- */

export interface RefinanceInput {
  /** Balance still owed on the current loan */
  currentBalance: number;
  /** Current annual interest rate, % */
  currentRate: number;
  /** Years left on the current loan */
  yearsRemaining: number;
  /** New annual interest rate, % */
  newRate: number;
  /** New loan term in years */
  newTermYears: number;
  /** Total closing costs of the refinance */
  closingCosts: number;
  /** true = costs are added to the new loan; false = costs are paid in cash at closing */
  rollClosingCosts: boolean;
  /** Extra cash borrowed against the home (0 for a plain rate-and-term refinance) */
  cashOut?: number;
}

export interface RefinanceSeriesPoint {
  /** Months since closing */
  month: number;
  /** month ÷ 12, rounded to one decimal (chart axis) */
  year: number;
  /** Payments saved to date, plus any cash-out received, minus cash paid at closing. The last point equals lifetimeSavings. */
  cumulativeSavings: number;
}

export interface RefinanceResult {
  currentMonths: number;
  newMonths: number;
  currentPayment: number;
  /** New loan = balance + cash-out + closing costs rolled in */
  newLoanAmount: number;
  newPayment: number;
  /** currentPayment − newPayment (negative when the payment goes up) */
  monthlySavings: number;
  /** true when the payment falls by more than half a cent */
  paymentFalls: boolean;
  /** Closing costs ÷ monthly savings; null when the payment does not fall (break-even is never reached) */
  breakEvenMonths: number | null;
  closingCosts: number;
  /** Closing costs paid in cash at closing (0 when rolled in) */
  paidUpfront: number;
  /** Closing costs added to the new loan (0 when paid upfront) */
  financed: number;
  cashOut: number;
  /** Interest left to pay if you keep the current loan to the end */
  currentRemainingInterest: number;
  /** Interest over the whole new loan */
  newTotalInterest: number;
  /** Interest on the current loan minus interest on the new loan (positive = refinance pays less interest) */
  interestDifference: number;
  /** Interest saved minus all closing costs (positive = refinance is cheaper over the full terms) */
  lifetimeSavings: number;
  /** One point per year (plus the final month) until both loans have ended */
  series: RefinanceSeriesPoint[];
}

export function calculateRefinance(input: RefinanceInput): RefinanceResult {
  const balance = clamp(input.currentBalance, 0, Number.MAX_SAFE_INTEGER);
  const closingCosts = clamp(input.closingCosts, 0, Number.MAX_SAFE_INTEGER);
  const cashOut = clamp(input.cashOut ?? 0, 0, Number.MAX_SAFE_INTEGER);
  const roll = input.rollClosingCosts === true;
  const currentMonths = Math.max(1, Math.round(clamp(input.yearsRemaining, 0, 50) * 12));
  const newMonths = Math.max(1, Math.round(clamp(input.newTermYears, 0, 50) * 12));

  const financed = roll ? closingCosts : 0;
  const paidUpfront = roll ? 0 : closingCosts;
  const newLoanAmount = balance + cashOut + financed;

  const currentPayment = monthlyPayment(balance, input.currentRate, currentMonths);
  const newPayment = monthlyPayment(newLoanAmount, input.newRate, newMonths);
  const monthlySavings = currentPayment - newPayment;
  const paymentFalls = monthlySavings > 0.005;
  const breakEvenMonths = paymentFalls ? closingCosts / monthlySavings : null;

  const currentRemainingInterest = Math.max(0, currentPayment * currentMonths - balance);
  const newTotalInterest = Math.max(0, newPayment * newMonths - newLoanAmount);
  const interestDifference = currentRemainingInterest - newTotalInterest;
  const lifetimeSavings = interestDifference - closingCosts;

  const horizon = Math.max(currentMonths, newMonths);
  const cumulativeAt = (m: number) =>
    Math.min(m, currentMonths) * currentPayment - Math.min(m, newMonths) * newPayment - paidUpfront + cashOut;
  const series: RefinanceSeriesPoint[] = [];
  for (let m = 0; m <= horizon; m += 12) {
    series.push({ month: m, year: Math.round((m / 12) * 10) / 10, cumulativeSavings: cumulativeAt(m) });
  }
  if (horizon % 12 !== 0) {
    series.push({ month: horizon, year: Math.round((horizon / 12) * 10) / 10, cumulativeSavings: cumulativeAt(horizon) });
  }

  return {
    currentMonths,
    newMonths,
    currentPayment,
    newLoanAmount,
    newPayment,
    monthlySavings,
    paymentFalls,
    breakEvenMonths,
    closingCosts,
    paidUpfront,
    financed,
    cashOut,
    currentRemainingInterest,
    newTotalInterest,
    interestDifference,
    lifetimeSavings,
    series,
  };
}
