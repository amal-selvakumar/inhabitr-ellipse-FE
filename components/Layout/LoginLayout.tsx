"use client";

import React from "react";
import Header from "@/app/shared/Header";
import Footer from "@/app/shared/Footer";
import DashBoard from "../dashboard/DashBoard";

const LoginLayout = () => {
    return (
      <div className="flex overflow-hidden flex-col bg-zinc-100">
        
           <Header/>
           <DashBoard/>
           <Footer/>
           
        </div>
      );
};

export default LoginLayout;