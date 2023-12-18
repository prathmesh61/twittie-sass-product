import React from "react";
import Card from "../common/Card";
import Button from "../common/Button";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center px-8 py-20">
      <Card Width="w-full" Height="h-full">
        <h2 className="font-bold text-xl">
          Save time and get REAL results on social media.
        </h2>
        <p className="font-light text-sm">
          Get Twitter Growth & Monetization Book
        </p>
        <div className="flex items-center justify-center w-full">
          <input
            placeholder="Put Your Email..."
            className="bg-white px-2  rounded-s-md placeholder:text-black placeholder:text-xs"
          />
          <Button link={"/"}>subscribe</Button>
        </div>
      </Card>
    </div>
  );
};

export default CallToAction;
