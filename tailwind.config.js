/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "#dd8604",
          hover: "#c77804",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f3a42d",
          foreground: "#ffffff",
        },
        easi: {
          primary: "#dd8604",
          primaryHover: "#c77804",
          secondary: "#f3a42d",
          dark: "#333333",
          light: "#ffffff",
          gray: "#666666",
          lightGray: "#f5f5f5",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      typography: {
        h1: 'text-4xl lg:text-5xl font-bold',
        h2: 'text-3xl font-bold',
        h3: 'text-2xl font-bold',
        h4: 'text-xl font-semibold',
        body: 'text-base',
        small: 'text-sm',
      }
    },
  },
  plugins: [],
}
