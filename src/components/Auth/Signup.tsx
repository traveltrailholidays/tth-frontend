"use client";

import Container from "@/components/util/Container";
import Section from "@/components/util/Section";
import Link from "next/link";

const Signup = () => {
  return (
    <Section className="">
      <Container className="mt-32 flex w-full justify-center gap-10">
        <div
          className="shadow-md border-[1px] dark:border-gray-600 rounded p-5 flex flex-col gap-3
            items-center"
        >
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              className="lg:w-[200px] bg-background border-[1px] dark:border-gray-600 rounded
                outline-none p-2"
              placeholder="First name"
            />
            <input
              type="text"
              className="lg:w-[200px] bg-background border-[1px] dark:border-gray-600 rounded
                outline-none p-2"
              placeholder="Surname"
            />
          </div>
          <input
            type="text"
            className="w-full bg-background border-[1px] dark:border-gray-600 rounded
              outline-none p-2"
            placeholder="Email address or Phone Number"
          />
          <input
            type="password"
            className="w-full bg-background border-[1px] dark:border-gray-600 rounded
              outline-none p-2"
            placeholder="New password"
          />
          <button
            type="submit"
            className="bg-custom-clp rounded p-2 text-white font-[500] hover:bg-custom-clp/90 w-full"
          >
            Sign up
          </button>
          <Link
            href="/auth/signin"
            className="text-sm text-custom-clp cursor-pointer hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Signup;
