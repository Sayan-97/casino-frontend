import Image from "next/image"
import Banners from "@/components/shared/banners"
import TigerImg from "@/public/imgs/casino-tiger-img.png";

export default function Casino() {
  return (
    <div className="lg:container">
        <div className="grid grid-cols-12 gap-5">
          <div className="max-lg:hidden col-span-4 relative overflow-hidden rounded-2xl">
            <Image src={TigerImg} alt="img" fill className="object-fill" />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Banners />
          </div>
        </div>
      </div>
  )
}
