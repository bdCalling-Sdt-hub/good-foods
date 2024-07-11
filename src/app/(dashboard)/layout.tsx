import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { VscFeedback } from "react-icons/vsc";
import Link from 'next/link';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <div className='bg-white border-b-[1px] border-[#656565] border-opacity-[20%]'>
                <div className='container flex items-center justify-between h-16 py-1'>
                    <Link href={"/"}>
                        <Image alt='Logo' src={Logo} width={40} height={40} />
                    </Link>
                    <div className='w-9 h-9 bg-[#F1F1F1] rounded-full flex items-center justify-center'>
                        <FaRegUser size={20} color='#277E16' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 h-[calc(100vh-65px)]'>
                <div className='col-span-2 h-full pt-6'>
                    <ul className='grid grid-cols-1 gap-3'>
                        <Link href={"/transactions"}>
                            <li className='pl-6 bg-primary text-[#F4F4F4] h-[48px] text-[16px] leading-6 font-normal flex items-center gap-6'><GrTransaction size={24}/> Transactions</li>
                        </Link>
                        <Link href={"/menu"}>
                            <li className='pl-6 bg-primary text-[#F4F4F4] h-[48px] text-[16px] leading-6 font-normal flex items-center gap-6'><RxDashboard size={24}/> Manage Menu</li>
                        </Link>
                        <Link href={"/testimonial"}>
                            <li className='pl-6 bg-primary text-[#F4F4F4] h-[48px] text-[16px] leading-6 font-normal flex items-center gap-6'><VscFeedback size={24}/> Manage Testimonial</li>
                        </Link>
                    </ul>
                </div>

                <div className='col-span-10 bg-[#F6F6F6] p-6'>
                    <div className='h-[calc(100vh-115px)] overflow-y-scroll bg-white rounded-lg'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout