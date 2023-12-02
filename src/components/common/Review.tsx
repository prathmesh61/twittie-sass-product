import Image from "next/image";
import React from "react";
import client from "../../../public/client.png";
import client2 from "../../../public/client2.png";
import { IDirection } from "@/utils/type";

const Review = ({ direction }: IDirection) => {
  return (
    <section
      className={`${
        (direction === "row" &&
          "flex flex-row gap-x-6 items-center justify-center w-full ") ||
        (direction === "column" &&
          "flex flex-col items-center justify-center gap-y-4 w-full")
      }`}
    >
      <div className="font-light italic text-sm text-center">
        Join over 5644+ Twitter
        <br /> pros including
      </div>
      <div className="flex relative w-fit h-full gap-x-3 ">
        <Image
          src={client}
          alt="clientImg"
          className="object-contain"
          width={50}
          height={50}
        />
        <Image
          src={client2}
          alt="clientImg"
          className="object-contain"
          width={50}
          height={50}
        />
        <Image
          src={client}
          alt="clientImg"
          className="object-contain"
          width={50}
          height={50}
        />
        <Image
          src={client2}
          alt="clientImg"
          className="object-contain"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default Review;
