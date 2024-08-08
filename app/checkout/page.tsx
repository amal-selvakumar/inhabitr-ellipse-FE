'use client'
import React, { useEffect, useState } from 'react'
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { useGetProductsQuery  } from '@/redux/Slices/products/products';
import CheckOut from '@/components/checkout/Checkout'



const CheckOutPage = () => {
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
    <CheckOut data={productList}/>
    <Footer/>
    </div>
  )
}

export default CheckOutPage