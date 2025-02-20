import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // tamanhos de screen
      screens: {
        md: "768px",
        lg: "1280px",
        xl: "1920px",
        "2x1": "2560px",
        "3x1": "3440px",
      },
      colors: {
        "primary-pink": "#D35071", // primary-pink
        "secondary-pink": "#F49CBB", // secondary-pink
        danger: "#880D1E", // red
        dark: {
          DEFAULT: "#212121", // dark
          light: "#424242", // lighter shade of dark
          lighter: "#616161", // even lighter shade of dark
        },
        gray: "#828282", // light
        white: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
