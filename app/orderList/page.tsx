'use client'
import React, { useState } from "react";


export default function OrderList() {

    const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

    const orders = [
        {
            id: 1,
            productName: 'Baton Rouge',
            orderDate: 'Apr 29, 2023 at 1:30pm',
            status: 'Ready to Ship',
            orderNumber: '2345-6789-10-BCD-EFG',
            deliveryDate: 'August 5, 2024',
            deliveryAddress: 'Texas A&M University College Station, TX 750 beds',
        },
        {
            id: 2,
            productName: 'College Station',
            orderDate: 'Apr 14, 2023 at 8:34am',
            status: 'In Transit',
            orderNumber: '2345-6789-10-BCD-EFG',
            deliveryDate: 'August 5, 2024',
            deliveryAddress: 'Texas A&M University College Station, TX 750 beds',
        },
    ];

    const toggleDetails = (id: number) => {
        setExpandedOrder(expandedOrder === id ? null : id);
    };
    return (
        <div className="flex gap-5 ml-5 max-md:flex-col w-full justify-center min-w-[800px]">
            <div className="p-6 w-full flex flex-col gap-2">
                <h1 className="text-4xl font-semibold mb-6">My Orders</h1>
                <div className="flex flex-col w-full text-sm">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-[#F7F7F7] text-[#797979] p-4 mb-4 rounded w-full text-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center w-full justify-center text-center">
                                <div className="flex flex-col items-center md:items-start">
                                    <h2 className="text-lg font-semibold text-center md:text-left">{order.productName}</h2>
                                    <p className="text-sm text-gray-600 text-center md:text-left">Order Date: {order.orderDate}</p>
                                </div>
                                <div className="text-sm font-medium">{order.status}</div>

                                <div className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-2 md:space-y-0 md:space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 transition-colors"
                                        onClick={() => toggleDetails(order.id)}
                                    >
                                        {expandedOrder === order.id ? 'Show Less Details' : 'See Details'}
                                    </button>
                                </div>
                            </div>


                            {expandedOrder === order.id && (

                                <div className="w-[80%]">
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="flex">
                                                <p>Order Number:</p>
                                                <p className="font-medium">{order.orderNumber}</p>
                                            </div>
                                            <div className="flex">
                                                <p>Order Date:</p>
                                                <p className="font-medium">{order.orderDate}</p>
                                            </div>
                                            <div className="flex">
                                                <p>Delivery Date:</p>
                                                <p className="font-medium">{order.deliveryDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="">Delivery Address:</p>
                                            <p className=" text-gray-700">{order.deliveryAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

