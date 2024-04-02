import Image from "next/image";
import Casino from "./_components/casino";
import Exclusives from "./_components/exclusives";
import LiveGames from "./_components/live-games";
import LiveSports from "./_components/live-sports";

import { Button } from "@/components/ui/button";
import Banners from "@/components/shared/banners";
import BonusImg from "@/public/imgs/bonus-banner-cashback.png";
import Banner from "./_components/banner";

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="py-3 lg:container grid grid-cols-11 gap-4">
        <Banners />
        <div className="max-lg:hidden lg:col-span-2 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 p-4 flex flex-col justify-around">
            <h2 className="text-5xl font-bold leading-tight">
              Cashback upto 30% on casinos
            </h2>
            <Button
              variant="custom"
              className="text-black text-xl h-12 font-bold"
            >
              Go to Casino
            </Button>
          </div>
          <Image src={BonusImg} alt="img" className="w-full h-[372px]" />
        </div>
        <div className="max-lg:hidden lg:col-span-2 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 p-4 flex flex-col justify-around">
            <h2 className="text-5xl font-bold leading-tight">
              Cashback upto 30% on casinos
            </h2>
            <Button
              variant="custom"
              className="text-black text-xl h-12 font-bold"
            >
              Go to Casino
            </Button>
          </div>
          <Image src={BonusImg} alt="img" className="w-full h-[372px]" />
        </div>
      </section>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:container">
        <Exclusives />
        <Banner />
      </div>
      <div className="lg:hidden">
        <LiveSports />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:container">
        <Casino />
        <LiveGames />
      </div>
    </main>
  );
}
