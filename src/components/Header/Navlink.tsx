"use client";

import ActiveLink from "@/components/util/ActiveLink";

const Navlink = () => {
  return (
    <div className="gap-5 items-center hidden lg:flex font-[500]">
      <ActiveLink exact href="/" text="Home" />
      <ActiveLink exact href="/about-us" text="About" />
      <ActiveLink exact href="/contact-us" text="Contact" />
      <ActiveLink exact href="/payments" text="Payments" />
    </div>
  );
};

export default Navlink;
