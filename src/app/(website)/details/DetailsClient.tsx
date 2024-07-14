import Image from 'next/image'
import React from 'react';
import Details from "@/assets/details.png";
import { FaStar } from 'react-icons/fa6';
import Heading from '@/components/shared/Heading';
import MenuDetails from '@/components/Menu/MenuDetails';
import NewProduct from '@/components/Home/NewProduct';

const DetailsClient = ({mealId}: {mealId : string}) => {
    return (
        <div className='container mt-[100px]'>

            <div className='grid grid-cols-12 gap-5 lg:gap-10 mb-6'>
                <div className="col-span-12 lg:col-span-6 h-full lg:h-[474px] relative order-1 lg:order-1">
                    <Image
                        alt="Catering"
                        src={Details}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className='col-span-12 lg:col-span-6 order-2 lg:order-2'>
                    <Heading name='Heathy Food Name' style='font-bold text-[24px] leading-[36px] text-[#5C5C5C] mb-1' />
                    <div className='flex items-center gap-3 mb-1'>
                        <FaStar className='' color='#FDB64E' size={14} /> <span className='text-[#FDB64E] text-[14px] leading-[18px] font-medium'>4.5/5</span>
                    </div>

                    <div className='flex items-center gap-3 my-3'>
                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Protein 49g</span>
                        <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Carbs 23g</span>
                        <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                        <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Fat 23g</span>
                    </div>

                    <p className='font-semibold text-[24px] leading-5 text-[#735571] mt-1'>$100</p>

                    <p className='font-medium text-[16px] leading-[20px] text-[#7E7E7E] my-4'>
                        Crispy baked panko breaded chicken topped with a savory general tsos sauce, 
                        served on a bed of brown rice alongside a cup of broccoli.
                    </p>

                    <button className='border-none font-medium text-[14px] leading-6 bg-primary text-white w-full h-10 rounded-lg'>Add to cart</button>
                    <p className='font-medium text-[16px] leading-[24px] text-[#656565] mt-4'>Ingredients</p>
                    <p className='font-normal text-[16px] leading-[20px] text-[#7E7E7E] my-2'>
                        Crispy baked panko breaded chicken topped with a savory general tsos sauce, 
                        served on a bed of brown rice alongside a cup of broccoli.
                    </p>

                    <br />
                    <p className='font-medium text-[16px] leading-[24px] text-[#656565]'>Instructions</p>
                    <p className='font-normal text-[16px] leading-[20px] text-[#7E7E7E] my-2'>
                        Crispy baked panko breaded chicken topped with a savory general tsos sauce, 
                        served on a bed of brown rice alongside a cup of broccoli.
                    </p>
                </div>
            </div>

            <div>
                <MenuDetails/>
            </div>
        </div>
    )
}

export default DetailsClient