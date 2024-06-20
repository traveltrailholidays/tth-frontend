"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const router = useRouter();

  const handleLogo = () => {
    router.push("/");
  };

  return (
    <div
      onClick={handleLogo}
      className="flex items-center select-none gap-3 cursor-pointer"
    >
      <Image
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-10"
      />
      <span className="hidden sm:flex font-[500] text-2xl text-custom-clp">
        travel trail holidays
      </span>
    </div>
  );
};

export default Logo;
