import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "royal-blue": {
        "50": "#f0f4fe",
        "100": "#dde5fc",
        "200": "#c3d2fa",
        "300": "#99b5f7",
        "400": "#698ff1",
        "500": "#4266eb",
        "600": "#304ae0",
        "700": "#2838cd",
        "800": "#262fa7",
        "900": "#242d84",
        "950": "#1a1e51",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
};
export default config;
