import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "January 2027 Cohort | DATAIDEA",
  description:
    "Programming for Data Science live cohort. 12 weeks from 12 January 2027. Early bird UGX 750,000 until 15 December 2026. Regular UGX 950,000.",
};

export default function CohortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
