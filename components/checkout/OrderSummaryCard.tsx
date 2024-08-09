

"use client";
import React, { useState } from "react";
import { OrderSummaryProps } from '@/types/checkout'
import { OrderSummary } from "@/constants/checkout";
import { formatCurrency } from "@/utils/common";



const OrderSummaryCard: React.FC<OrderSummaryProps> = ({ data }) => {
    const { title, subTotal, installation, shipping, taxes, total } = OrderSummary;
    return (
        <div
            className={`flex flex-col text-white gap-5 p-10`}
        >
            <div className="  text-2xl font-semibold">{title}</div>
            <div>
                <div className="flex text-lg flex-row justify-between pt-4 font-medium">
                    <div>{subTotal}</div>
                    <div>{formatCurrency(data?.subtotal)}</div>
                </div>
            </div>
            <div className="border-t text-lg gap-3 border-white font-medium py-2">
                <div className="flex flex-row justify-between">
                    <div>{installation}</div>
                    <div>{formatCurrency(data?.installation)}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>{shipping}</div>
                    <div>{formatCurrency(data?.shipping)}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>{taxes}</div>
                    <div>{formatCurrency(data?.taxes)}</div>
                </div>
            </div>
            <div className="border-t text-white text-2xl border-white font-semibold py-2">
                <div className="flex flex-row justify-between">
                    <div>{total}</div>
                    <div>{formatCurrency(data?.total)}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryCard;
