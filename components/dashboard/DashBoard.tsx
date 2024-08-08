'use client'
import Stepper from "@/app/shared/Stepper";
import React, { useEffect, useState } from "react";
import { dashBoardTitle } from '@/constants/dashboard';
import ButtonComponent from "@/app/shared/ButtonComponent";
import Card from "@/app/shared/Card";
import { DataProps } from '@/types/dashboard'
import Link from "next/link";
import { useGetPropertiesQuery } from "@/redux/Slices/property/property";
import { useDispatch } from 'react-redux';
import { setData } from '@/redux/Reducers/property';

export default function DashBoard() {

  const { title, subTitle, buttonText } = dashBoardTitle
  const { data: properties, error, isLoading,isSuccess } = useGetPropertiesQuery(null);

  const [selectedItem, setSelectedItem] = useState<DataProps | null>(null);
  const [propertyList, setPropertyList] = useState<any>([]);

  const dispatch = useDispatch();
  
  useEffect(() => {
  if(isSuccess){
    setPropertyList(properties)
  } else if(error){
    console.log(error,"error")
  }
  }, [properties])  

  const handleCardClick = (data: DataProps) => {
    setSelectedItem(data);
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

            {selectedItem ? (
              <Link href={`/product/${selectedItem?.id}`}>
                <ButtonComponent
                  desc={buttonText}
                  isDisable={!selectedItem}
                  onClick={()=>{dispatch(setData(selectedItem))}}
                  styleComp="bg-amber-300"
                />
              </Link>
            ) : (
              <ButtonComponent
                desc={buttonText}
                isDisable={!selectedItem}
                onClick={()=>{}}
                styleComp="bg-amber-300"
              />
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
            {propertyList?.map((item:any, index:any) => (
              <Card
                key={index}
                data={item}
                isSelected={selectedItem?.name === item.name && selectedItem?.location === item.location}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
