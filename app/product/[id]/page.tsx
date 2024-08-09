'use client'
import React, { useEffect, useState } from 'react'
import CustomizeComponent from "@/components/customise/Customise";
import Header from '@/app/shared/Header';
import Footer from '@/app/shared/Footer';

const Products = () => {


  

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
    <Header/>
    <CustomizeComponent/>
    <Footer/>
    </div>
  )
}

export default Products