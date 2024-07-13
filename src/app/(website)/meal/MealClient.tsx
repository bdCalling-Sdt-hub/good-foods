"use client"
import Heading from '@/components/shared/Heading'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import Product from "@/assets/foods.png"
import Modal from '@/components/shared/Modal';
import { Checkbox, DatePicker, Form, Input } from 'antd';

const MealClient = () => {
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState("Small Meal");
    const [count, setCount] = useState(1);
    const [tabItem, setTabItem] = useState<number | null>(0)

    useEffect(() => {
        const initialTab = new URLSearchParams(window.location.search).get('tab') || "Small Meal";
        const initialTab2 = new URLSearchParams(window.location.search).get('index') || 0;
        setTabItem(Number(initialTab2))
        setTab(initialTab);
    }, []);

    const handleTab = (tab: string, index:any) => {
        setTab(tab);
        setTabItem(index);
        setCount(0)

        const params = new URLSearchParams(window.location.search);
        params.set('tab', tab);
        window.history.pushState(null, "", `?${params.toString()}`);

        const indexParams = new URLSearchParams(window.location.search);
        indexParams.set('index', index);
        window.history.pushState(null, "", `?${indexParams.toString()}`);
    }

    const body = (
        <div className='grid grid-cols-12 rounded-lg'>
            <div className='col-span-6 bg-[#103509] p-6'>
                <Heading name='Shipping Information' style='font-bold text-[16px] leading-[24px] text-[#F6F6F6] mb-6' />
                <div>
                    <Form layout='vertical' className='grid grid-cols-12 gap-6'>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Your Full Name"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-6'
                        >
                            <Input
                                placeholder='Enter Your Full Name'
                                style={{
                                    width: "100%",
                                    height: 50,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 24,
                                    background: "#E9F2E8"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Phone Number"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-6'
                        >
                            <Input
                                placeholder='Enter Your Phone Number'
                                style={{
                                    width: "100%",
                                    height: 50,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 24,
                                    background: "#E9F2E8"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item
                            name="location"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Location!"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-12'
                        >
                            <Input
                                placeholder='Enter Your Location'
                                style={{
                                    width: "100%",
                                    height: 50,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 24,
                                    background: "#E9F2E8"
                                }}
                                className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <div className='my-0 col-span-12 w-full h-[1px] bg-white ' />

                        <Form.Item
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Pick Your Delivery Date"
                                }
                            ]}
                            style={{marginBottom: 0}}
                            className='col-span-12'
                        >
                            <DatePicker
                                placeholder='Picker Your Delivery Date'
                                style={{
                                    width: "100%",
                                    height: 50,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: 24,
                                    background: "#E9F2E8"
                                }}
                                 className='poppins placeholder:text-[#838383] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                            />
                        </Form.Item>

                        <Form.Item name={"account"} className='col-span-6' style={{marginBottom: 0}}>
                            <Checkbox className="text-[#818181] text-[12px] leading-[24px] font-medium">Your Profile Address</Checkbox>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <div className='col-span-6 bg-white p-6'>
                <Heading name='PROCEED TO PAY' style='font-bold text-[16px] leading-[24px] text-[#26235B] mb-6' />

                <div className='flex flex-col gap-4'>

                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] leading-5 text-[#F52B2E] font-medium'>Price :</p>
                        <p className='text-[16px] leading-5 text-[#F52B2E] font-bold'>$150.00</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] leading-5 text-[#565656] font-medium'>Delivery Charge :</p>
                        <p className='text-[16px] leading-5 text-[#565656] font-bold'>$150.00</p>
                    </div>
                    <div className='w-full h-[1px] bg-[#BCBBCC] ' />

                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] leading-5 text-[#3E3E3E] font-medium'>Total :</p>
                        <p className='text-[16px] leading-5 text-[#3E3E3E] font-bold'>$150.00</p>
                    </div>
                    <Checkbox className="text-[#818181] text-[12px] leading-[24px] font-medium">I agree to <span className='text-[#F52B2E]'>Terms & Conditions, Privacy & Policy and Refund Policy</span></Checkbox>
                        
                    <button onClick={()=>setOpen(false)} className='bg-primary text-white rounded-lg h-[48px] w-full font-normal text-[16px] leading-5'>Confirm Payment</button>
                </div>

            </div>
        </div>
    )

    return (
        <div className='container pt-[100px] h-full bg-[#F7F7F7] pb-20'>
            <Heading name='Select your meal plans ' style='font-bold text-[32px]  md:text-[40px] leading-[38px] md:leading-[46px] text-[#333333] mb-6' />

            <div className='grid grid-cols-12 gap-6'>

                {/* meal plans  */}
                <div className='bg-white col-span-12 lg:col-span-4 h-fit p-6 rounded-lg'>
                    <div className='grid grid-cols-1 gap-6'>
                        {
                            ["Small Meal", "Small Paleo Meal", "Medium Meal", "Medium Paleo Meal", "Large Meal", "Large Paleo Meal"]?.map((item, index)=>{
                                return(
                                    <div key={index} className='flex items-center justify-between'>
                                        <p 
                                            onClick={()=>handleTab(item, index)}
                                            className={`
                                                w-[200px] flex items-center justify-center 
                                                h-[40px] cursor-pointer 
                                                ${tab === item ? "bg-[#FDB64E] text-[#F4F4F4]" : "bg-[#EEEEEE] text-[#656565] "}
                                                rounded-[24px] font-medium text-[16px] leading-5
                                            `}
                                        >
                                            {item}
                                        </p>
                                        <div 
                                            className={`
                                                bg-[#ECECEC] 
                                                ${Number(tabItem) === index ? "flex": "none"}
                                                items-center 
                                                rounded-[24px] px-6 w-[150px] h-10 justify-between    
                                            `}
                                        >
                                            <button className='text-[#656565]' onClick={()=>setCount(count - 1)} >-</button>
                                            <p className='text-[#656565]' >{count}</p>
                                            <button className='text-[#656565]' onClick={()=>setCount(count + 1)} >+</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* meal details */}
                <div className='bg-white col-span-12 lg:col-span-8 h-fit p-6 rounded-lg'>
                    <div className='rounded-lg p-2 bg-[#F4F4F4] px-[34px] py-[14px] flex items-center justify-between'>
                        <p className='text-[16px] leading-5 text-[#F52B2E] font-medium'>Subtotal :</p>
                        <p className='text-[16px] leading-5 text-[#F52B2E] font-bold'>$150.00</p>
                    </div>

                    <button onClick={()=>setOpen(true)} className='bg-primary mt-4 text-white rounded-lg h-[48px] w-full font-medium text-[14px] leading-6'>CONFIRM MEALS</button>

                    <div className='w-full h-[1px] bg-[#D9D9D9] my-4' />
                    <Heading name='Meal details ' style='font-medium text-[24px] leading-[31px] text-[#1A1A1A] mb-4' />

                    <div className='grid grid-cols-1 gap-3'>
                        {
                            [...Array(6)].map((item, index)=>{
                                return(
                                    <div key={index} className='bg-[#F7F7F7] w-full h-full sm:h-[75px] p-2 rounded-lg'>
                                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                                            <Image
                                                alt='Product'
                                                src={Product}
                                                width={90}
                                                height={60}
                                            />
                                            <div className='grid-cols-1 grid gap-0 sm:gap-4'>
                                                <div className='flex  items-center sm:gap-4'>
                                                    <p className='font-bold text-[18px] leading-7 text-[#5C5C5C]'>Heathy Food Name</p>
                                                    <div className='flex items-center gap-3'>
                                                        <FaStar className='' color='#FDB64E' size={14} /> <span className='text-[#FDB64E] text-[14px] leading-[18px] font-medium'>4.5/5</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-center gap-3'>
                                                    <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Protein 49g</span>
                                                    <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                                    <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Carbs 23g</span>
                                                    <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                                    <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Fat 23g</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>

            <Modal
                width={1000}
                open={open}
                setOpen={setOpen} 
                title='Confirm Payment' 
                body={body}
            />
        </div>
    )
}

export default MealClient