import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavigator from "@/components/shared/bottom-navigator";

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
        <main className="flex-grow pb-6">{children}</main>
        <BottomNavigator />
      </body>
    </html>
  );
}
