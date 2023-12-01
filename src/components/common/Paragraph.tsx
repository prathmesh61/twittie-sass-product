import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return (
    <p className="text-center font-normal text-sm md:text-base text-white ">
      {children}
    </p>
  );
};

export default Paragraph;
