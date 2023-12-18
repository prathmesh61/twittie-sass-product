import React from "react";

type Props = {
  Width: string;
  Height: string;
  children: React.ReactNode;
};

const Card = ({ Width, Height, children }: Props) => {
  return (
    <div
      className={`${Width} ${Height} bg-[#25282C] text-white flex flex-col items-start p-4 gap-y-3  border-2 border-white/90 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default Card;
