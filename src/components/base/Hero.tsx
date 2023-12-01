import React from "react";
import Image from "next/image";

import SubHeading from "../common/SubHeading";
import MainHeading from "../common/MainHeading";
import hero from "../../../public/main.png";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

const Hero = () => {
  return (
    <div className="gradient">
      <div className="flex flex-col items-center justify-center px-8 gap-y-8 py-20 ">
        <SubHeading>✨ Less effort. More results.</SubHeading>
        <MainHeading>
          Turn Twitter into a sales machine
          <br /> with our CRM
        </MainHeading>
        <div className="relative max-w-[800px] min-w-[340px] h-full">
          <Image src={hero} alt="HeroImg" className="object-contain" />
        </div>
        <Paragraph>
          Get sales, growth and new networks. Faster than what
          <br /> you're currently trying.
        </Paragraph>
        <div className="flex items-center gap-x-4 justify-center">
          <Button link={"/"}>Try For Free!</Button>
          <Button link={"/"} primary={false}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
