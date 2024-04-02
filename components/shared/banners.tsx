import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { topBanner } from "@/constants";
import Image from "next/image";

export default function Banners() {
  return (
    <Carousel className="col-span-12 lg:col-span-7">
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
                <h1 className="text-xl lg:text-5xl font-bold">{item.title}</h1>
                <p className="text-sm lg:text-lg">{item.desc}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
