'use client'
import React, { useState } from "react";
import ReadyToShipIcon from "../../public/assets/images/ReadyToShipIcon.png";
import InTransitIcon from "../../public/assets/images/InTransitIcon.png";
import HideIcon from "../../public/assets/images/HideIcon.png";
import DetailsIcon from "../../public/assets/images/DetailsIcon.png"
import OrderTrackingBar from "@/components/OrderTrackingBar/OrderTrackingSidebar";


export default function OrderList() {

    const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

    const orders = [
        {
            id: 1,
            productName: 'Baton Rouge',
            orderDate: 'Apr 29, 2023 at 1:30pm',
            status: (
                <div className="flex gap-2">
                    <img src={ReadyToShipIcon.src} alt="" />
                    <span>Ready to Ship</span>
                </div>
            ),
            orderNumber: '2345-6789-10-BCD-EFG',
            deliveryDate: 'August 5, 2024',
            deliveryAddress: 'Texas A&M University College Station, TX 750 beds',
        },
        {
            id: 2,
            productName: 'College Station',
            orderDate: 'Apr 14, 2023 at 8:34am',
            status: (
                <div className="flex gap-2">
                    <img src={InTransitIcon.src} alt="" />
                    <span>In Transit</span>
                </div>
            ),
            orderNumber: '2345-6789-10-BCD-EFG',
            deliveryDate: 'August 5, 2024',
            deliveryAddress: 'Texas A&M University College Station, TX 750 beds',
        },
    ];

    const toggleDetails = (id: number) => {
        setExpandedOrder(expandedOrder === id ? null : id);
    };

    return (
        <div className="flex flex-col gap-5 ml-5 max-md:ml-0 w-full justify-center">
            <div className="p-6 w-full flex flex-col gap-2">
                <h1 className="text-4xl font-semibold mb-6 text-center md:text-left">My Orders</h1>
                <div className="flex flex-col w-full text-sm">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-[#F7F7F7] text-[#797979] px-4 md:px-8 py-6 md:py-10 mb-4 rounded w-full flex flex-col gap-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full justify-center text-center md:text-left">
                                <div className="flex flex-col items-center md:items-start">
                                    <h2 className="text-lg font-semibold text-black text-center md:text-left">{order.productName}</h2>
                                    <p className="text-sm text-gray-600 text-center md:text-left">Order Date: {order.orderDate}</p>
                                </div>
                                <div className="flex justify-center md:justify-start text-sm font-medium gap-2">Status: {order.status}</div>
                                <div className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-2 md:space-y-0 md:space-x-4">
                                    <button
                                        className="text-black transition-colors font-medium"
                                        onClick={() => toggleDetails(order.id)}
                                    >
                                        {expandedOrder === order.id ? (
                                            <div className="flex gap-2 items-center">
                                                <span className="text-black">Hide Details</span>
                                                <img src={HideIcon.src} alt="" className="h-4 w-4" />
                                            </div>
                                        ) : (
                                            <div className="flex gap-2 items-center">
                                                <span className="text-black">See Details</span>
                                                <img src={DetailsIcon.src} alt="" className="h-4 w-4" />
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {expandedOrder === order.id && (
                                <div className="w-full py-8 md:py-16 px-4 border-t border-[#797979] flex flex-col gap-10">
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[80%]">
                                        <div className="whitespace-nowrap sm:whitespace-break-spaces">
                                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                                <p className="font-semibold col-span-1 sm:col-span-1">Order Number:</p>
                                                <p className="font-semibold text-black col-span-1 sm:col-span-1">{order.orderNumber}</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                                <p className="font-semibold col-span-1 sm:col-span-1">Order Date:</p>
                                                <p className="font-semibold text-black col-span-1 sm:col-span-1">{order.orderDate}</p>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                                <p className="font-semibold col-span-1 sm:col-span-1">Delivery Date:</p>
                                                <p className="font-semibold text-black col-span-1 sm:col-span-1">{order.deliveryDate}</p>
                                            </div>


                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p>Delivery Address:</p>
                                            <p className="font-semibold text-black">{order.deliveryAddress}</p>
                                            <span className="text-md text-black font-bold">SMS Message Center</span>

                                        </div>

                                       
                                    </div>
                                    <OrderTrackingBar activeStep={4} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

