/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "20px",
        screens: {
          sm: "100%",
          md: "640px",
          lg: "768px",
          xl: "970px",
          "2xl": "1170px",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        inT: "inT 0.4s forwards",
        outT: "outT 0.4s backwards reverse",
        inM: "inM 0.4s forwards",
        outM: "outM 0.4s backwards reverse",
        inBtm: "inBtm 0.4s forwards",
        outBtm: "outBtm 0.4s backwards reverse",
      },
      keyframes: {
        inM: {
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
        outM: {
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
        inT: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(9px) rotate(0deg)" },
          "100%": { transform: "translateY(9px) rotate(135deg)" },
        },
        outT: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(9px) rotate(0deg)" },
          "100%": { transform: "translateY(9px) rotate(135deg)" },
        },
        inBtm: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-9px) rotate(0deg)" },
          "100%": { transform: "translateY(-9px) rotate(135deg)" },
        },
        outBtm: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-9px) rotate(0deg)" },
          "100%": { transform: "translateY(-9px) rotate(135deg)" },
        },
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
