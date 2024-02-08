import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WheelImage from "@/public/imgs/wheel.png";
import Image from "next/image";
import Limbo from "@/public/imgs/wheel-of-fort.png"

export default function Wheel() {
  return (
    <Dialog>
      <DialogTrigger className="bg-accent p-1.5 rounded-full"><Image src={Limbo} alt="img" className="w-6 h-auto"/></DialogTrigger>
      <DialogContent className="border-none">
        <Image src={WheelImage} alt="img" />
      </DialogContent>
    </Dialog>
  );
}
