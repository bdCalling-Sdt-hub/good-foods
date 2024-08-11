"use client";
import React, { useState } from 'react'
import Product from "@/assets/foods.png"
import Image from 'next/image';
import Heading from '../shared/Heading';
import { Rate } from 'antd';
import Modal from '../shared/Modal';
import { Info } from 'lucide-react';

const MealOrder = () => {
    const [detailsModal, setDetailsModal] = useState(false);
    const [ratingModal, setRatingModal] = useState(false);

    const body=(
        <div>
            <div className='h-[350px] overflow-y-auto'>
                <div className='grid grid-cols-1'>
                    {
                        [...Array(4)].map((item, index)=>{
                            return(
                                <div key={index} className=' w-full p-2 rounded-lg'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <Image
                                                alt='Product'
                                                src={Product}
                                                width={60}
                                                height={0}
                                                style={{borderRadius: 6}}
                                            />
                                            <div>
                                                <p className='font-medium text-[16px] leading-6 text-[#5C5C5C]'>Heathy Food Name</p>
                                                <p className='font-medium text-[16px] leading-6 text-[#735571]'>$100</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex items-center justify-between mb-2'>
                <p className='text-[16px] leading-6 font-normal text-[#F52B2E]'>Price:</p>
                <p className='text-[16px] leading-6 font-normal text-[#F52B2E]'>$500</p>
            </div>

            <div className='flex items-center justify-between'>
                <p className='text-[16px] leading-6 font-normal text-[#565656]'>Delivery Change:</p>
                <p className='text-[16px] leading-6 font-normal text-[#565656]'>$50</p>
            </div>

            <div className='w-full h-[1px] bg-[#BCBBCC] my-4'  />

            <div className='flex items-center justify-between'>
                <p className='text-[16px] leading-6 font-semibold text-[#3E3E3E]'>Total</p>
                <p className='text-[16px] leading-6 font-semibold text-[#3E3E3E]'>$550</p>
            </div>
        </div>
    )

    const ratingBody=(
        <div className='w-full mt-10'>
            <Heading name='Give your Rating' style='text-[#676F62] font-medium text-[24px] leading-[21px] text-center mb-8' />
            <div className='flex items-center justify-center'>
                <Rate
                    allowHalf
                    style={{
                        fontSize: 35,
                    }}
                    defaultValue={2.5}
                />
            </div>
            <div className='flex items-center justify-center'>
                <button className='h-[48px] w-[120px] mx-auto rounded-lg text-white bg-secondary mt-6'>Submit</button>
            </div>
        </div>
    )
    return (
        <div>
            <table className="w-[1400px] overflow-auto rounded-[5px] rounded-table">
                {/* table heading */}
                <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                    {
                        ["S.no ", "Order Type", "OrderDate", "Delivery date", "Price", "Status", "Action"].map((item, index)=>
                        <th key={index} className={`text-[16px] font-medium py-2 leading-6 text-[#000000] text-center`}>
                            {item}
                        </th>
                        )
                    }
                </tr>

                {
                    [...Array(8)]?.map((item, index)=>

                        <React.Fragment key={index}>
                            {/* Table Details */}
                            <tr>
                                <td className='text-center h-[50px] text-[14px] leading-5 text-[#636363] font-medium'>{index + 1}</td>
                                <td className='text-center h-[50px] text-[14px] leading-5 text-[#636363] font-medium'>Medium Paleo meal</td>
                                <td className='text-center h-[50px] text-[14px] leading-5 text-[#636363] font-medium'>Small Meal</td>
                                <td className='text-center h-[50px] text-[14px] leading-5 text-[#636363] font-medium'>2024-07-10</td>
                                <td className='text-center h-[50px] text-[14px] leading-5 text-[#636363] font-medium'>2024-07-12</td>
                                <td className='text-center h-[50px] text-[14px] leading-5 font-medium text-primary'>Processing</td>
                                <td className=' h-[50px] flex items-center justify-center gap-3 text-[12px] leading-5 text-[#636363] font-normal'>
                                    <Info onClick={()=>setDetailsModal(true)} className='cursor-pointer' size={24} color='#735571' />
                                    <button onClick={()=>setRatingModal(true)} className='h-6 w-[70px] text-[#FCFCFC] text-[12px] leading-[14px] font-normal rounded-lg bg-[#F27405]'>Rating</button>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                }
            </table>
            
            <Modal
                title='Order Details'
                open={detailsModal}
                setOpen={setDetailsModal}
                body={body}
            />

            <Modal
                title='Give Your FeedBack'
                open={ratingModal}
                setOpen={setRatingModal}
                body={ratingBody}
            />
        </div>
    )
}

export default MealOrder