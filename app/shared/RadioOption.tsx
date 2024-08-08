"use client";
import React from "react";

import {RadioOptionProps} from '@/types/checkout'

const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  description,
  isChecked,
  onChange
}) => {
  return (
    <div className="flex items-start mb-4">
      <input
        type="radio"
        checked={isChecked}
        onChange={onChange}
        className="mr-2 mt-1 form-radio accent-[#FFD203]"
      />
      <div>
        <div className="text-white font-medium text-base">{label}</div>
        <div className="text-customGray text-xs">{description}</div>
      </div>
    </div>
  );
};

export default RadioOption;
