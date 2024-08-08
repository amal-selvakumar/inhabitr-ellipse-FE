'use client'
import React, { useEffect, useState } from 'react'
import CustomizeComponent from "@/components/customise/Customise";
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { useGetProductsQuery  } from '@/redux/Slices/products/products';



const Products = () => {
  const { data: products, error, isLoading,isSuccess } = useGetProductsQuery(null);

  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
  if(products){
    setProductList(products)
  } else{
    console.log(error,"error")
  }
  }, [products])
  

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
    <Header/>
    <CustomizeComponent data={productList}/>
    <Footer/>
    </div>
  )
}

export default Products