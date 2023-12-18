import Link from "next/link";
import React from "react";

type Props = {
  primary?: Boolean;
  link: String;
  children: React.ReactNode;
};

const Button = ({ link, primary = true, children }: Props) => {
  return (
    <Link
      href={`${link}`}
      className={`${
        primary ? "bg-brand text-white" : "bg-white text-black"
      } w-fit h-fit px-6  font-light `}
    >
      {children}
    </Link>
  );
};

export default Button;
