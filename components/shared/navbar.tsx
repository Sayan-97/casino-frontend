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
import AppLogo from "@/public/imgs/app-logo.png";
import OnboardingButtons from "./onboarding-buttons";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <Carousel className="lg:hidden py-3" opts={{ dragFree: true }}>
        <CarouselContent className="container">
          {topNavMenus.map((item, index) => (
            <CarouselItem key={index} className="flex-[0_0_33%]">
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
      <nav className="max-lg:hidden sticky top-0 z-40 container">
        <div
          className="bg-accent px-4 py-2 rounded-xl flex items-center gap-6"
          style={{
            background:
              "linear-gradient(90deg, #1E283F 0%, rgba(20, 27, 46, 0.60) 100%), #090F1E",
          }}
        >
          <Link href="/">
            <Image src={AppLogo} alt="img" priority />
          </Link>
          <ul className="flex-grow flex items-center gap-2">
            {topNavMenus.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.link}
                  onClick={() => setActive(item.label)}
                  className={`flex items-center gap-1 ${
                    active === item.label && "bg-background"
                  } text-sm px-4 py-2 rounded-2xl`}
                >
                  <Image src={item.icon} alt="img" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <OnboardingButtons />
        </div>
      </nav>
    </>
  );
}
