/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        openTop: {
          '0%': { transform: 'rotate(0) translate(0, 0)' },
          '50%': { transform: 'rotate(45deg) translate(0,0)' },
          '100%': { transform: 'rotate(45deg) translateY(0.375rem)' },
        },
        openMiddle: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0'},
          '100%': { opacity: '0' },
        },
        openBottom: {
          '0%': { transform: 'rotate(0) translate(0, 0)' },
          '50%': { transform: 'rotate(-45deg) translate(0,0)' },
          '100%': { transform: 'rotate(-45deg) translateY(-0.375rem)' },
        },
        closeTop: {
          '0%': { transform: 'rotate(45deg) translate(0.75em, 1.25em)' },
          '50%': { transform: 'rotate(0) translate(0, 0)' },
          '100%': { transform: 'rotate(0) translate(0, 0)' },
        },
        closeMiddle: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
        closeBottom: {
          '0%': { transform: 'rotate(135) translate(-0.5em, 1em)' },
          '50%': { transform: 'rotate(0) translate(0, 0)' },
          '100%': { transform: 'rotate(0) translate(0, 0)' },
        },
        smNav: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        smNavClose: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        factAni: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },
      animation: {
        openTop: 'openTop 0.3s ease-out forwards',
        openMiddle: 'openMiddle 0.3s ease-out forwards',
        openBottom: 'openBottom 0.3s ease-out forwards',
        closeTop: 'closeTop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        closeMiddle: 'closeMiddle 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        closeBottom: 'closeBottom 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        smNav: 'smNav 0.3s ease-in-out forwards',
        smNavClose: 'smNavClose 0.3s ease-in-out forwards',
        factAni: 'factAni 0.3s ease-in-out forwards'
      },
      screens: {
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}