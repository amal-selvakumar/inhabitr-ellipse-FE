'use client';
import React, { useState, useEffect } from "react";
import Profile from '../../public/assets/images/profile.png';
import OrderList from "../orderList/OrderList";
import { orderMenuItems } from "@/constants/orders";

export default function Orders() {
    const [activeItem, setActiveItem] = useState<string>('Dashboard');

    useEffect(() => {
        const savedItem = localStorage.getItem('activeItem');
        if (savedItem) {
            setActiveItem(savedItem);
        }
    }, []);

    const renderContent = () => {
        switch (activeItem) {
            case 'My Orders':
                return <OrderList />;
            default:
                return '';
        }
    };

    const handleMenuItemClick = (itemName: string) => {
        if (itemName === 'My Orders') {
            setActiveItem(itemName);
            localStorage.setItem('activeItem', itemName);
        }
        // setActiveItem(itemName);
        // localStorage.setItem('activeItem', itemName); // Save the active item to local storage
    };

    return (

        <div className="flex flex-col md:flex-row gap-5 w-full justify-center">
            <div className="flex flex-col md:flex-row max-md:w-full py-14 px-6 md:px-20">
                <div className="flex flex-col items-start md:self-start w-full md:w-auto bg-white mt-6 p-5 md:px-20 md:pt-24 md:pb-14">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-64 h-auto md:h-screen">
                            <div className="flex items-center p-4">
                                <img
                                    src={Profile.src}
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <h2 className="text-lg font-semibold">John Smith</h2>
                                    <p className="text-sm text-gray-500">Regional Manager</p>
                                </div>
                            </div>

                            <ul className="mt-4 bg-[#F7F7F7] text-[#797979]">
                                {orderMenuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-center p-4 cursor-pointer hover:bg-[#fffefe] hover:border-l-2 hover:border-l-amber-300 border-y-[1px] border-white ${activeItem === item.name ? 'bg-[#fffefe] border-l-2 border-l-amber-300' : ''}`}
                                        onClick={() => handleMenuItemClick(item.name)}
                                    >
                                        <span
                                            className={`w-1 h-full bg-amber-300 transition-all duration-300 ${activeItem === item.name ? 'block' : 'hidden'}`}
                                        />
                                        <span className="ml-2">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 px-4 md:px-8 pb-4 w-full">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

