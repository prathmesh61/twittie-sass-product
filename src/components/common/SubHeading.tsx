import { IChildren } from "@/utils/type";
import React from "react";

const SubHeading = ({ children }: IChildren) => {
  return (
    <div className="w-fit  text-center px-4 py-1 border-2 rounded-xl border-white bg-transparent">
      <h2 className="font-medium md:text-base text-sm text-white">
        {children}
      </h2>
    </div>
  );
};

export default SubHeading;
