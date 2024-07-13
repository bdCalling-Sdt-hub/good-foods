"use client"
import React from 'react'
import Heading from '../shared/Heading';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Image from 'next/image';
import FoodBanner from "@/assets/food-banner3.png";

const Banner = () => {

    const ArrowLeft = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="prev absolute top-[50%] -left-[67px] bg-[#FFFFFF] bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center"
            >
                <BiChevronLeft size={24} color='#EEEEEE' className='mx-auto ' />
            </button>
        );
    };

    const ArrowRight = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="next bg-[#FFFFFF] bg-opacity-[30%] w-9 h-9 rounded-full flex items-center justify-center absolute top-[50%] -right-[67px]"
            >
                <BiChevronRight size={24} color='#EEEEEE' className='mx-auto' />
            </button>
        );
    };

    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        autoplaySpeed: 2000
    };

    return (
        <div
            style={{
                width: "100%",
                height: "700px",
                backgroundImage: `url('/assets/banner2.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "container",
            }}
            className='flex items-center justify-between'
        >
            <div>
                <Heading name='Keep track of' style='font-bold text-[80px] leading-[100px] text-[#1A1A1A]' />
                <Heading name='Fitness Goal' style='font-bold text-[80px] leading-[100px] text-primary' />
                <Heading name='Order on Simply Good Food' style='font-medium text-[32px] leading-[20px] text-[#1A1A1A] mb-10' />
                <Link href={"/meal"} >
                    <button className='bg-secondary text-white flex items-center justify-center gap-1 w-[141px] h-[48px] rounded-lg'>
                        Meal Plan <MdOutlineArrowOutward color='white' size={22}/>
                    </button>
                </Link>
            </div>
            <div
                style={{
                    backgroundImage: `url('/assets/circle.png')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "container"
                }}
                className='w-[556px] h-[575px] flex items-center justify-center overflow-hidden banner-foods'
            >
                <div className="slider relative" >
                    <Slider {...settings}>
                        {
                            [...Array(3)].map((item, index) => (
                                <div key={index}>
                                    <Image
                                        src={FoodBanner}
                                        width={400}
                                        height={400}
                                        alt='food'
                                        className=' mx-auto rounded-full'
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Banner