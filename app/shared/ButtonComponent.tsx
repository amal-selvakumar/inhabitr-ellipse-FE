"use client";
import React, { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLHeadingElement> {
    styleComp?: string;
    desc?: ReactNode;
    isDisable?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
    styleComp = "",
    desc = '',
    isDisable = false
}) => {
    return (
        <div className={`px-16 py-3 my-auto text-base font-medium whitespace-nowrap rounded-3xl cursor-pointer ${isDisable ? 'bg-neutral-100 text-neutral-400 ' : 'bg-amber-300'} uppercase max-md:px-5 ${styleComp}`}>
            {desc}
        </div>
    )
}

export default ButtonComponent;