import Footer from "@/components/shared/footer";
import TopBar from "@/components/shared/header";
import TopNavigation from "@/components/shared/navbar";
import React from "react";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <TopNavigation />
      {children}
      <Footer />
    </>
  );
}
