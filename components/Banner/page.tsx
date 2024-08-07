"use client";
import { BannerProps } from '@/types/login'
import React from 'react'

const Banner: React.FC<BannerProps> = ({ content }) => {
    return (
        <section className="flex-col w-[56%] justify-center items-center  hidden md:hidden lg:flex ">
            <div className="w-full">
                <div className="flex items-start"></div>
                <div className="flex justify-center items-center w-full h-full flex-grow">
                    <img
                        loading="lazy"
                        src={content}
                        alt=""
                        className="object-contain max-w-full aspect-[1.41] w-full h-full hidden md:hidden lg:flex mt-4" // Hide image on medium screens
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner

