import Head from "@/components/shared/head";
import React from "react";
import LiveImage from "@/public/svgs/playing-cards.svg";
import { games } from "@/constants";
import Image from "next/image";

export default function LiveGames() {
  return (
    <section className="container py-3 space-y-4">
      <Head image={LiveImage} title="Live Games" />
      <div className="grid grid-cols-2 gap-4">
        {games.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="relative w-auto h-[200px]">
              <div
                className="absolute inset-0 z-10 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)) 50%",
                }}
              ></div>
              <Image
                src={item.img}
                alt="img"
                fill
                className="object-cover rounded-2xl"
              />
              <h1 className="absolute left-2 bottom-2 z-20 text-xl font-extrabold uppercase">
                {item.name}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <p>{item.playing}</p>
              <p className="text-muted">Playing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
