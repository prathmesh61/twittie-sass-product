import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubHeading = ({ children }: Props) => {
  return (
    <div className="text-center px-4 py-1 border-2 rounded-xl border-white bg-transparent">
      <h2 className="font-medium md:text-base text-sm text-white">
        {children}
      </h2>
    </div>
  );
};

export default SubHeading;
