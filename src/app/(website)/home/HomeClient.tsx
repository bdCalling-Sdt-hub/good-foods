"use client"
import Faq from '@/components/Home/Faq'
import React, { useState } from 'react'
import FaqClient from '../faq/FaqClient'
import SimpleFood from '@/components/SimpleFood'
import FoodBanner from '@/components/Home/FoodBanner'
import Banner from '@/components/Home/Banner'
import NewProduct from '@/components/Home/NewProduct'
import { FaCartPlus, FaStar } from 'react-icons/fa6'
import { Badge, Checkbox, DatePicker, Form, Input } from 'antd';
import Product from "@/assets/foods.png"
import Image from 'next/image';
import Logo from "@/assets/logo.png";
import { BiCloset, BiMinus, BiPlus } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import Heading from '@/components/shared/Heading'
import Modal from '@/components/shared/Modal'
import { useCart } from '@/provider/Cart'

const HomeClient = () => {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(1);

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

    const { state: { items }, dispatch } = useCart();

    const handleIncreaseQuantity = (id: string) => {
        dispatch({ type: 'INCREASE_QUANTITY', id });
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch({ type: 'DECREASE_QUANTITY', id });
    };

    const handleRemoveFromCart = (id: string) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };
    return (

        <div className=' mt-[100px] md:mt-[80px]'>
            <Banner/>
            <div className='container mt-[100px] md:mt-[80px] relative'>

                <SimpleFood/>
                <NewProduct/>
                <FoodBanner/>
                <FaqClient/>
            
            {
                open &&
                <div  className='w-[400px] fixed right-24 top-[84px] h-[400px] bg-white rounded-lg' >
                    <div 
                        className='bg-white overflow-hidden p-3  rounded-lg'
                        style={{
                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                        }}
                    >
                        <div className='bg-[#E9F2E8] flex items-center justify-between p-2'>
                            <Image alt='Logo' src={Logo} width={40} height={40} />
                            <GrClose onClick={()=>setOpen(false)} className='cursor-pointer'/>
                        </div>

                        <div className='h-[350px] overflow-y-auto'>
                            <div className='grid grid-cols-1'>
                                    {
                                        [...Array(2)].map((item, index)=>{
                                            return(
                                                <div key={index} className=' w-full p-2 rounded-lg'>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='flex items-center gap-3'>
                                                            <Image
                                                                alt='Product'
                                                                src={Product}
                                                                width={60}
                                                                height={70}
                                                                style={{borderRadius: 6}}
                                                            />

                                                            <div>
                                                                <p className='font-medium text-[16px] leading-6 text-[#5C5C5C]'>Heathy Food Name</p>
                                                                <p className='font-medium text-[16px] leading-6 text-[#735571]'>$100</p>
                                                            </div>
                                                        </div>
                                                        <div 
                                                            className={`
                                                                bg-[#ECECEC] 
                                                                flex
                                                                items-center 
                                                                rounded-[24px] px-6 w-[100px] h-10 justify-between
                                                            `}
                                                        >
                                                            <button className='text-[#656565]' onClick={()=>setCount(count - 1)} > <BiMinus size={20}/> </button>
                                                            <p className='text-[#656565]' >{count}</p>
                                                            <button className='text-[#656565]' onClick={()=>setCount(count + 1)} ><BiPlus size={20}/></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                        </div>

                        <div className='bg-[#F4F4F4] rounded flex items-center justify-between p-2'>
                            <p className='text-[#F52B2E] text-[16px] leading-5 font-medium'>Subtotal: <span className='text-[#7E7E7E]'>(1 Item)</span> </p>
                            <p className='text-[#F52B2E] text-[16px] leading-5 font-bold'>$150.00</p>
                        </div>
                        <button onClick={()=>(setModalOpen(true), setOpen(false) )} className='bg-primary mt-4 text-white rounded-lg h-[48px] w-full font-medium text-[14px] leading-6'>CONFIRM MEALS</button>
                    </div>
                </div>
            }

            <div onClick={()=>setOpen(true)} className='bg-primary cursor-pointer fixed right-6 top-1/2 w-[64px] h-[64px] rounded-full flex items-center justify-center'>
                <Badge count={5} color='#735571' style={{border: "none"}}>
                    <FaCartPlus color='#F4F4F4' size={24} />
                </Badge>
            </div>

            <Modal
                width={1000}
                open={modalOpen}
                setOpen={setModalOpen} 
                title='Confirm Payment' 
                body={body}
            />
            </div>
        </div>
    )
}

export default HomeClient