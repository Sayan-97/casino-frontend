import Twitter from "@/public/imgs/twitter.png";
import Github from "@/public/imgs/github.png";
import Telegram from "@/public/imgs/telegram.png";
import Facebook from "@/public/imgs/facebook.png";
import Discord from "@/public/imgs/discord.png";
import Bitcoin from "@/public/imgs/bitcoin.png";
import Instagram from "@/public/imgs/instagram.png";
import AppLogo from "@/public/imgs/app-logo.png";
import Image from "next/image";
import USDT from "@/public/imgs/usdt2.png";

export default function Footer() {
  return (
    <footer className="container py-2 space-y-2">
      <div className="grid grid-cols-2 gap-6 py-4 border-t border-white/20">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Sports</h2>
          <ul className="space-y-1">
            {["Home", "Live", "Sports Rules"].map((item, index) => (
              <li key={index} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Casino</h2>
          <ul className="space-y-1">
            {["Games", "VIP Club", "Promotions"].map((item, index) => (
              <li key={index} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Support</h2>
          <ul className="space-y-1">
            {[
              "Fairness",
              "Affiliate",
              "Responsible Gambling",
              "Gamble Aware",
              "Live Support",
              "Help Center",
            ].map((item, index) => (
              <li key={index} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Community</h2>
          <ul className="space-y-1">
            {[
              "Blog",
              "Forum",
              "Facebook",
              "Twitter",
              "Instagram",
              "YouTube",
              "Shop",
            ].map((item, index) => (
              <li key={index} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">About Us</h2>
          <ul className="space-y-1">
            {[
              "Privacy Policy",
              "Licenses",
              "AML Policy",
              "Terms of Service",
              "Self Exclusion",
              "Primedice",
            ].map((item, index) => (
              <li key={index} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 py-4 border-t border-white/20">
        <h2 className="text-lg font-semibold">Join our Community</h2>
        <div className="flex items-center gap-3">
          <Image src={Twitter} alt="img" />
          <Image src={Github} alt="img" />
          <Image src={Telegram} alt="img" />
          <Image src={Facebook} alt="img" />
          <Image src={Discord} alt="img" />
          <Image src={Bitcoin} alt="img" />
          <Image src={Instagram} alt="img" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 border-y border-white/20 py-4">
        <h2 className="text-lg font-semibold">Accepted Networks</h2>
        <div className="flex items-center">
          <Image src={USDT} alt="img" width={35} height={35}/>
        </div>
      </div>
      <div className="flex flex-col text-center gap-6 py-4">
        <div className="flex flex-col items-center">
          <Image src={AppLogo} alt="img"  />
          <h1 className="text-lg font-bold">BetBloc</h1>
        </div>
        <p className="text-sm text-muted">
          © 2023 Betbloc.com | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
