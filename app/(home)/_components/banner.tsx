import Image from "next/image";
import Banner2Img from "@/public/imgs/banner-img-2.png";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="container py-3">
      <div className="relative">
        <Image
          src={Banner2Img}
          alt="img"
          className="object-cover rounded-2xl w-full h-[225px]"
        />
        <div className="absolute w-2/3 top-[50%] -translate-y-[50%] left-4 flex flex-col items-start justify-center gap-2">
          <h1 className="text-2xl font-bold">
            Refer and Win Upto 70% Cashback
          </h1>
          <p className="text-sm">Refer and win exciting cashback</p>
          <Button className="bg-blue-500">Refer Now</Button>
        </div>
      </div>
    </section>
  );
}
