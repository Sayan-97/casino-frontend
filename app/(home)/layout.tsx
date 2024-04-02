import Footer from "@/components/shared/footer";
import TopBar from "@/components/shared/header";
import TopNavigation from "@/components/shared/navbar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
