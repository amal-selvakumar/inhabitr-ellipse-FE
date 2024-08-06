'use client'
import { footerData } from "@/constants/dashboard";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex mt-8 w-full bg-amber-300 min-h-[73px] max-md:max-w-full items-center justify-center">
      <p className="text-slate-500 ">{footerData.desc}</p>
    </div>
  );
};

export default Footer;
