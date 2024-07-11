"use client";
import Heading from '@/components/shared/Heading';
import { Button, Input, Pagination, PaginationProps, Select } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GoSearch } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Catering from "@/assets/catering.png";
import Image from 'next/image';
import { IoIosInformationCircle } from "react-icons/io";
import Modal from '@/components/shared/Modal';

const TestimonialClient = () => {
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = useState(false)

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };


    const body=(
        <div>
            <p className='text-[16px] leading-6 font-normal text-[#636363] mb-4'>Answer</p>
            <div className='border border-[#636363] border-opacity-[10%] rounded-lg p-4'>
                <p className='text-[16px] leading-6 font-normal text-[#636363]'>
                    convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae 
                    elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, 
                    Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet 
                    ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, 
                    luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt 
                    ullamcorper elit diam turpis placerat vitae
                </p>
            </div>
        </div>
    )
    return (
        <div className=''>
            <div className='flex items-center justify-between p-4'>
                <Heading name='Testimonials' style='font-medium text-[18px] leading-[24px] text-[#333333] text-center' />
                <Input
                    prefix={<GoSearch size={18} color='#5C5C5C' />}
                    placeholder='Search By Date'
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
            
            <table className="w-full rounded-[5px]">
                <tr className="text-left w-full bg-[#FEE3B8]">
                    {
                        ["S.no ", "User", "FeedBack", "Date", "Status", "Action"].map((item, index)=>
                        <th key={index} className={`text-[16px] py-2 ${index === 0 ? "pl-4" : "pl-0"} leading-7 text-[#3E3E3E]`}>
                            {item}
                        </th>
                        )
                    }
                </tr>

                {
                    [...Array(9)]?.map((item, index)=>
                        <React.Fragment key={index}>
                            <div style={{marginTop: '8px'}}></div>
                            <tr>
                                <td className='h-[50px] pl-4 text-[15px] leading-5 text-[#636363] font-normal'>{index + 1}</td>
                                <td className='h-[50px] flex items-center gap-1 text-[15px] leading-5 text-[#636363] font-normal'>
                                    <Image
                                        alt="Catering"
                                        src={Catering}
                                        width={48}
                                        height={48}
                                    />
                                    <p>Nadir</p>
                                </td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>Small Mealfafafasfasfaf</td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>2024-07-03</td>
                                <td className='h-[50px] text-[15px] leading-5 text-[#636363] font-normal'>
                                    <Select
                                        style={{
                                            width: 160,
                                            height: 48,
                                            background: "transparent",
                                            border: "none",
                                            
                                        }}
                                        defaultValue={"Unpublished"}
                                    >
                                        <Select.Option value="published">Published</Select.Option>
                                        <Select.Option value="Unpublished">UnPublished</Select.Option>
                                    </Select>
                                </td>
                                <td className='h-[50px] flex items-center gap-3 text-[12px] leading-5 text-[#636363] font-normal'>
                                    <MdDelete className='cursor-pointer' size={24} color='#BF757B' />
                                    <IoIosInformationCircle className='cursor-pointer' onClick={()=>setOpen(true)} size={24} color='#735571' />
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                }
            </table>

            <div className='my-6 flex items-center justify-center w-full'>
                <Pagination showSizeChanger={false} total={30} itemRender={itemRender} />
            </div>

            <Modal
                title='FeedBack Details'
                open={open}
                setOpen={setOpen}
                body={body}
            />
        </div>
    )
}

export default TestimonialClient;