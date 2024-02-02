import Footer from "@/components/shared/footer";
import TopBar from "@/components/shared/top-bar";
import TopNavigation from "@/components/shared/top-navigation";
import React from "react";

export default function HomeLayout({
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
