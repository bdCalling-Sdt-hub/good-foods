"use client";
import React, { useEffect, useState } from 'react';
import Product from "@/assets/foods.png";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const MenuClient = () => {
    const [tab, setTab] = useState("Full Menus");

    useEffect(() => {
        const initialTab = new URLSearchParams(window.location.search).get('tab') || "Full Menus";
        setTab(initialTab);
    }, []);


    const handleTab = (tab: string) => {
        setTab(tab);
        const params = new URLSearchParams(window.location.search);
        params.set('tab', tab);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    return (
        <div className='container mt-[100px]'>

            {/* total menus */}
            <div className='flex items-center gap-6 mb-6'>
                {
                    ["Full Menus", "Enteree", "Breakfast", "Snack"]?.map((item, index)=>{
                        return(
                            <p 
                                onClick={()=>handleTab(item)}
                                className={`
                                    w-[120px] flex items-center justify-center 
                                    h-[35px] cursor-pointer 
                                    ${tab === item ? "bg-[#FDB64E] text-[#F4F4F4]" : "bg-[#EEEEEE] text-[#656565] "}
                                    rounded-lg font-medium text-[16px] leading-5
                                `} 
                                key={index}
                            >
                                {item}
                            </p>
                        )
                    })
                }
            </div>

            {/* menus container */}
            <div className='grid grid-cols-4 gap-4'>
                {
                    [...Array(10)].map((item, index)=>{
                        return(
                            <div key={index} className='bg-[#F7F7F7] p-2 rounded-lg'>
                                <Image
                                    alt='Product'
                                    src={Product}
                                    style={{objectFit: "contain"}}
                                />

                                {/* meal description */}
                                <div>
                                    <div className='flex items-center gap-3 mt-4 mb-1'>
                                        <FaStar className='' color='#FDB64E' size={14} /> <span className='text-[#FDB64E] text-[14px] leading-[18px] font-medium'>4.5/5</span>
                                    </div>
                                    <p className='font-bold text-[18px] leading-7 text-[#5C5C5C]'>Heathy Food Name</p>
                                    <p className='font-semibold text-[16px] leading-5 text-[#735571] my-1'>$100</p>
                                    <button className='border-none font-medium text-[14px] leading-6 bg-primary text-white w-full h-10 rounded-lg'>Add to cart</button>

                                    <div className='flex items-center justify-center gap-3 my-3'>
                                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Protein 49g</span>
                                        <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Carbs 23g</span>
                                        <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Fat 23g</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className='my-6 flex items-center justify-center w-full'>
                <Pagination showSizeChanger={false} total={30} itemRender={itemRender} />
            </div>
        </div>
    )
}

export default MenuClient