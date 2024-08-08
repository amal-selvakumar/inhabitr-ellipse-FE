import Stepper from "@/app/shared/Stepper";
import React, { useState } from "react";
import DarkCard from "@/app/shared/DarkCard";
import Image from "next/image";
import FloorPlan from '@/public/assets/vectors/floorPlanSvg.svg'
import FurnitureCard from "@/app/shared/FurnitureCard";
import OrderSummaryCard from "./OrderSummaryCard";
import { furnitureList, CheckoutTitle } from "@/constants/checkout";
import ContractCard from "./ContractCard";
import ShippingComponent from "./Shipping";

export default function CheckOut({ data }: any) {
  const { title } = CheckoutTitle;
  const { footerTitle, count } = furnitureList;

  const [state, setState] = useState({
    subtotal: 79475,
    installation: 1567.99,
    shipping: 9888.00,
    taxes: 9999.00,
    total: 8888.00
  });

  return (
    <div className="flex ml-5 max-md:flex-col  w-full justify-center">
      <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
          <Stepper activeTab={3} />
          <div className="mt-12 text-5xl font-semibold uppercase text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="grid grid-cols-5 gap-5 pt-20">
            <div className="col-span-2">
              <div>
                <Image src={FloorPlan} alt="floor plan" />
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid gap-5">
                <DarkCard>
                  <OrderSummaryCard data={state} />
                </DarkCard>
                <DarkCard>
                  <ShippingComponent />
                </DarkCard>
                <DarkCard>
                  <ContractCard price={state.total} />
                </DarkCard>
              </div>
            </div>
          </div>
          <div className="flex w-full items-end flex-col mt-5">
            <div className="flex flex-row justify-between w-[70%] mb-10 text-lg">
              <div className="font-semibold ">{footerTitle}</div>
              <div className=" text-customGray">{data?.length} {count}</div>
            </div>
            <div className="grid gap-4 w-[70%]">
              {data ? data?.map((item: any, index: any) => (
                <FurnitureCard
                  key={index}
                  data={item}
                />
              )) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
