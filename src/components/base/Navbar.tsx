import Link from "next/link";
import React from "react";
import Button from "../common/Button";
import logo from "../../../public/icon.png";
import Image from "next/image";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="text-inherit px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <Image
          src={logo}
          alt="logo"
          width={20}
          height={20}
          className="object-contain"
        />
        <span>Twittie</span>
      </div>
      <div className="flex items-center gap-x-16">
        <Link href={"/Features"}>Features</Link>
        <Link href={"/Pricing"}>Pricing</Link>
        <Link href={"/Faq"}>Faq</Link>
      </div>
      <Button link={"/"}>Try for Free!</Button>
    </div>
  );
};

export default Navbar;
