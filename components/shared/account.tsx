import USDTImg from "@/public/svgs/usdt.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function Account() {
  return (
    <div className="flex items-stretch">
      <div className="flex bg-accent items-center gap-1 px-2 rounded-l-xl">
        <p>0.000</p>
        <Image src={USDTImg} alt="img" />
      </div>
      <Button variant="custom" className="rounded-l-none rounded-r-xl px-2">
        <Plus />
      </Button>
    </div>
  );
}
