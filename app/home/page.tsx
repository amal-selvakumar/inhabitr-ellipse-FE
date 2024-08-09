"use client";

import React from "react";
import Header from "@/app/shared/Header";
import Footer from "@/app/shared/Footer";
import DashBoard from "@/components/dashboard/DashBoard";

const Home = () => {
    return (
      <div className="flex overflow-hidden min-h-screen flex-col bg-zinc-100">
        
           <Header/>
           <div className="flex-grow">
           <DashBoard/>
           </div>
          
           <Footer/>
           
        </div>
      );
};

export default Home;