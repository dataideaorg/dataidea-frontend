export const ENROLL_FORM_URL = 'https://forms.gle/usTT5nm6HaZT1V2cA';

export const FLAGSHIP_COHORT = {
  name: 'Programming for Data Science',
  tagline: 'Live Cohort',
  startDate: '12 January 2027',
  startDateShort: '12 Jan 2027',
  endDate: '5 April 2027',
  duration: '12 weeks',
  seats: 25,
  earlyBirdDeadline: '15 December 2026',
  earlyBirdDeadlineShort: '15 Dec 2026',
  applyUrl: ENROLL_FORM_URL,
  currency: 'UGX',
  pricing: {
    earlyBird: 750_000,
    regular: 950_000,
    instalment1: 500_000,
    instalment2: 450_000,
    corporate: 990_000,
  },
  includes: [
    'Weekly live sessions plus community support',
    'Guided pathway: Python, Git, analysis, AI-assisted projects, intro ML',
    'Capstone project with feedback',
    'Verified DATAIDEA certificate',
    'Free study materials on science.dataidea.org',
  ],
  modules: [
    { title: 'Python Programming Fundamentals', weeks: 'Weeks 1–3' },
    { title: 'Version Control with Git & GitHub', weeks: 'Week 4' },
    { title: 'Data Analysis & Visualization with Python', weeks: 'Weeks 5–7' },
    { title: 'Using AI to Build Data Science Projects', weeks: 'Weeks 8–10' },
    { title: 'Machine Learning with Python + capstone', weeks: 'Weeks 11–12' },
  ],
} as const;

export function formatUgx(amount: number): string {
  return `UGX ${amount.toLocaleString('en-UG')}`;
}
