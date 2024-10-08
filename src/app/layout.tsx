import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Poppins} from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const poppinsSemi = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins-semi",
});


const poppinsbold = Poppins({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-poppins-bold",
});


const poppinsreg = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins-reg",
});

const poppinsreg5 = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins-reg5",
});


const inter200 = Inter({
   subsets: ["latin"],
   weight  : ["200"],
   variable : "--font-inter-200" 
  });

  const inter700 = Inter({
    subsets: ["latin"],
    weight  : ["700"],
    variable : "--font-inter-700" 
   });


   const inter400 = Inter({
    subsets: ["latin"],
    weight  : ["400"],
    variable : "--font-inter-400" 
   });
 

   const inter600 = Inter({
    subsets: ["latin"],
    weight  : ["600"],
    variable : "--font-inter-600" 
   });
 
 



export const metadata: Metadata = {
  title: "Nesharaj Ganeshan ",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={` ${poppinsSemi.variable} ${poppinsbold.variable} ${poppinsreg.variable} ${poppinsreg5.variable} ${inter200.variable}  ${inter700.variable}  ${inter400.variable}  ${inter600.variable}`} lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
