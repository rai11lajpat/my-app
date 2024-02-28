import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Home from "@/components/home";
import Cnavbar from "@/components/nav";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cnavbar/>
        {children}
        
        </body>
    </html>
  );
}
