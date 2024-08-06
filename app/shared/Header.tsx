import { menuItems } from "@/constants/dashboard";
import React, { HTMLAttributes, ReactNode } from "react";
import headerIcon from '@/assets/vectors/InhabitrIcon.svg'
import Image from "next/image"
import BorderButton from "./BorderButton";


export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const Header: React.FC<HeadingProps> = ({
  children,
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",

}) => {
  return (
    <div className="grid grid-cols-2 gap-24 min-h-28 justify-center items-center text-base font-medium bg-white ">
      <div className="pl-10">
        <Image src={headerIcon} alt="logo" />
      </div>

      <div className=" grid grid-flow-col auto-cols-max gap-x-5 items-center justify-end pr-10">
        {menuItems.map((item, index) => (
          <div key={index} className="hidden md:block">
            {item}
          </div>
        ))}
        <BorderButton desc=" furnish now" />
      </div>
    </div>
  );
};

export default Header;