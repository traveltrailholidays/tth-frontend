"use client";

import Avatar from "../util/Avatar";
import { CgMenuRight } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";
import Section from "../util/Section";
import Logo from "../util/Logo";
import { IoMdClose } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FiInfo } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdDarkMode, MdPayment } from "react-icons/md";
import MenuItems from "./MenuItems";
import { ThemeModeToggle } from "../ui/theme-mode-toggle";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target instanceof HTMLElement && event.target.closest(".modal"))
      ) {
        setIsOpen(false);
      }
    };

    const handleBodyOverflow = () => {
      if (isOpen && !window.matchMedia("(min-width: 1024px)").matches) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    handleBodyOverflow();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="flex gap-3 items-center justify-between border-[0.125rem] border-custom-pbol
          dark:border-custom-pbod rounded-full p-2 cursor-pointer"
      >
        <CgMenuRight className="h-6 w-6 text-custom-txl dark:text-custom-txd" />
        <Avatar src="" className="hidden lg:flex w-7" />
      </div>

      {isOpen && (
        <div
          className={`modal flex absolute w-screen h-screen right-0 top-0 z-50 bg-black/40 lg:right-10
            lg:h-auto lg:max-w-[250px] lg:top-[3.5rem] lg:bg-transparent xl:right-20 shadow
            lg:rounded-xl lg:border-[0.1rem] dark:border-gray-600`}
        >
          <Section
            className={`bg-background w-3/4 py-3 border-r-[0.25rem] border-[#FF5956] overflow-auto
              relative sm:w-[450px] lg:py-1 lg:w-full lg:rounded-xl lg:border-[0.125rem]
              lg:border-none lg:shadow-all-side`}
          >
            {/* Smaller Device Heading*/}
            <div className={"lg:hidden"}>
              <Section
                className={`bg-transparent absolute top-0 z-40 bg-black w-full py-3 shadow dark:border-b-[0.1rem] dark:border-custom-pbod mx-auto
                  px-4 flex justify-between items-center`}
              >
                <Logo />
                <div
                  onClick={handleCloseModal}
                  className={`flex gap-3 items-center justify-between border-[0.1rem] dark:border-custom-pbod rounded-full p-2
                    hover:cursor-pointer`}
                >
                  <IoMdClose className="h-6 w-6 text-custom-txl dark:text-custom-txd" />
                </div>
              </Section>
            </div>

            <div className={"mt-[3.5rem] lg:mt-0"}>
              <Link
                href="/auth/signin"
                onClick={handleCloseModal}
                className={`flex items-center justify-between gap-2 p-4 text-custom-txl dark:text-custom-txd
                  font-[500] hover:cursor-pointer hover:bg-custom-phl hover:dark:bg-custom-phd`}
              >
                <div className={"flex items-center gap-3"}>
                  <Avatar src={undefined} className={"w-9"} />
                  <span>Account</span>
                </div>
              </Link>
              <div className="border-b-[0.1rem] dark:border-custom-pbod"></div>
              <MenuItems
                icon={GoHome}
                size={24}
                href="/"
                text="Home"
                onClick={handleCloseModal}
                classes="lg:hidden"
              />
              <div className="border-b-[0.1rem] dark:border-custom-pbod lg:hidden"></div>
              <MenuItems
                icon={FiInfo}
                size={24}
                href="/about-us"
                text="About US"
                onClick={handleCloseModal}
                classes="lg:hidden"
              />
              <div className="border-b-[0.1rem] dark:border-custom-pbod lg:hidden"></div>
              <MenuItems
                icon={RiContactsBook3Line}
                size={24}
                href="/contact-us"
                text="Contact Us "
                onClick={handleCloseModal}
                classes="lg:hidden"
              />
              <div className="border-b-[0.1rem] dark:border-custom-pbod lg:hidden"></div>
              <MenuItems
                icon={MdPayment}
                size={24}
                href="/payments"
                text="Payments"
                onClick={handleCloseModal}
                classes="lg:hidden"
              />
              <div className="border-b-[0.1rem] dark:border-custom-pbod lg:hidden"></div>

              <div
                className={`flex items-center justify-between gap-2 p-4 text-custom-txl dark:text-custom-txd
                  font-[500]`}
              >
                <div className={"flex items-center gap-3"}>
                  <div
                    className={`rounded-full w-9 h-9 items-center justify-center flex bg-custom-ibl
                      dark:bg-custom-ibd`}
                  >
                    <MdDarkMode size={24} />
                  </div>
                  <span>Dark Mode</span>
                </div>
                <ThemeModeToggle />
              </div>
              <div className="border-b-[0.1rem] dark:border-custom-pbod lg:hidden"></div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default Menu;
