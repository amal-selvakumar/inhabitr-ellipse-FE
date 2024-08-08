"use client";
import React from "react";
import { BorderButtonProps } from '@/types/dashboard'

  
  const BorderButton: React.FC<BorderButtonProps> = ({
    classProps = "text-amber-300  border-amber-300",
    desc = ''
  }) => {
    return (
        <div className={`grid justify-center items-center border p-4 text-base cursor-pointer uppercase rounded-full px-16 py-3 my-auto ${classProps}`}>
           {desc}
        </div>
    )
}

export default BorderButton;