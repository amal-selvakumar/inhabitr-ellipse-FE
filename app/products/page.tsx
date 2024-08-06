'use client'
import React from 'react'
import CustomizeComponent from "@/components/customise/Customise";
import Header from '../shared/Header';
import Footer from '../shared/Footer';


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