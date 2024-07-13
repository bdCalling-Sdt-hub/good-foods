import React from 'react';
import banner from "@/assets/food-banner.png"
import Heading from '../shared/Heading';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

const FoodBanner = () => {
    return (
        <div>
            <div className='grid grid-cols-12 h-[429px] pb-10'>
                <div className=' col-span-6 bg-[#C4C4C4] pr-6 flex items-center justify-start'>
                    <div className='p-6 h-[250px] w-[550px] rounded-r-[100px] bg-[#FDFDFD]'>
                        <Heading name='Make daily meals ' style='font-bold text-[32px] leading-[48px] text-[#000000]' />
                        <Heading name='healthy and moderate' style='font-bold text-[32px] leading-[38px] text-[#000000]' />
                            
                        <p className="my-4 text-[#103509] font-normal text-[16px] leading-6">Ingredients are naturally rich and full of taste.</p>
                        <Link href={"/meal"} >
                            <button className='bg-primary text-white flex items-center justify-center gap-1 w-[141px] h-[48px] rounded-lg'>
                                Meal Plan <MdOutlineArrowOutward/>
                            </button>
                        </Link>

                    </div>
                </div>

                <div className="col-span-6 relative">
                    <Image
                        alt="Catering"
                        src={banner}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default FoodBanner