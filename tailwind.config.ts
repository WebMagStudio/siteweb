import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "selector",
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
        "accent-light": "#91EAE4",
        accent: "#86A8E7",
        "accent-dark": "#7F7FD5",
        primary: "#003249",
        secondary: "#832161",
        base: "#0D1321",
        fushia: "#FF00C1",
        amber: "#F4AC24",
        white: "#FFFFFF",
        "cyan-400": "#00D0F5",
        "cyan-200": "#81ECFF",
        "violet-500": "#A733FF",
        "violet-300": "#D297FF",
        "navy-950": "#000319",
        "bg-light": "#E4ECFF",
        "indigo-100": "#E4ECFF",
        "slate-200": "#C1C2D3",
        "bg-gradient-dark-start": "#04071D",
        "bg-gradient-dark-end": "#0C0E23",
        "indigo-400-16": "rgba(105, 113, 162, 0.16)",
        "slate-700-37": "rgba(39, 42, 60, 0.7)",
        "bg-light-menu": "#240651",
        "text-light": "#e5e8ff",
        "stroke-article": "rgba(54, 55, 73, 0.43)",
        mistyLavender: "#BEC1DD",
        midnight: "#13162D",
        nocture: "#161A31",
        eclipse: "#06091F",
        warning: "#C34124",
        // warning: "#F24E1E", //
        // warningGradient: "#FF7262",
      },
      // screens: {
      //   "md+": "1040px", // breakpoint personnalisé
      // },
    },
  },
  plugins: [],
} satisfies Config;
