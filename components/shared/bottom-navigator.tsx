"use client";

import { bottomNavMenus } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BottomNavigator() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="sticky inset-x-0 bottom-0 bg-accent z-40">
      <ul className="container grid grid-cols-5">
        {bottomNavMenus.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              onClick={() => setActive(item.label)}
              className="w-full h-full flex flex-col items-center justify-between gap-1 py-2"
            >
              {index !== 2 ? (
                <>
                  {active === item.label ? (
                    <Image src={item.activeIcon} alt="img" />
                  ) : (
                    <Image src={item.inactiveIcon} alt="img" />
                  )}
                </>
              ) : (
                <div className="absolute bottom-8 bg-accent p-1 rounded-full">
                  <div className="bg-background p-2 rounded-full">
                    {active === item.label ? (
                      <Image src={item.activeIcon} alt="img" />
                    ) : (
                      <Image src={item.inactiveIcon} alt="img" />
                    )}
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="opacity-0">
                  <Image src={item.inactiveIcon} alt="img" />
                </div>
              )}
              <p
                className={`text-xs ${
                  active === item.label
                    ? "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                    : ""
                }`}
              >
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
