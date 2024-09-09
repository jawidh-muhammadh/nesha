import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        poppinssemi: ["var(--font-poppins-semi)"],
        poppinsbold: ["var(--font-poppins-bold)"],
        poppinsreg: ["var(--font-poppins-reg)"],
        poppinsreg5: ["var(--font-poppins-reg5)"],
        robotolite : ["var(--font-roboto-400)"],
        robotosemi : ["var(--font-roboto-700)"],
        robotobold : ["var(--font-roboto-900)"],
        inter200 : ["var(--font-inter-200)"],
       inter700 : ["var(--font-inter-700)"],
       inter400 : ["var(--font-inter-400)"],
       inter600 : ["var(--font-inter-600)"]

    
        
   
      },
    },
  },
  plugins: [],
};
export default config;
