"use client";
import Heading from '@/components/shared/Heading';
import { Input, Pagination, PaginationProps, Select } from 'antd';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GoSearch } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
const {Option} = Select;

const TransactionsClient = () => {
    const [keyword, setKeyword] = useState("");

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
        <div className=''>
            <div className='flex items-center justify-between p-4'>
                <Heading name='Transaction' style='font-medium text-[18px] leading-[24px] text-[#333333] text-center' />
                <Input
                    prefix={<GoSearch size={18} color='#5C5C5C' />}
                    placeholder='Search...'
                    style={{
                        width: 300,
                        height: 40,
                        border: "1px solid #F6F6F6",
                        boxShadow: "none",
                        outline: "none",
                        color: "#5C5C5C"
                    }} 
                    value={keyword}
                    onChange={(e)=>setKeyword(e.target.value)}
                    suffix={<CgClose onClick={()=> setKeyword("")} style={{display: keyword ? "block" : "none"}} size={18} color='#5C5C5C' />}
                    className='placeholder:text-[#5C5C5C]'
                />
            </div>
            
            <table className="w-full rounded-[5px] rounded-table">
                <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                    {
                        ["S.no ", "Name", "Orders", "OrderDate", "Delivery date", "Price", "Status", "Action"].map((item, index)=>
                        <th key={index} className={`text-[14px] py-2 ${index === 0 ? "pl-4" : "pl-0"} leading-7 text-[#3E3E3E]`}>
                            {item}
                        </th>
                        )
                    }
                </tr>

                {
                    [...Array(8)]?.map((item, index)=>
                        <React.Fragment key={index}>
                            <div style={{marginTop: '8px'}}></div>
                            <tr>
                                <td className='h-[50px] pl-4 text-[12px] leading-5 text-[#636363] font-normal'>{index + 1}</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>Nadir</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>Small Meal</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>2024-07-10</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>2024-07-12</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>$100</td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>
                                    <Select
                                        style={{
                                            width: "120px",
                                            background: "transparent",
                                            border: "none",
                                            
                                        }}
                                        defaultValue={"Pending"}
                                    >
                                        <Select.Option value="pending">Pending</Select.Option>
                                        <Select.Option value="process">Process</Select.Option>
                                        <Select.Option value="delivered">Delivered</Select.Option>
                                    </Select>
                                </td>
                                <td className='h-[50px] text-[12px] leading-5 text-[#636363] font-normal'>
                                    <IoIosInformationCircle size={24} color='#735571' />
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                }
            </table>

            <div className='my-6 flex items-center justify-center w-full'>
                <Pagination showSizeChanger={false} total={30} itemRender={itemRender} />
            </div>
        </div>
    )
}

export default TransactionsClient