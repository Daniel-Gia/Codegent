import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4361EE",
        },
        secondary: {
          DEFAULT: "#4CC9F0",
        },
        neutral:{
          DEFAULT: "#011926",
        },
      },
    },
    fontFamily: {
      spaceGrotesk: [`var(--font-space-grotesk)`],
      dmSans: [`var(--font-DM-Sans)`],
      varelaRound: [`var(--font-varelaRound)`],
    },
  },
  plugins: [],
};
export default config;
