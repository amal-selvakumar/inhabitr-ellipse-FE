import Stepper from "@/app/shared/Stepper";
import React, { useState } from "react";
import { CustomizeTitle } from '@/constants/customise';
import ButtonComponent from "@/app/shared/ButtonComponent";
import DarkCard from "@/app/shared/DarkCard";
import Image from "next/image";
import FloorPlan from '@/public/assets/vectors/floorPlan.svg'
import EstimateCard from "./EstimateCard";
import FurnitureCard from "@/app/shared/FurnitureCard";


export default function CustomizeComponent({data}:any) {
  const { title, subTitle, buttonText } = CustomizeTitle
  

  console.log(data,"data")


  const [selectedItem, setSelectedItem] = useState< any>(null);

  return (
    <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center">

      <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
          <Stepper activeTab={2} />
          <div className="mt-12 text-5xl font-semibold uppercase text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="flex justify-between items-center w-full pl-2 pt-6">
            <div className="text-xl font-medium text-black w-[50%] max-md:text-xl">
              {subTitle}
            </div>
            <ButtonComponent
              desc={buttonText}
              isDisable={!selectedItem}
              styleComp="bg-customYellow"

            />
          </div>
          <div className="grid grid-cols-5 gap-5 pt-20 ">
            <div className="col-span-2">
            <div className="grid grid-rows-2 items-start gap-6 ">
              <div >
                <Image src={FloorPlan} alt="floor plan"  />
              </div>
              <div >
                <DarkCard>
                  <EstimateCard itemPrice='79,475.00' />
                </DarkCard>
              </div>
              </div>

            </div>
            <div className="col-span-3">
            <div className="grid gap-4 ">
              {data?.map((item:any, index:any) => (
                <FurnitureCard
                  key={index}
                  data={item}
                />
              ))}
            </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}