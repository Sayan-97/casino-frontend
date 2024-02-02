import Head from "@/components/shared/head";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LiveSportsImage from "@/public/svgs/top-sports.svg";
import BallSvg from "@/public/svgs/bnw-ball.svg";

export default function LiveSports() {
  return (
    <section className="py-3 space-y-4">
      <div className="container flex items-center justify-between">
        <Head image={LiveSportsImage} title="Live Sports" />
        <p className="text-xs bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          View All
        </p>
      </div>
      <Carousel>
        <CarouselContent className="container">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="flex-[0_0_94%]">
              <div className="bg-accent w-auto h-auto rounded-lg p-2">
                <div className="flex items-center justify-between pb-2">
                  <p>AFC Cup</p>
                  <div className="flex items-center">
                    <p className="bg-[#0C1733] text-muted px-1">Halftime</p>
                    <p className="border border-red-500 text-red-500 px-1 rounded">
                      Live
                    </p>
                  </div>
                </div>
                <hr className="border-white/20" />
                <div className="grid grid-cols-5 pt-2 gap-3 items-center">
                  <div className="col-span-2 flex flex-col items-start gap-2">
                    <Image src={BallSvg} alt="img" />
                    <p className="line-clamp-1 text-xs">Dynamic Herb Club</p>
                  </div>
                  <p className="col-span-1 text-center text-xl font-bold">
                    0 : 1
                  </p>
                  <div className="col-span-2 flex flex-col items-end gap-2">
                    <Image src={BallSvg} alt="img" />
                    <p className="line-clamp-1 text-xs">Macarthur FC</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="w-auto h-[28.36px] bg-[#0C1733] rounded flex items-center justify-between p-2">
                    <p>1</p>
                    <p>45.0</p>
                  </div>
                  <div className="w-auto h-[28.36px] bg-[#0C1733] rounded flex items-center justify-between p-2">
                    <p>draw</p>
                    <p>9.5</p>
                  </div>
                  <div className="w-auto h-[28.36px] bg-[#0C1733] rounded flex items-center justify-between p-2">
                    <p>2</p>
                    <p>1.02</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
