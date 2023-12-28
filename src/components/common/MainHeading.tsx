import { IChildren } from "@/utils/type";
import React from "react";

const MainHeading = ({ children }: IChildren) => {
  return (
    <div className="text-center">
      <span className="font-extrabold text-2xl md:text-4xl text-white">
        {children}
      </span>
    </div>
  );
};

export default MainHeading;
