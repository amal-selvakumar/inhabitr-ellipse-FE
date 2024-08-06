"use client";
import React from "react";
import { EstimateCardProps } from '@/types/dashboard'


const DarkCard: React.FC<EstimateCardProps> = ({ data,price }) => {


    return (
        <div
            className="flex flex-col flex-1 items-start rounded-lg cursor-pointer bg-black "
        >
            {data && data.map((item, index) => (
             <div className="text-white">{item}</div>
            ))}
            {!data? 
            <div>
                this is the card

            </div> 
            :null}
          
        </div>
    );
};

export default DarkCard;
