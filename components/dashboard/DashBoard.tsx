'use client'
import Stepper from "@/app/shared/Stepper";
import React, { useState } from "react";
import { dashBoardTitle } from '@/constants/dashboard';
import { dashBoardData } from "@/data/dashboardText";
import ButtonComponent from "@/app/shared/ButtonComponent";
import Card from "@/app/shared/Card";
import { DataProps } from '@/types/dashboard'


export default function DashBoard() {

  const { title, subTitle, buttonText } = dashBoardTitle

  const [selectedItem, setSelectedItem] = useState<DataProps | null>(null);

  const handleCardClick = (data: DataProps) => {
    setSelectedItem(data);
  };

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (selectedItem) {
      window.location.href = '/products'
     
    }
  };

  return (
    <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center">

      <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
          <Stepper activeTab={1} />
          <div className="mt-12 text-6xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-6xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
              {subTitle}
            </div>
            <ButtonComponent
              desc={buttonText}
              isDisable={!selectedItem}
              onClick={handleButtonClick}
              styleComp="bg-amber-300"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
            {dashBoardData.map((item, index) => (
              <Card
                key={index}
                data={item}
                isSelected={selectedItem?.city === item.city && selectedItem?.university === item.university}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
