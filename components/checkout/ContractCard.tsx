

"use client";
import React, { useState } from "react";
import { Contract } from "@/constants/checkout";
import ButtonComponent from "@/app/shared/ButtonComponent";
import BorderButton from "@/app/shared/BorderButton";
import AgreeTerms from "@/app/shared/AgreeTerms";
import { formatCurrency } from '@/utils/formatCurrency';



const ContractCard: React.FC<any> = ({ price }) => {
    const { title, viewButton, agreementButton, terms } = Contract;

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div
            className={`flex flex-col  gap-6 p-10`}
        >
            <div className=" text-white text-2xl font-semibold">{title}</div>
            <div className="flex flex-row justify-between">
                <div className=" text-white text-2xl font-semibold">{formatCurrency(price)}</div>
                <BorderButton classProps="text-customYellow  border-customYellow" desc={viewButton} />
            </div>
            <div className="flex items-end w-full justify-end">
                <ButtonComponent styleComp="text-black bg-customYellow" desc={agreementButton} />
            </div>
            <div className="flex items-end justify-end w-[80%]">
                <AgreeTerms
                    text={terms}
                    checked={isChecked}
                    onChange={handleCheckboxChange} />
            </div>

        </div>
    );
};

export default ContractCard;
