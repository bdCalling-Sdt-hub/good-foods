"use client";
import React from 'react'
import Heading from '../shared/Heading'
import NewProduct from '../Home/NewProduct'
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import Product from "@/assets/foods.png";

const MenuDetails = () => {
    const ArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="prev absolute z-[1] top-[50%] left-0 bg-black bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center"
        >
            <BiChevronLeft size={24} color='#EEEEEE' className='mx-auto ' />
        </button>
    );
    
    const ArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
        <button
            {...props}
            className="next bg-black bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center absolute top-[50%] right-0"
        >
            <BiChevronRight size={24} color='#EEEEEE' className='mx-auto' />
        </button>
    );

    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        dots: false,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Heading name='Related Products' style='font-bold text-[32px] sm::text-[40px] leading-[38px] sm:leading-[46px] text-[#3E3E3E] mb-4' />
            
            <div>
                <Slider {...settings}>
                    {
                        [...Array(10)].map((item, index)=>{
                            return(
                                <div key={index} className='bg-[#F7F7F7] relative p-2 rounded-lg'>
                                    <Image
                                        alt='Product'
                                        src={Product}
                                        style={{objectFit: "contain"}}
                                    />

                                    {/* meal description */}
                                    <div>
                                        <div className='flex items-center gap-3 mt-4 mb-1'>
                                            <FaStar className='' color='#FDB64E' size={14} /> <span className='text-[#FDB64E] text-[14px] leading-[18px] font-medium'>4.5/5</span>
                                        </div>
                                        <p className='font-bold text-[18px] leading-7 text-[#5C5C5C]'>Heathy Food Name</p>
                                        <p className='font-semibold text-[16px] leading-5 text-[#735571] my-1'>$100</p>
                                        <button className='border-none font-medium text-[14px] leading-6 bg-primary text-white w-full h-10 rounded-lg'>Add to cart</button>

                                        <div className='flex items-center justify-center gap-3 my-3'>
                                            <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Protein 49g</span>
                                            <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                            <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Carbs 23g</span>
                                            <span className='font-medium text-[14px] leading-[18px] text-[#000000]'>/</span>
                                            <span className='font-medium text-[14px] leading-[18px] text-[#BF757B]'>Fat 23g</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default MenuDetails