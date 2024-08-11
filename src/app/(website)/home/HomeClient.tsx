"use client"
import React, { useState } from 'react'
import FaqClient from '../faq/FaqClient'
import SimpleFood from '@/components/SimpleFood'
import FoodBanner from '@/components/Home/FoodBanner'
import Banner from '@/components/Home/Banner'
import NewProduct from '@/components/Home/NewProduct'
import { FaCartPlus } from 'react-icons/fa6'
import { Badge} from 'antd';
import { useCart } from '@/provider/Cart'
import Cart from '@/components/Cart'

const HomeClient = () => {
    const [open, setOpen] = useState(false);
    const { state: { items } } = useCart();

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
                <Cart setOpen={setOpen} open={open} />
            }

            <div onClick={()=>setOpen(true)} className='bg-primary cursor-pointer fixed right-6 top-1/2 w-[64px] h-[64px] rounded-full flex items-center justify-center'>
                <Badge count={items?.length} color='#735571' style={{border: "none"}}>
                    <FaCartPlus color='#F4F4F4' size={24} />
                </Badge>
            </div>
            </div>
        </div>
    )
}

export default HomeClient