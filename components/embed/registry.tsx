import type { ComponentType } from "react";
import { CompoundInterest } from "@/components/calculators/CompoundInterest";
import { CreditCardPayoff } from "@/components/calculators/CreditCardPayoff";
import { Inflation } from "@/components/calculators/Inflation";
import { LoanAmortization } from "@/components/calculators/LoanAmortization";
import { Mortgage } from "@/components/calculators/Mortgage";
import { Retirement } from "@/components/calculators/Retirement";
import { SavingsGoal } from "@/components/calculators/SavingsGoal";
import { SIPReturn } from "@/components/calculators/SIPReturn";

/** Calculator slug → interactive component. Add new calculators here so they get an embed route. */
export const calculatorComponents: Record<string, ComponentType> = {
  mortgage: Mortgage,
  "loan-amortization": LoanAmortization,
  "credit-card-payoff": CreditCardPayoff,
  "compound-interest": CompoundInterest,
  "sip-return": SIPReturn,
  retirement: Retirement,
  "savings-goal": SavingsGoal,
  inflation: Inflation,
};
