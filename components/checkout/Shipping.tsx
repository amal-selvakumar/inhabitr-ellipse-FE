

"use client";
import React, { useState } from "react";
import { Shipping } from "@/constants/checkout";
import ButtonComponent from "@/app/shared/ButtonComponent";
import Calendar from 'react-calendar';
import LightCard from "@/app/shared/LightCard";
import RadioOption from "@/app/shared/RadioOption";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



const ShippingComponent: React.FC<any> = () => {

    const { title, subTitle, option1, desc1, option2, desc2, buttonText, datePickerTitle, datePickerFooter } = Shipping;
    const [value, onChange] = useState<Value>(new Date());

    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div
            className={`flex flex-col text-white gap-3 p-10`}
        >
            <div className="  text-2xl font-semibold">{title}</div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-customGray ">{subTitle}</div>
                    <div className="p-4">
                        <RadioOption
                            label={option1}
                            description={desc1}
                            isChecked={selectedOption === "white-glove"}
                            onChange={() => handleOptionChange("white-glove")}
                        />
                        <RadioOption
                            label={option2}
                            description={desc2}
                            isChecked={selectedOption === "curbside"}
                            onChange={() => handleOptionChange("curbside")}
                        />
                        <ButtonComponent desc={buttonText} styleComp="text-black bg-customYellow"/>
                    </div>
                </div>
                <div>
                    <LightCard>
                        <div>{datePickerTitle}</div>
                        <Calendar className={"flex gap-4 flex-col accent-[#FFD203]"} onChange={onChange} value={value} />
                    </LightCard>
                    <div className="text-customGray text-xs font-normal pt-3">{datePickerFooter}</div>
                </div>
            </div>

        </div>
    );
};

export default ShippingComponent;
