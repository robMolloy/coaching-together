import type { Config } from "tailwindcss";
import * as themes from "daisyui/src/theming/themes";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        pastel: {
          ...themes.default.pastel,
          primary: "teal",
          secondary: "teal",
        },
      },
    ],
  },
};
export default config;
