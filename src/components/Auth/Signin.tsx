"use client";

import Container from "@/components/util/Container";
import Section from "@/components/util/Section";
import Link from "next/link";

const Signin = () => {
  return (
    <Section className="">
      <Container className="mt-32 flex w-full justify-center gap-10">
        <div
          className="shadow-md border-[1px] dark:border-gray-600 rounded p-5 flex flex-col gap-3 items-center"
        >
          <input 
            type="email" 
            className="bg-background border-[1px] dark:border-gray-600 rounded outline-none p-2" 
            placeholder="Email address or Phone Number"
          />
          <input 
            type="password" 
            className="bg-background border-[1px] dark:border-gray-600 rounded outline-none p-2" 
            placeholder="Password"
          />
          <button 
            type="submit"
            className="bg-custom-clp rounded p-2 text-white font-[500] hover:bg-custom-clp/90 w-full"
          >
            Sign in
          </button>
          <span className="text-sm text-custom-clp cursor-pointer hover:underline">Forgotten Password?</span>
          <div className="border-b-[1px] w-full"></div>
          <Link
            href="/auth/signup"
            className="bg-green-600 hover:bg-green-600/90 rounded p-2 text-white font-[500] w-full text-center mt-3"
          >
            Create new account
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Signin;
