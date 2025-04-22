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
        backgroundDark: "#000319",
        light: '#E4ECFF',
        // warning: "#F24E1E", // 
        // warningGradient: "#FF7262",
      },
    },
  },
  plugins: [],
} satisfies Config;
