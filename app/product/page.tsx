'use client'
import React, { useEffect } from 'react'
import CustomizeComponent from "@/components/customise/Customise";
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { useGetProductsQuery  } from '@/redux/Slices/products/products';



const Products = () => {
  const { data: products, error, isLoading,isSuccess } = useGetProductsQuery(null);

  useEffect(() => {
  if(products){
    console.log(products,"products")
  } else{
    console.log(error,"error")
  }
  }, [products])
  

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
    <Header/>
    <CustomizeComponent data={products}/>
    <Footer/>
    </div>
  )
}

export default Products