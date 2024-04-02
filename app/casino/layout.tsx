import Head from "@/components/shared/head";
import React from "react";
import CasinoCatImg from "@/public/svgs/casino-cat-icon.svg";
import Link from "next/link";

export default function CasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow flex container pt-2">
      <div className="hidden lg:inline-block w-72 h-[calc(100vh-70px)] bg-[#141B2E] sticky top-16 rounded-2xl">
        <div className="grid py-2">
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="BetBloc games" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="New" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Quick games" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Grand Holiday" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Drops & Wins" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Slots" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Top 20 in Russia" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Live Casino" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Only on 1win" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Top games" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Bonus buy" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="All games" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CasinoCatImg} title="Jackpots" />
            <p>12</p>
          </Link>
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </main>
  );
}
