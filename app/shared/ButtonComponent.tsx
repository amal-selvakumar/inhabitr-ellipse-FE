import React from "react";
import { ButtonProps } from '@/types/dashboard';

const ButtonComponent: React.FC<ButtonProps> = ({
    styleComp = "",
    desc = '',
    isDisable = false,
    onClick,
}) => {
    return (
        <button
            className={`px-16 py-3 my-auto text-base font-medium whitespace-nowrap rounded-3xl ${isDisable ? 'bg-neutral-100 text-neutral-400 ' : 'bg-amber-300'} uppercase max-md:px-5 ${styleComp}`}
            onClick={onClick}
            disabled={isDisable}
        >
            {desc}
        </button>
    );
};

export default ButtonComponent;
