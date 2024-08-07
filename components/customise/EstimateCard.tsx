"use client";
import React, { useState } from "react";
import { EstimateCardProps } from '@/types/product'
import { CustomizeCard } from "@/constants/customise";
import ButtonComponent from "@/app/shared/ButtonComponent";



const EstimateCard: React.FC<EstimateCardProps> = ({ itemPrice }) => {

    // const [price, setPrice] = useState('79,475.00') //currency formatter util to be added.
    const { title, unit, priceTail, buttomText, subTitle, coluredSubTitle } = CustomizeCard;



    return (
        <div
            className={`flex flex-col items-center gap-3 justify-center pt-4`}
        >
            <div className="text-white text-2xl font-bold">{unit}{itemPrice} {priceTail}</div>
            <div className=" text-customGray text-l font-semibold">{title}</div>
            <ButtonComponent desc={buttomText} styleComp="bg-customYellow" isDisable={false} />
            <p className="w-[60%]">
                <span className="text-customGray font-medium">{coluredSubTitle}</span>
                <span className="text-white font-medium"> {subTitle}</span>
            </p>
        </div>
    );
};

export default EstimateCard;
