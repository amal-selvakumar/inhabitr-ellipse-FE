'use client'
import Stepper from "@/app/shared/Stepper";
import React, { useState } from "react";
import { dashBoardTitle } from '@/constants/dashboard';
import { dashBoardData } from "@/data/dashboardText";
import ButtonComponent from "@/app/shared/ButtonComponent";
import Card from "@/app/shared/Card";
import { DataProps } from '@/types/dashboard'
import Profile from '../../public/assets/images/profile.png'
import OrderList from "../orderList/page";


export default function Orders() {
    const [activeItem, setActiveItem] = useState<string>('Dashboard');

    const menuItems = [
        { name: 'My Account' },
        { name: 'My Orders' },
        { name: 'Payment History' },
        { name: 'My Documents' },
        { name: 'Service Requests' },
        { name: 'Logout' },
    ];

    const renderContent = () => {
        switch (activeItem) {
            case 'My Orders':
                return <OrderList />;
            // case 'Profile':
            //   return <ProfileContent />;
            // case 'Settings':
            //   return <SettingsContent />;
            // case 'Logout':
            //   return <LogoutContent />;
            // default:
            //   return <DashboardContent />;
        }
    };
    const { title, subTitle, buttonText } = dashBoardTitle

    const [selectedItem, setSelectedItem] = useState<DataProps | null>(null);

    const handleCardClick = (data: DataProps) => {
        setSelectedItem(data);
    };

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (selectedItem) {
            window.location.href = '/products'

        }
    };

    return (
        <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center">

            <div className="flex flex-col  max-md:ml-0 max-md:w-full w-full">
                <div className="flex flex-col items-start self-center px-20 pt-24 pb-14 mt-6 w-full bg-white max-w-[1302px] max-md:px-5 max-md:max-w-full">
                    <div className="flex">
                        <div className="w-64 h-screen">
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
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-center p-4 cursor-pointer hover:bg-[#fffefe] hover:border-l-2 hover:border-l-yellow-600 border-y-[1px] border-white ${activeItem === item.name ? 'bg-[#fffefe]' : ''
                                            }`}
                                        onClick={() => setActiveItem(item.name)}
                                    >
                                        <span
                                            className={`w-1 h-full bg-amber-300 transition-all duration-300 ${activeItem === item.name ? 'block' : 'hidden'
                                                }`}
                                        />
                                        <span className="ml-2">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 px-8 pb-4 w-full ">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DashboardContent = () => <div>Dashboard Content</div>;
