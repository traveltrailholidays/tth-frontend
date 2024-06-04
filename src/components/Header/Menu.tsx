'use client';

import { AlignJustify } from "lucide-react";
import Avatar from "../util/Avatar";
import { CgMenuRight } from "react-icons/cg";

const Menu = () => {
  return (
    <>
      <div className="flex gap-3 items-center justify-between border-[0.125rem] rounded-full p-2 cursor-pointer">
        <CgMenuRight className="h-6 w-6 text-custom-txl dark:text-custom-txd" />
        <Avatar src="" className="hidden lg:flex w-7"/>
      </div>
    </>
  )
}

export default Menu