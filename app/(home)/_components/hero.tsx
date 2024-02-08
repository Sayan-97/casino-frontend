import Head from "@/components/shared/head";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { topBanner } from "@/constants";
import Image from "next/image";
import BonusImg from "@/public/imgs/bonus-banner-cashback.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-3 lg:px-2 grid grid-cols-12 gap-4">
      <Carousel className="col-span-12 lg:col-span-6">
        <CarouselContent className="max-lg:container -ml-2">
          {topBanner.map((item, index) => (
            <CarouselItem key={index} className="pl-2 rounded-2xl">
              <div className="relative w-auto h-[221px] lg:h-[372px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-black blur-[140px] lg:blur-[200px] z-10"></div>
                <Image
                  src={item.image}
                  alt="img"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="w-2/3 absolute inset-0 p-4 flex flex-col justify-center items-start gap-2 lg:gap-8 z-20">
                  <h1 className="text-xl lg:text-5xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm lg:text-lg">{item.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="max-lg:hidden lg:col-span-3 rounded-2xl overflow-hidden relative">
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
      <div className="max-lg:hidden lg:col-span-3 rounded-2xl overflow-hidden relative">
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
  );
}
