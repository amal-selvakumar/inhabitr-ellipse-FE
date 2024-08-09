import Stepper from "@/app/shared/Stepper";
import React, { useEffect, useState } from "react";
import { CustomizeTitle } from '@/constants/customise';
import ButtonComponent from "@/app/shared/ButtonComponent";
import DarkCard from "@/app/shared/DarkCard";
import Image from "next/image";
import FloorPlan from '@/public/assets/vectors/floorPlanSvg.svg';
import EstimateCard from "./EstimateCard";
import FurnitureCard from "@/app/shared/FurnitureCard";
import { useGetProductsQuery } from '@/redux/Slices/products/products';
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTotal } from "@/redux/Reducers/furnitures";
import { checkItems } from "@/utils/common";
import Link from "next/link";

export default function CustomizeComponent() {
  const { title, subTitle, buttonText } = CustomizeTitle;
  const params = useParams();
  const dispatch = useDispatch();

  const { data: products, error, isLoading, isSuccess } = useGetProductsQuery(params.id);

  const [selectedQuantities, setSelectedQuantities] = useState<any>({});

  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setProductList(products?.furnitures);
    } else if (error) {
      console.log(error, "error");
    }
  }, [products]);

  useEffect(() => {
    const total = productList?.reduce((acc, item) => {
      const { id, price } = item;
      const quantity = selectedQuantities[id]?.quantity || 0;
      return acc + (price * quantity);
    }, 0) || 0;
    dispatch(setTotal(total))
  }, [selectedQuantities, productList]);

  const handleQuantityChange = (id: string, price: number, quantity: number) => {
    setSelectedQuantities((prev: any) => ({
      ...prev,
      [id]: { price, quantity }
    }));
  };

  return (
    <div className="flex gap-5 max-md:flex-col w-full justify-center">
      <div className="flex flex-col max-md:ml-0 max-md:w-full w-full py-14 px-20">
        <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-md:px-5">
          <Stepper activeTab={2} />
          <div className="mt-12 text-5xl font-semibold uppercase text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="flex justify-between items-center w-full pl-2 pt-6">
            <div className="text-xl font-medium text-black w-[50%] max-md:text-xl">
              {subTitle}
            </div>
            {checkItems(selectedQuantities) ?
              <ButtonComponent
                desc={buttonText}
                isDisable={checkItems(selectedQuantities)}
                styleComp="bg-customYellow"
              /> :
              <Link href={'/checkout'}>
                <ButtonComponent
                  desc={buttonText}
                  isDisable={checkItems(selectedQuantities)}
                  styleComp="bg-customYellow"
                />
              </Link>}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pt-20">
            <div className="col-span-2">
              <div className="grid grid-rows-2 items-start gap-6">
                <div>
                  <Image src={FloorPlan} alt="floor plan" />
                </div>
                <div>
                  <DarkCard styleComp="p-8 2xl:w-[95%]">
                    <EstimateCard />
                  </DarkCard>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid gap-4">
                {productList ? productList.map((item: any, index: any) => (
                  <FurnitureCard
                    key={index}
                    data={item}
                    onQuantityChange={handleQuantityChange}
                  />
                )) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
