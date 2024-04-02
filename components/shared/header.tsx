import Image from "next/image";
import AppLogo from "@/public/svgs/AppLogo.svg";
import Account from "@/components/shared/account";
import Profile from "./profile";
import Wheel from "./wheel-of-fortune";

export default function Header() {
  return (
    <header className="max-md:container lg:px-2 py-3 flex items-center justify-between lg:justify-end">
      <Image
        src={AppLogo}
        alt="img"
        width={36}
        height={36}
        className="lg:hidden"
      />
      <div className="flex items-center gap-2">
        <Wheel />
        <Account />
        <Profile />
      </div>
    </header>
  );
}
