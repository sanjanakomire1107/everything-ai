import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everything Talent Blog",
  description: "A blog about AI-powered recruitment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
         <Header/> 
        {children}
      </body>
    </html>
  );
}
