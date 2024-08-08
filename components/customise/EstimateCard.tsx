"use client";
import React, { useState } from "react";
import { EstimateCardProps } from '@/types/product'
import { CustomizeCard } from "@/constants/customise";
import ButtonComponent from "@/app/shared/ButtonComponent";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";


const EstimateCard: React.FC<EstimateCardProps> = ({ itemPrice }) => {

    const { title, priceTail, buttomText, subTitle, coluredSubTitle } = CustomizeCard;

    return (
        <div
            className={`flex flex-col gap-7 pt-4`}
        >
            <div className="flex gap-3 flex-col">
            <div className="text-white text-2xl font-bold">{formatCurrency(itemPrice)} {priceTail}</div>
            <div className=" text-customGray text-l font-semibold">{title}</div>
            </div>
            
            <Link href="/checkout">
            <ButtonComponent desc={buttomText} styleComp="bg-customYellow" isDisable={false} />
            </Link>
            <p >
                <span className="text-customGray font-medium">{coluredSubTitle}</span>
                <span className="text-white font-medium"> {subTitle}</span>
            </p>
        </div>
    );
};

export default EstimateCard;
