"use client";
import React, { useEffect, useState } from "react";
import { furnitureCard } from "@/constants/customise";
import CartCounter from '@/components/customise/CardCounter';
import AccordonComponent from "./Accordon";
import Image from "next/image";
import buttonImage from '@/public/assets/vectors/upgrade.svg';
import defaultImage from '@/public/assets/vectors/Powered by inhabitr logo.svg';
import { formatCurrency } from "@/utils/common";
import { useSelector } from "react-redux";


const FurnitureCard: React.FC<any> = (props) => {
    const { name, id, depth, description, height, width, price } = props?.data;
    const [itemQty, setItemQty] = useState(0);

    const [imageSrc, setImageSrc] = useState(`/assets/vectors/${id}.svg`);

    const handleError = () => {
        setImageSrc(defaultImage);
    };

    useEffect(() => {
        props.onQuantityChange(id, price, itemQty);
    }, [itemQty]);

    const { dimension, qty, details, widthUnit, heightUnit, depthUnit, cross } = furnitureCard;

    return (
        <div className="flex flex-row items-start py-6 pr-20 pl-6 rounded-lg cursor-pointer bg-neutral-100 max-md:px-5">
            <div className={`flex flex-col flex-1 items-start `}>
                <div className="text-black text-2xl font-bold">{name}</div>
                <span className="mt-1.5 text-customGray font-bold text-sm pb-4">
                    {dimension}{width}{widthUnit}{cross}{height}{heightUnit}{cross}{depth}{depthUnit}{cross}
                </span>
                <div className="text-black text-lg font-bold pb-2">{formatCurrency(price)}</div>
                <CartCounter setItemQty={setItemQty} />
                <AccordonComponent title={details} details={description} />
                <Image src={buttonImage} alt="button" />
            </div>
            <div>
                <Image
                    src={imageSrc}
                    alt={`Image for ID ${id}`}
                    width={217}
                    height={197}
                    onError={handleError}
                />
            </div>
        </div>
    );
};

export default FurnitureCard;
