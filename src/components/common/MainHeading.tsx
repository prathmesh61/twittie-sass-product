import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainHeading = ({ children }: Props) => {
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl md:text-4xl text-white">
        {children}
      </h1>
    </div>
  );
};

export default MainHeading;
