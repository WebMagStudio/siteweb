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
        primary: "#CBACF9", // 
        primaryGradient: "#7E5DB0",
        secondary: "#FFFFFF", // 
        // secondaryGradient: "#2D7AF5",
        tertiary: "#00D0F5", // 
        tertiaryGradient: "#81ECFF",
        accent: "#A733FF", // 
        accentGradient: "#D297FF",
        menu:"#C1C2D3",
        backgroundDark: "#000319",
        backgroundMenu: "#04071D",
        light: "#E4ECFF",
        linearBgAMenu: "#04071D",
        linearBgBMenu: "#0C0E23",
        // linearStrokeAMenu: "#6971A2",
        linearStrokeBMenu: "#272A3C",
        // warning: "#F24E1E", // 
        // warningGradient: "#FF7262",
      },
    },
  },
  plugins: [],
} satisfies Config;
