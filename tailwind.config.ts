import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        // colorPurple300: "#CBACF9", //
        // primaryGradient: "#7E5DB0",
        // secondary: "#FFFFFF", //
        // // secondaryGradient: "#2D7AF5",
        // tertiary: "#00D0F5", //
        // tertiaryGradient: "#81ECFF",
        // accent: "#A733FF", //
        // accentGradient: "#D297FF",
        // backgroundDark: "#000319",
        // light: '#E4ECFF',
        "purple-300": "#CBACF9",
        "purple-600": "#7E5DB0",
        white: "#FFFFFF",
        "cyan-400": "#00D0F5",
        "cyan-200": "#81ECFF",
        "violet-500": "#A733FF",
        "violet-300": "#D297FF",
        "navy-950": "#000319",
        "indigo-100": "#E4ECFF",
        "slate-200": "#C1C2D3",
        "blue-950": "#04071D",
        "blue-900": "#0C0E23",
        "indigo-400-16": "rgba(105, 113, 162, 0.16)",
        "slate-700-37": "rgba(39, 42, 60, 0.37)",
        // warning: "#F24E1E", //
        // warningGradient: "#FF7262",
      },
    },
  },
  plugins: [],
} satisfies Config;
