// Run with `pnpm test` (Node's built-in test runner with native TypeScript stripping).
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calculateCompoundInterest,
  calculateCreditCardPayoff,
  calculateInflation,
  calculateLoanAmortization,
  calculateMortgage,
  calculateRetirement,
  calculateSavingsGoal,
  calculateSIP,
  monthlyPayment,
} from "./math.ts";

function close(actual: number, expected: number, tolerance = 0.01) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, got ${actual}`);
}

test("monthlyPayment matches the standard annuity formula", () => {
  close(monthlyPayment(200_000, 6, 360), 1199.1);
  close(monthlyPayment(12_000, 0, 12), 1000);
  assert.equal(monthlyPayment(0, 5, 360), 0);
  assert.equal(monthlyPayment(1000, 5, 0), 0);
});

test("compound interest: lump sum, monthly compounding", () => {
  const rows = calculateCompoundInterest(10_000, 0, 10, 5, 12);
  close(rows.at(-1)!.balance, 16_470.09);
  assert.equal(rows[0].year, 0);
  assert.equal(rows.length, 11);
});

test("compound interest: annual compounding matches P(1+r)^t", () => {
  close(calculateCompoundInterest(10_000, 0, 10, 5, 1).at(-1)!.balance, 16_288.95);
});

test("compound interest: end-of-month contributions", () => {
  const last = calculateCompoundInterest(0, 100, 10, 5, 12).at(-1)!;
  close(last.balance, 15_528.23);
  close(last.principal, 12_000);
});

test("compound interest: 0% rate and bad input stay finite", () => {
  close(calculateCompoundInterest(1000, 100, 2, 0).at(-1)!.balance, 3400);
  const rows = calculateCompoundInterest(NaN, -5, NaN, NaN);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].balance, 0);
});

test("SIP: annuity-due future value", () => {
  // 500/month, 12% p.a., 10 years → 500 × ((1.01^120 − 1) / 0.01) × 1.01
  close(calculateSIP(500, 12, 10).at(-1)!.balance, 116_169.54, 0.05);
});

test("SIP: step-up increases yearly investment", () => {
  const flat = calculateSIP(100, 10, 5, 0).at(-1)!;
  const stepped = calculateSIP(100, 10, 5, 10).at(-1)!;
  close(flat.principal, 6000);
  // 1200 × (1 + 1.1 + 1.21 + 1.331 + 1.4641)
  close(stepped.principal, 7326.12);
  assert.ok(stepped.balance > flat.balance);
});

test("loan amortization: totals and yearly sums are consistent", () => {
  const loan = calculateLoanAmortization(200_000, 6, 30);
  close(loan.monthlyPayment, 1199.1);
  close(loan.totalInterest, 231_676.38, 0.5);
  assert.equal(loan.months, 360);
  assert.equal(loan.yearly.length, 30);
  assert.equal(loan.schedule.at(-1)!.balance, 0);
  const principalSum = loan.yearly.reduce((s, y) => s + y.principal, 0);
  close(principalSum, 200_000);
  const interestSum = loan.yearly.reduce((s, y) => s + y.interest, 0);
  close(interestSum, loan.totalInterest);
});

test("loan amortization: 0% rate does not produce NaN", () => {
  const loan = calculateLoanAmortization(12_000, 0, 1);
  close(loan.monthlyPayment, 1000);
  assert.equal(loan.totalInterest, 0);
  assert.equal(loan.months, 12);
});

test("loan amortization: extra payments shorten the loan and cut interest", () => {
  const base = calculateLoanAmortization(200_000, 6, 30);
  const extra = calculateLoanAmortization(200_000, 6, 30, 200);
  assert.ok(extra.months < base.months);
  assert.ok(extra.totalInterest < base.totalInterest);
  assert.equal(extra.schedule.at(-1)!.balance, 0);
});

test("mortgage: PITI breakdown", () => {
  const m = calculateMortgage({
    homePrice: 400_000,
    downPayment: 80_000,
    annualRate: 6.5,
    years: 30,
    propertyTaxRate: 1.2,
    homeInsurance: 1500,
    pmiRate: 0.5,
    hoaMonthly: 0,
  });
  close(m.loanAmount, 320_000);
  close(m.downPaymentPercent, 20);
  close(m.principalAndInterest, 2022.62);
  close(m.monthlyTax, 400);
  close(m.monthlyInsurance, 125);
  assert.equal(m.monthlyPmi, 0, "20% down needs no PMI");
  close(m.totalMonthly, 2547.62);
});

test("mortgage: PMI is charged until 78% LTV, then dropped", () => {
  const m = calculateMortgage({
    homePrice: 300_000,
    downPayment: 15_000,
    annualRate: 6,
    years: 30,
    propertyTaxRate: 0,
    homeInsurance: 0,
    pmiRate: 0.6,
    hoaMonthly: 0,
  });
  close(m.monthlyPmi, (285_000 * 0.006) / 12);
  assert.ok(m.pmiMonths > 0 && m.pmiMonths < 360);
  close(m.totalPmi, m.monthlyPmi * m.pmiMonths);
});

test("credit card payoff: months and interest", () => {
  const r = calculateCreditCardPayoff(5000, 18, 200);
  assert.equal(r.payable, true);
  assert.equal(r.months, 32);
  close(r.totalInterest, 1313.96);
  assert.equal(r.balances.at(-1)!.balance, 0);
});

test("credit card payoff: payment below interest never pays off", () => {
  const r = calculateCreditCardPayoff(10_000, 24, 150);
  assert.equal(r.payable, false);
  close(r.firstMonthInterest, 200);
});

test("retirement: nominal, real and income figures", () => {
  const r = calculateRetirement({
    currentAge: 30,
    retirementAge: 65,
    currentSavings: 0,
    monthlyContribution: 500,
    annualReturn: 6,
    inflationRate: 0,
    withdrawalRate: 4,
  });
  assert.equal(r.yearsToRetirement, 35);
  // 500 × ((1.005^420 − 1) / 0.005)
  close(r.nestEgg, 712_355.15, 0.01);
  close(r.realNestEgg, r.nestEgg);
  close(r.monthlyIncome, (r.nestEgg * 0.04) / 12);
  assert.equal(r.rows.length, 36);
});

test("retirement: inflation lowers the real value", () => {
  const r = calculateRetirement({
    currentAge: 40,
    retirementAge: 60,
    currentSavings: 100_000,
    monthlyContribution: 0,
    annualReturn: 0,
    inflationRate: 3,
    withdrawalRate: 4,
  });
  close(r.nestEgg, 100_000);
  close(r.realNestEgg, 100_000 / Math.pow(1.03, 20));
});

test("savings goal: required monthly deposit reaches the goal", () => {
  const r = calculateSavingsGoal(50_000, 5_000, 5, 4);
  const last = r.rows.at(-1)!;
  close(last.balance, 50_000, 0.01);
  assert.equal(r.alreadyReached, false);
});

test("savings goal: 0% rate and already-reached goals", () => {
  close(calculateSavingsGoal(12_000, 0, 1, 0).monthlyContribution, 1000);
  const done = calculateSavingsGoal(1000, 5000, 3, 2);
  assert.equal(done.alreadyReached, true);
  assert.equal(done.monthlyContribution, 0);
});

test("inflation: future cost and purchasing power", () => {
  const r = calculateInflation(1000, 3, 10);
  close(r.futureCost, 1343.92);
  close(r.purchasingPower, 744.09);
  close(r.powerLostPercent, 25.59);
  assert.equal(r.rows.length, 11);
});
