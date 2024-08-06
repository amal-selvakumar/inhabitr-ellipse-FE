"use client";
import { stepperItems } from "@/constants/dashboard";
import React from "react";
import { StepperProps } from '@/types/dashboard'

const Stepper: React.FC<StepperProps> = ({
    activeTab = 1
}) => {
    return (
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-16 sm:space-y-0 rtl:space-x-reverse">
            {stepperItems.map((item, index) => (
                <li key={item.id} className={`flex items-center ${activeTab === item.id ? 'text-black dark:text-black' : 'text-gray-500 dark:text-gray-400'} space-x-4 rtl:space-x-reverse`}>
                    <span className={`flex items-center justify-center w-8 h-8 border ${activeTab === item.id ? 'dark:border-black border-black' : 'dark:border-gray-400 border-gray-500 '}  rounded-full shrink-0 `}>
                        {item.id}
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">{item.title}</h3>
                    </span>
                </li>
            ))}

        </ol>
    );
};

export default Stepper;
