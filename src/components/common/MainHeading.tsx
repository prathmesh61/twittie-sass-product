import { IChildren } from "@/utils/type";
import React from "react";

const MainHeading = ({ children }: IChildren) => {
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl md:text-4xl text-white">
        {children}
      </h1>
    </div>
  );
};

export default MainHeading;
