import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DATAIDEA - Programming for Data Science",
  description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA. Learn from industry experts and join a thriving community of learners transforming careers across Africa.",
  keywords: ["data science", "machine learning", "Python", "AI", "education", "Uganda", "Africa"],
  authors: [{ name: "DATAIDEA" }, {name: "Juma Shafara"}],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dataidea.org",
    title: "DATAIDEA - Programming for Data Science",
    description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA.",
    siteName: "DATAIDEA",
    images: ['/logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "DATAIDEA - Programming for Data Science",
    description: "Master Python, Data Analysis, Machine Learning, and AI with DATAIDEA.",
    images: ['/logo.png'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://dataidea.org" />
        <meta name="theme-color" content="#111111" />
        {/* Google tag (gtag.js) - Analytics & Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZD84FCME05"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZD84FCME05');
              gtag('config', 'AW-17721193814');
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-[#1a1a1a] text-[#e5e5e5]"
      >
        {children}
      </body>
    </html>
  );
}
