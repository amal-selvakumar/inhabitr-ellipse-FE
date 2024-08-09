'use client'
import React from 'react'
import Lottie from "lottie-react";
import GifFile from '@/constants/success.json'
import Link from 'next/link';

const GifComponent = () => {
    return (
        <div className='flex flex-col items-center justify-center' >
           <div className='w-[60%] h-[60%]'>
           <Lottie
        loop={true}
        autoplay={true}
        animationData={GifFile}
        height={50}
        width={50}
      />         
            </div> 
            <p className='text-base mt-4 font-medium leading-5 text-center text-black'>We`ll handle the rest with our technolagy,and one of our team members will contact you shortly.</p>

            <button  className="py-2.5 mt-8 max-w-full text-sm md:text-base font-medium items-center text-center text-black  bg-amber-300 rounded-3xl w-[216px] max-md:px-5">
                <Link href='/' className=''>BACK TO HOMEPAGE</Link>
            </button>
        </div>
    );
}

export default GifComponent