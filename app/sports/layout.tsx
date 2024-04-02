import Head from "@/components/shared/head";
import React from "react";
import Football from "@/public/svgs/football.svg";
import Hockey from "@/public/svgs/hockey.svg";
import BasketballImg from "@/public/svgs/basketball.svg";
import TennisImg from "@/public/svgs/tennis.svg";
import VolleyballImg from "@/public/svgs/voleball.svg";
import CS from "@/public/svgs/cs.svg";
import Dota from "@/public/svgs/dota.svg";
import Link from "next/link";

export default function SportsLayout({
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
            <Head image={Football} title="Soccer" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={Hockey} title="Ice Hockey" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={BasketballImg} title="Basketball" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={TennisImg} title="Tennis" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={VolleyballImg} title="Volleyball" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={CS} title="Counter Strike 2" />
            <p>12</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between hover:bg-background px-4 py-2"
          >
            <Head image={Dota} title="Dota 2" />
            <p>12</p>
          </Link>
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </main>
  );
}
