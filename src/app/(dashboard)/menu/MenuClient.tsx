"use client";
import Heading from '@/components/shared/Heading';
import { Button, Input, Pagination, PaginationProps, Select } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GoSearch } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Catering from "@/assets/catering.png";
import Image from 'next/image';
const {Option} = Select;

const MenuClient = () => {
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
                <Heading name='Menus' style='font-medium text-[18px] leading-[24px] text-[#333333] text-center' />

                <div className='flex items-center gap-6'>
                    <Input
                        prefix={<GoSearch size={18} color='#5C5C5C' />}
                        placeholder='Search By Menu'
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
                    <Select
                        style={{
                            width: "120px",
                            height: 42,
                            background: "transparent",
                            border: "none",
                            
                        }}
                        defaultValue={"Our Meal"}
                    >
                        <Select.Option value="pending">Our Meal</Select.Option>
                        <Select.Option value="process">Our Meal</Select.Option>
                        <Select.Option value="delivered">Our Meal</Select.Option>
                    </Select>

                    <Select
                        style={{
                            width: "120px",
                            height: 42,
                            background: "transparent",
                            border: "none",
                            
                        }}
                        defaultValue={"Meal Plan"}
                    >
                        <Select.Option value="pending">Small Meal</Select.Option>
                        <Select.Option value="process">Large Meal</Select.Option>
                        <Select.Option value="delivered">Extra Large</Select.Option>
                    </Select>

                    <Link href={"/create-menu"}>
                        <Button 
                            style={{
                                background: "#6EA963",
                                color: "white",
                                border: "none",
                                height: 42
                            }}
                            icon={<BiPlus size={24} />}
                        >
                            Create Menu
                        </Button>
                    </Link>
                </div>
            </div>
            
            <table className="w-full rounded-[5px] rounded-table">
                <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                    {
                        ["S.no ", "Image", "Menu Name", "Meal Plan", "Action"].map((item, index)=>
                        <th key={index} className={`text-[16px] py-2 ${index === 0 ? "pl-4" : "pl-0"} leading-7 text-[#3E3E3E]`}>
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
                                <td className='h-[50px] pl-4 text-[15px] leading-5 text-[#636363] font-normal'>{index + 1}</td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>
                                    <Image
                                        alt="Catering"
                                        src={Catering}
                                        width={48}
                                        height={48}
                                    />
                                </td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>Small Meal</td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>Breakfast</td>
                                <td className='h-[50px] flex items-center gap-3 text-[12px] leading-5 text-[#636363] font-normal'>
                                    <CiEdit size={24} color='#735571' />
                                    <MdDelete size={24} color='#BF757B' />
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

export default MenuClient;