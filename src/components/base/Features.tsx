import React from "react";
import AboutTool from "../common/AboutTool";
import SubHeading from "../common/SubHeading";
import MainHeading from "../common/MainHeading";
import featureOne from "../../../public/feature-one.png";
import featureTwo from "../../../public/feature-two.png";
import Image from "next/image";
import Spotlight from "./Spotlight";
interface Props {
  direction?: "row" | "row-reverse";
}

const Features = () => {
  return (
    <section className="px-8 py-20 flex flex-col gap-y-20 items-center justify-center w-full h-full ">
      {/* Feature box one */}
      <AboutTool>
        <SubHeading>⭐AI for automated content</SubHeading>
        <MainHeading>How we help you grow on Twitter</MainHeading>
        <div className="flex justify-between  items-center flex-wrap gap-4 mt-5 ">
          <div className="flex flex-col  gap-y-3">
            <h3 className="font-medium text-xl">
              Write 100 high quality tweets in less than 1 hour
            </h3>
            <p className="font-light text-sm">
              Give your brain endless inspiration: our advanced
              <br /> AI for automated content generation.
            </p>
          </div>
          <div className="relative max-w-[440px] min-w-[300px] h-full">
            <Image src={featureOne} alt="Feature" className="object-contain" />
          </div>
        </div>
      </AboutTool>
      {/* Feature box Two */}
      <Spotlight />
      {/* Feature box Three */}
      <AboutTool>
        <SubHeading>🌟Get more sales, clients</SubHeading>
        <MainHeading>
          Boost your tweets’ reach and results with automation
        </MainHeading>
        <div className="flex justify-between items-center flex-wrap  lg:flex-row-reverse gap-4 mt-5  ">
          <div className="flex flex-col  gap-y-3">
            <h3 className="font-medium text-xl">
              Turn Twitter into a sales machine with our CRM
            </h3>
            <p className="font-light text-sm">
              Identify high-quality leads, get all their data, and start
              <br />
              building relationships that lead to more opportunities and
              business results.
            </p>
          </div>
          <div className="relative max-w-[440px] min-w-[300px] h-full">
            <Image src={featureTwo} alt="Feature" className="object-contain" />
          </div>
        </div>
      </AboutTool>
    </section>
  );
};

export default Features;
