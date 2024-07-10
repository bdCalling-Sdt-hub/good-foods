import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Logo from "@/assets/logo.png";

const Navbar = () => {
    const item = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Our Menus",
            path: "/menu"
        },
        {
            label: "Meal Plan",
            path: "/meal"
        },
        {
            label: "Catering",
            path: "/catering"
        },
        {
            label: "How it works",
            path: "/workflow"
        },
        {
            label: "Testimonials",
            path: "/testimonial"
        },
        {
            label: "FAQ",
            path: "/faq"
        },
    ]
    return (
        <div className='container flex items-center justify-between border h-20'>
            <div>
                <Image alt='Logo' src={Logo} width={70} height={70} />
            </div>
            <div className="hidden  lg:flex items-center">
                {
                    item.map((menu, index) => {
                        return(
                            <Link 
                                key={index} 
                                className={`
                                    h-[21px]
                                    font-normal text-[16px] leading-6 
                                    text-[#555656] 
                                    border-[#D9D9D9] 
                                    ${index === 0 ? "pr-[19px]" : "px-[19px]"}
                                    ${index === item.length - 1 ? "border-none" : "border-r-[1px] "}
                                `} 
                                href={`${menu.path}`}
                            >
                                {menu.label}
                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex items-center gap-6'>
                <Link 
                    href={"/login"}
                    className='font-normal w-[104px] h-10 rounded-lg border border-primary text-primary flex items-center justify-center text-[16px] leading-6'
                >
                    Log in
                </Link>

                <Link 
                    href={"/register"} 
                    className='font-normal w-[104px] h-10 rounded-lg bg-primary text-white flex items-center justify-center text-[16px] leading-6'
                >
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Navbar