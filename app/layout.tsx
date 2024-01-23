import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxy SuperMarket",
  description: "No-1 Ecommerce Web Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
        <Header/>
        {children}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
           <p>Copyright 2023 - ALL right reservd by Galaxy Supermarket</p>
        </footer>
        </div>
        
      </body>
    </html>
  );
}
