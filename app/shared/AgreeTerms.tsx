"use client";
import React from "react";
import {AgreeTermsProps} from '@/types/checkout'


const AgreeTerms: React.FC<AgreeTermsProps> = ({
  text = '',
  checked,
  onChange
}) => {
  return (
    <div className="flex flex-row items-between">
      <input type="checkbox" checked={checked} onChange={onChange} className="mr-2 accent-[#FFD203]" />
      <span className="text-customGray">{text}</span>
    </div>
  );
}

export default AgreeTerms;
