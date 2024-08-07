"use client";
import React from "react";
import { BorderButtonProps } from '@/types/dashboard'

  
  const BorderButton: React.FC<BorderButtonProps> = ({
    className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
    desc = ''
  }) => {
    return (
        <div className="grid justify-center items-center border p-4 text-base cursor-pointer text-amber-300 uppercase rounded-full border-amber-300 ">
           {desc}
        </div>
    )
}

export default BorderButton;