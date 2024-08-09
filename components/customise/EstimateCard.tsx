"use client";
import React, { useState } from "react";
import { CustomizeCard } from "@/constants/customise";
import ButtonComponent from "@/app/shared/ButtonComponent";
import { formatCurrency } from "@/utils/common";
import Link from "next/link";
import { useSelector } from "react-redux";


const EstimateCard: React.FC = () => {

    const { title, priceTail, buttomText, subTitle, coluredSubTitle } = CustomizeCard;
    const cartTotal = useSelector((state: any) => state?.furniture?.total);

    return (
        <div
            className={`flex flex-col gap-7 pt-4`}
        >
            <div className="flex gap-3 flex-col">
                <div className="text-white text-2xl font-bold">{formatCurrency(cartTotal)} {priceTail}</div>
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
