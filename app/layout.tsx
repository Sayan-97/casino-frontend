import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavigator from "@/components/shared/bottom-navbar";
import Navbar from "@/components/shared/navbar";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BetBloc",
  description: "BetBloc Casino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <BottomNavigator />
      </body>
    </html>
  );
}
