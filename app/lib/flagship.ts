/** Single source of truth for the Jan 2027 flagship cohort. */
export const FLAGSHIP = {
  name: 'Programming for Data Science — Live Cohort',
  shortName: 'Programming for Data Science',
  tagline:
    'A 12-week live pathway from Python basics to a portfolio-ready data project — with mentor support and a verified certificate.',
  startDate: '2027-01-12',
  startLabel: '12 January 2027',
  duration: '12 weeks',
  endLabel: 'Early April 2027',
  seats: 25,
  earlyBirdDeadline: '2026-12-15',
  earlyBirdDeadlineLabel: '15 December 2026',
  currency: 'UGX',
  pricing: {
    earlyBird: 750_000,
    regular: 950_000,
    instalment1: 500_000,
    instalment2: 450_000,
    corporate: 990_000,
  },
  includes: [
    'Live weekly sessions + community support',
    'Python → Git → SQL → Analysis & Viz → Stats → intro ML project',
    'Capstone project and portfolio feedback',
    'Verified certificate on dataidea.org',
    'Access to free docs on science.dataidea.org',
  ],
  enrollUrl: 'https://forms.gle/usTT5nm6HaZT1V2cA',
} as const;

export function formatUgx(amount: number): string {
  return `UGX ${amount.toLocaleString('en-UG')}`;
}

export function isEarlyBirdOpen(now: Date = new Date()): boolean {
  const deadline = new Date(`${FLAGSHIP.earlyBirdDeadline}T23:59:59+03:00`);
  return now.getTime() <= deadline.getTime();
}
