"use client";

import Container from "@/components/util/Container";
import Logo from "@/components/util/Logo";
import Section from "@/components/util/Section";
import Navlink from "@/components/Header/Navlink";
import Menu from "./Menu";

const Header = () => {
  return (
    <Section className="w-full fixed top-0 z-40 py-3 shadow dark:border-b-[0.1rem] dark:border-custom-pbod bg-background">
      <Container className="lg:relative flex flex-row items-center justify-between gap-3 lg:gap-0">
        <Logo />
        <div className="flex items-center gap-10">
          <Navlink />
          <Menu />
        </div>
      </Container>
    </Section>
  );
};

export default Header;
