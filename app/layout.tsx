import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DATAIDEA - Data Science Education for Africa",
  description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA. Learn from industry experts and join a thriving community of learners transforming careers across Africa.",
  keywords: ["data science", "machine learning", "Python", "AI", "education", "Uganda", "Africa"],
  authors: [{ name: "DATAIDEA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dataidea.io",
    title: "DATAIDEA - Data Science Education for Africa",
    description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA.",
    siteName: "DATAIDEA",
  },
  twitter: {
    card: "summary_large_image",
    title: "DATAIDEA - Data Science Education for Africa",
    description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dataidea.io" />
        <meta name="theme-color" content="#14b8a6" />
      </head>
      <body
        className={`${dmSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
