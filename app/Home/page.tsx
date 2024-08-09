"use client";

import React from "react";
import Header from "@/app/shared/Header";
import Footer from "@/app/shared/Footer";
import DashBoard from "@/components/dashboard/DashBoard";

const Home = () => {
    return (
      <div className="flex overflow-hidden min-h-screen flex-col bg-zinc-100">
        
           <div className="flex-grow">
           <Header/>
           <DashBoard/>
           </div>
          
           <Footer/>
           
        </div>
      );
};

export default Home;