import React from "react";
import SubHeading from "./SubHeading";
import { IChildren } from "@/utils/type";

const AboutTool = ({ children }: IChildren) => {
  return (
    <article className="flex flex-col items-center justify-center gap-y-4 gradient2 p-4 ">
      {children}
    </article>
  );
};

export default AboutTool;
