import Stepper from "@/app/shared/Stepper";
import * as React from "react";
import { dashBoardTitle } from '@/constants/dashboard';
import { dashBoardData } from "@/data/dashboardText";
import ButtonComponent from "@/app/shared/ButtonComponent";



export default function DashBoard() {
  const { title, subTitle, buttonText } = dashBoardTitle
  return (
    <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center">

      <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
          <Stepper activeTab={1}/>
          <div className="mt-12 text-6xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-6xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
              {subTitle}
            </div>
            <ButtonComponent desc={buttonText} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
            {dashBoardData.map((item, index) => (
              <div key={index} className="flex flex-col flex-1 items-start py-6 pr-20 pl-6 rounded-lg bg-neutral-100 max-md:px-5">
                <div className="text-black">{item.city}</div>
                <div className="mt-1.5 text-neutral-500">
                  {item.university}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
