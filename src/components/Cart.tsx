"use client";
import React, { useEffect, useState } from 'react';
import Logo from "@/assets/logo.png";
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import { useCart } from '@/provider/Cart';
import { imageUrl } from '@/redux/api/baseApi';
import { BiMinus, BiPlus } from 'react-icons/bi';
import Modal from './shared/Modal';
import { Checkbox, DatePicker, Form, Input } from 'antd';
import Heading from './shared/Heading';
import { useUser } from '@/provider/User';
import { useMenuOrderMutation } from '@/redux/apiSlices/orderSlice';
import toast from 'react-hot-toast';

interface ICartProps{
    open: boolean;
    setOpen: (open: boolean) => void;
}


const Cart:React.FC<ICartProps> = ({open, setOpen}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(1);
    const [menuOrder, {isLoading}] = useMenuOrderMutation()

    const { state: { items }, dispatch } = useCart();
    const total = items?.reduce((acc, item) => acc + Number(item.quantity) * item.price, 0);

    const products = items?.map((item:any)=> {
        return {
            product: item?.id,
            quantity: item?.quantity
        }
    } )

    const handleSubmit=async()=>{
        const orderData = {
            products: products,
            price: total,
            totalItems: products?.length, // total products length
            trxId: "TRXID45415",
            deliveryCharge: 5
        }

        try {
            await menuOrder(orderData).unwrap().then((result)=>{
                if (result?.success) {
                    form.resetFields()
                    toast.success(result.message);
                    setModalOpen(false)
                    setOpen(false)
                    dispatch({ type: 'CLEAR_CART' });
                    localStorage.removeItem('cart'); 
                }
            });
            
        } catch (error: any) {
            toast.error(error?.data?.message ? error?.data?.message : "An unexpected server error occurred");
        }


    }


    const [checkbox, setCheckbox] = useState(false);
    const [disable, setDisable] = useState(false)
    const [form] = Form.useForm();
    const { user } = useUser() ?? {};

    useEffect(()=>{
        if( checkbox && user){
            form.setFieldsValue(user)
        }else{
            form.resetFields();
        }
    }, [user, form, checkbox])


    const body = (
        <div className='grid grid-cols-12 rounded-lg'>
            <div className='col-span-6 bg-[#103509] p-6'>
                <Heading name='Shipping Information' style='font-bold text-[16px] leading-[24px] text-[#F6F6F6] mb-6' />
                <div>
                    <Form form={form} layout='vertical' className='grid grid-cols-12 gap-6'>
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
                            name="contact"
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

                        {/* <Form.Item
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
                        </Form.Item> */}

                        <Form.Item name={"account"} className='col-span-6' style={{marginBottom: 0}}>
                            <Checkbox onChange={(e:any)=>setCheckbox(e.target.checked)} className="text-[#818181] text-[12px] leading-[24px] font-medium">Your Profile Address</Checkbox>
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
                    <Checkbox onChange={(e)=>setDisable(e.target.checked)} className="text-[#818181] text-[12px] leading-[24px] font-medium">I agree to <span className='text-[#F52B2E]'>Terms & Conditions, Privacy & Policy and Refund Policy</span></Checkbox>
                        
                    <button 
                        disabled={!disable} 
                        onClick={handleSubmit} 
                        className='bg-primary disabled:bg-bg-primary disabled:bg-opacity-[40%] text-white rounded-lg h-[48px] w-full font-normal text-[16px] leading-5'
                    >
                        {isLoading ? "loading" : "Confirm Payment"}
                        
                    </button>
                </div>

            </div>
        </div>
    )



    return (
        <>
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
                                            items?.map((item:any, index:any)=>{
                                                return(
                                                    <div key={index} className=' w-full p-2 rounded-lg'>
                                                        <div className='flex items-center justify-between'>
                                                            <div className='flex items-center gap-3'>
                                                                <Image
                                                                    alt='Product'
                                                                    src={`${imageUrl}${item?.image}`}
                                                                    width={60}
                                                                    height={70}
                                                                    style={{borderRadius: 6}}
                                                                />

                                                                <div>
                                                                    <p className='font-medium text-[16px] leading-6 text-[#5C5C5C]'>{item?.name?.slice(0,15)}...</p>
                                                                    <p className='font-medium text-[16px] leading-6 text-[#735571]'>${item?.price}</p>
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
                                <p className='text-[#F52B2E] text-[16px] leading-5 font-medium'>Subtotal: <span className='text-[#7E7E7E]'>({items?.length}  Item)</span> </p>
                                <p className='text-[#F52B2E] text-[16px] leading-5 font-bold'>${total}</p>
                            </div>
                            <button onClick={()=>(setModalOpen(true))} className='bg-primary mt-2 text-white rounded-lg h-[48px] w-full font-medium text-[14px] leading-6'>CONFIRM MEALS</button>
                        </div>
            </div>

            <Modal
                width={1000}
                open={modalOpen}
                setOpen={setModalOpen}
                title='Confirm Payment' 
                body={body}
            />
        </>

    )
}

export default Cart