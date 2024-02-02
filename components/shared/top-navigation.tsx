"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { topNavMenus } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const [active, setActive] = useState("Home");
  return (
    <Carousel className="py-3" opts={{ dragFree: true }}>
      <CarouselContent className="container">
        {topNavMenus.map((item, index) => (
          <CarouselItem key={index} className="flex-[0_0_32%]">
            <Link
              href={item.link}
              onClick={() => setActive(item.label)}
              className={`flex items-center justify-center gap-3 ${
                active === item.label ? "bg-accent" : ""
              } px-2 py-2 rounded-2xl`}
            >
              <Image src={item.icon} alt="img" width={20} height={20} />
              <h6>{item.label}</h6>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
