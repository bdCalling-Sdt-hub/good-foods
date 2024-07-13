"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Logo from "@/assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { Menu } from 'lucide-react';
import { Drawer } from 'antd';
import { X } from 'lucide-react';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [toggling, setToggling] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)

    
    const dropdownRef = useRef<HTMLDivElement>(null);
    const item = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Our Menus",
            path: "/menus"
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
            path: "/testimonials"
        },
        {
            label: "FAQ",
            path: "/faq"
        },
    ]

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                if (!toggling) {
                    setOpen(false);
                }
                setToggling(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggling]);
    
    return (
        <div className='fixed z-10 top-0 w-full left-0 bg-white border-b-[1px] border-[#00000] border-opacity-[40%]'>
            <div className='container relative  flex items-center justify-between h-20'>
                <Link href={"/"}>
                    <Image alt='Logo' src={Logo} width={70} height={70} />
                </Link>

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
                        className=' font-normal w-[104px] h-10 rounded-lg border border-primary text-primary hidden  lg:flex items-center justify-center text-[16px] leading-6'
                    >
                        Log in
                    </Link>

                    <Link 
                        href={"/register"} 
                        className='font-normal w-[104px] h-10 rounded-lg bg-primary text-white hidden  lg:flex items-center justify-center text-[16px] leading-6'
                    >
                        Sign up
                    </Link>

                    <Menu onClick={()=>setOpenDrawer(true)} className='block cursor-pointer lg:hidden' size={40} color='#277e16' />

                    {/* user menu */}
                    <div 
                        onClick={(e) => { 
                            e.stopPropagation(); 
                            setToggling(true);
                            setOpen(prev => !prev); 
                        }} 
                        className='w-10 bg-[#F1F1F1] h-10 cursor-pointer rounded-full flex items-center justify-center'
                    >
                        <AiOutlineUser size={24} color='#277E16'/>
                    </div>

                    {
                        open &&
                    
                        <div 
                            // onClick={(e) => e.stopPropagation()}
                            ref={dropdownRef}
                            style={{
                                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            }}
                            className='absolute bg-white top-16 right-0 rounded w-[150px]'
                        >
                            <ul className='grid grid-cols-1 gap-1'>
                                <li className='text-[#656565]  cursor-pointer transition-all duration-100 text-[14px] rounded-t-sm text-center  hover:bg-primary hover:text-white leading-6 font-normal py-2'>FeedBack</li>
                                <Link href={"/profile"} >
                                    <li onClick={()=>setOpen(false)} className='text-[#656565] transition-all duration-100 text-center hover:bg-primary hover:text-white text-[14px] leading-6 font-normal py-2'>Profile</li>
                                </Link>
                                <Link  href={"/transactions"}>
                                    <li onClick={()=>setOpen(false)} className='text-[#656565] transition-all duration-100 text-center hover:bg-primary hover:text-white text-[14px] leading-6 font-normal py-2'>Dashboard</li>
                                </Link>
                                <li onClick={()=>setOpen(false)} className='text-[#656565] cursor-pointer transition-all duration-100 text-center rounded-b-sm hover:bg-primary hover:text-white  text-[14px] leading-6 font-normal py-2'>Log Out</li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
            

            <Drawer
                title={<div className='flex items-center justify-between'>
                    <Link href={"/"}>
                        <Image alt='Logo' src={Logo} width={40} height={40} />
                    </Link>
                    <X onClick={()=>setOpenDrawer(false)} color='black' className='cursor-pointer' size={30} />
                </div>}
                placement={"left"}
                closable={false}
                onClose={()=>setOpenDrawer(false)}
                open={openDrawer}
                key={"left"}
                
            >
                <div className="flex items-start justify-center flex-col gap-6">
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
                                        hover:text-primary
                                    `} 
                                    href={`${menu.path}`}
                                >
                                    {menu.label}
                                </Link>
                            )
                        })
                    }
                </div>
            </Drawer>

        </div>
    )
}

export default Navbar