import Provider1 from "@/public/imgs/evolution-gaming.png";
import Provider2 from "@/public/imgs/netent-gaming.png";
import Provider3 from "@/public/imgs/sp-gaming.png";
import Provider4 from "@/public/imgs/evolution-gaming.png";
import Image from "next/image";
import Head from "@/components/shared/head";
import TopProvidersImage from "@/public/svgs/star.svg";

export default function TopProviders() {
  return (
    <section className="py-4 space-y-4">
      <div className="container flex items-center justify-between">
        <Head image={TopProvidersImage} title="Top Providers" />
        <p className="text-xs bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          View All
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 container">
        <div className="bg-accent rounded-tl-md overflow-hidden flex items-center justify-center">
          <Image src={Provider1} alt="img" className="object-cover" />
        </div>
        <div className="bg-accent rounded-tr-md overflow-hidden flex items-center justify-center">
          <Image src={Provider2} alt="img" className="object-cover" />
        </div>
        <div className="bg-accent rounded-bl-md overflow-hidden flex items-center justify-center">
          <Image src={Provider3} alt="img" className="object-cover" />
        </div>
        <div className="bg-accent rounded-br-md overflow-hidden flex items-center justify-center">
          <Image src={Provider4} alt="img" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
