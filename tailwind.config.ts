import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors : {
      primary : "#805AF5", 
      secondary :"#fff",
      altPrimary : "#35316f", 
      heading :"#800080", 
      background :"#0E0C15",
      dark : "#21242D",
      darker : "rgba(6, 6, 6, 0.7)",
      darkest :"rgba(0 , 0 , 0, 0.3)", 
      blackest : "#16181e",
      whiteOff : "rgba(255,255,255,0.05)", 
      body : "#BCC3D7", 
      link :"#B9B9B9",
      borderDark : "#2E313D",
      borderLight : "#e5e7eb",
      themeGray : "#3E414B",
      midGray : "#878787", 
      success : "#3EB75E",
      danger : "#FF0003", 
      wraning : "#FFC876", 
      info :"#1BA2DB",
      gradientEnd : "#cd99ff"
     }
    },
  },
  plugins: [],
};
export default config;
//  gradient to right from-primary to-gradientEnd