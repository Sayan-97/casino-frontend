import Head from "@/components/shared/head";
import NewArrivalsImage from "@/public/svgs/rocket.svg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { games } from "@/constants";

export default function NewArrivals() {
  const filteredGames = games.filter((item) => item.category === "new");
  return (
    <section className="py-3 space-y-4">
      <div className="container flex items-center justify-between">
        <Head image={NewArrivalsImage} title="New Arrivals" />
        <p className="text-xs bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          View All
        </p>
      </div>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="container">
          {filteredGames.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_50%] rounded-2xl space-y-2"
            >
              <div className="relative w-auto h-[134px]">
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
