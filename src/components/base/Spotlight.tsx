import React from "react";
import SubHeading from "../common/SubHeading";
import MainHeading from "../common/MainHeading";
import Card from "../common/Card";
import Image from "next/image";
import play from "../../../public/play.png";
type Props = {};

const Spotlight = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center px-8 py-20 gap-y-5">
      <SubHeading>✨ Less effort. More results.</SubHeading>
      <MainHeading>
        Boost your tweets’ reach and results
        <br /> with automation
      </MainHeading>
      <div className="w-full flex items-center justify-center flex-wrap gap-4">
        <Card Width="w-[322px]" Height="h-[280px]">
          <Image
            src={play}
            width={20}
            height={20}
            alt="icon"
            className="object-contain "
          />
          <h3 className="font-bold text-xl">3M+ Viral Tweets Library</h3>
          <p className="font-light text-base w-full">
            Just type in a keyword or @handle and find high-performing tweets
            that generate engagement and followers.
          </p>
          <p className="font-light text-base w-full">
            Figure out what types of tweets and threads perform best and apply
            what you learn to your own content.
          </p>
        </Card>
        <Card Width="w-[322px]" Height="h-[280px]">
          <Image
            src={play}
            width={20}
            height={20}
            alt="icon"
            className="object-contain "
          />
          <h3 className="font-bold text-xl">AI-powered Writing</h3>
          <p className="font-light text-base w-full">
            Just type in a keyword or @handle and find high-performing tweets
            that generate engagement and followers.
          </p>
          <p className="font-light text-base w-full">
            Figure out what types of tweets and threads perform best and apply
            what you learn to your own content.
          </p>
        </Card>
        <Card Width="w-[322px]" Height="h-[280px]">
          <Image
            src={play}
            width={20}
            height={20}
            alt="icon"
            className="object-contain "
          />
          <h3 className="font-bold text-xl">4K+ staff-picked tweets</h3>
          <p className="font-light text-base w-full">
            Just type in a keyword or @handle and find high-performing tweets
            that generate engagement and followers.
          </p>
          <p className="font-light text-base w-full">
            Figure out what types of tweets and threads perform best and apply
            what you learn to your own content.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Spotlight;
