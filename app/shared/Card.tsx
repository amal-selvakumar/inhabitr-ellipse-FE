"use client";
import React from "react";
import { CardProps } from '@/types/dashboard'


const Card: React.FC<CardProps> = ({ data, isSelected, onClick }) => {
    const handleClick = () => {
        onClick(data);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col flex-1 items-start py-6 pr-20 pl-6 rounded-lg cursor-pointer bg-neutral-100 ${isSelected ? "border-amber-300 border-2" : "border-0"
                } max-md:px-5`}
        >
            <div className="text-black">{data.city}</div>
            <div className="mt-1.5 text-neutral-500">{data.university}</div>
        </div>
    );
};

export default Card;
