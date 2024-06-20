"use client";

import Container from "../util/Container";
import Section from "../util/Section";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Section className="mt-24 390:mt-0 lg:mt-28">
      <div
        className="w-[20vw] h-[400px] bg-custom-clp/25 rounded-full absolute -z-10 top-0 right-0
          blur-[100px]"
      ></div>
      <Container
        className="flex justify-center lg:justify-around items-center 390:h-screen lg:h-auto
          relative"
      >
        <div
          className="w-[20vw] h-[400px] bg-custom-clp/10 rounded-full absolute -z-10 bottom-0 left-0
            blur-[100px]"
        ></div>
        <div className="">
          <h1
            className="text-[14vw] md:text-[13vw] lg:text-[90px] 1140:text-[115px] 2xl:text-[120px]
              1600:text-[140px] font-[700] leading-tight w-full max-w-[1000px] transition"
          >
            Travel Beyond Boundaries.
          </h1>
          <h3 className="mt-5 mx-1 text-gray-500">
            Discover the captivating beauty of India&apos;s most popular destination
            with Travel Trail Holidays.
          </h3>
          <div className="mt-10 mx-1">
            <span className="font-[600]">Get Free Qoute</span>
            <div
              className="shadow border-[1px] dark:border-custom-pbod p-3 rounded mt-2 flex flex-col
                lg:flex-row gap-3 max-w-[900px]"
            >
              <input
                type="text"
                className="w-full bg-background border-[1px] dark:border-gray-600 rounded outline-none p-2"
                placeholder="Your name"
              />
              <input
                type="text"
                className="w-full bg-background border-[1px] dark:border-gray-600 rounded outline-none p-2"
                placeholder="Email id"
              />
              <input
                type="text"
                className="w-full bg-background border-[1px] dark:border-gray-600 rounded outline-none p-2"
                placeholder="Phone no."
              />
              <button
                type="submit"
                className="bg-custom-clp rounded py-2 px-5 text-white font-[500] hover:bg-custom-clp/90"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/images/travel111.png"
          alt=""
          width={100}
          height={100}
          className="select-none hidden lg:block max-w-[600px] w-[400px] 1140:w-[35vw] transition pb-10
            drop-shadow-2xl"
          quality={100}
          unoptimized
        />
      </Container>
    </Section>
  );
};

export default HeroSection;
