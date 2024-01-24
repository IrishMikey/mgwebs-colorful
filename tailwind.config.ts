import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        daysOne: ["var(--font-days-one)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "1px black", // For WebKit browsers
          "text-stroke": "1px black", // Standard syntax (not widely supported)
        },
        // Add more custom utilities if needed
      };
    },
  ],
};
export default config;
