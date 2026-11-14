export const SERVICES = [
  "New website",
  "Redesign or AI site rescue",
  "Speed fix",
  "Care plan",
  "Not sure yet",
] as const;

export const BUDGETS = [
  "Under €500",
  "€500 to €1,000",
  "€1,000 to €2,500",
  "€2,500+",
  "Not sure yet",
] as const;

export const TIMELINES = [
  "As soon as possible",
  "Within a month",
  "1 to 3 months",
  "Just exploring",
] as const;

export type ServiceOption = (typeof SERVICES)[number];
export type BudgetOption = (typeof BUDGETS)[number];
export type TimelineOption = (typeof TIMELINES)[number];

export type Enquiry = {
  name: string;
  email: string;
  services: ServiceOption[];
  budget: BudgetOption;
  timeline: TimelineOption;
  source: string;
};
