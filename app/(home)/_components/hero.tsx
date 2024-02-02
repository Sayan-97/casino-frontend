import Head from "@/components/shared/head";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { topBanner } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-3">
      <Carousel>
        <CarouselContent className="container -ml-2">
          {topBanner.map((item, index) => (
            <CarouselItem key={index} className="pl-2 rounded-2xl">
              <div className="relative w-auto h-[221px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-black blur-[140px] z-10"></div>
                <Image
                  src={item.image}
                  alt="img"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="w-2/3 absolute inset-0 p-4 flex flex-col justify-center items-start gap-2 z-20">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
