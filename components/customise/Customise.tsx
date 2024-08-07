import Stepper from "@/app/shared/Stepper";
import React, { useState } from "react";
import { CustomizeTitle } from '@/constants/customise';
import { dashBoardData } from "@/data/dashboardText";
import ButtonComponent from "@/app/shared/ButtonComponent";
import DarkCard from "@/app/shared/DarkCard";
import { DataProps } from '@/types/dashboard'
import Image from "next/image";
import FloorPlan from '@/assets/vectors/floorPlan.svg'
import Card from "@/app/shared/Card";

export default function CustomizeComponent() {
  const { title, subTitle, buttonText } = CustomizeTitle


  const [selectedItem, setSelectedItem] = useState<DataProps | null>(null);

  const handleCardClick = (data: DataProps) => {
    setSelectedItem(data);
  };

  return (
    <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center">

      <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
          <Stepper activeTab={1} />
          <div className="mt-12 text-6xl font-semibold uppercase text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="flex justify-between items-center w-full pl-2 pt-6">
            <div className="text-xl font-medium text-black w-[50%] max-md:text-xl">
              {subTitle}
            </div>
            <ButtonComponent
              desc={buttonText}
              isDisable={!selectedItem}

            />
          </div>
          <div className="grid grid-cols-2 gap-10 pt-20">
          <div className="grid grid-rows-2 items-start">
            <div>
            <Image src={FloorPlan} alt="floor plan" />
            </div>
            <div>
            <DarkCard />
            </div>
           
           
          </div>
          <div className="grid gap-4">
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
    </div>
  );
}
