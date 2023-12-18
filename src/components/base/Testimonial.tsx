import React from "react";
import MainHeading from "../common/MainHeading";
import Card from "../common/Card";
import client from "../../../public/client.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 px-8 py-20">
      <MainHeading>✨What 1534+ Tweet Hunter users are saying</MainHeading>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
        <Card Width="w-[296px]" Height="h-[142px]">
          <div className="w-full flex  items-start gap-3">
            <Image
              src={client}
              width={50}
              height={50}
              alt="client"
              className="object-contain"
            />
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl">Lan garry</h3>
              <span className="font-bold text-xs">@lan_garry</span>
            </div>
          </div>
          <p className="font-light italic text-xs">
            I've been using this SaaS to write tweets for myself and my clients
            for a couple weeks
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Testimonial;
