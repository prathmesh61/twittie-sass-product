import { IChildren } from "@/utils/type";
import React from "react";

const Paragraph = ({ children }: IChildren) => {
  return (
    <p className="text-center font-normal text-sm md:text-base text-white ">
      {children}
    </p>
  );
};

export default Paragraph;
