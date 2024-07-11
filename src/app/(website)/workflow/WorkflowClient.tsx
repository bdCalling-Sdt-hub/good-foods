"use client";
import Heading from '@/components/shared/Heading';
import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import health from "@/assets/helth.png";
import protein from "@/assets/protein.png";
import variety from "@/assets/varity.png";
import work from "@/assets/work.png";
import weekly from "@/assets/weekly.png";
import cancel from "@/assets/cancel.png";
import pause from "@/assets/pause.png";
import play from "@/assets/play.png";
import Image from 'next/image';
type ContentRef = HTMLDivElement | null;


const WorkflowClient = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<ContentRef[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]!.style.maxHeight = `${contentRefs.current[openIndex]!.scrollHeight}px`;
        }
        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);

    return (
        <div className='container mt-[120px]'>

            {/* work flow heading */}
            <div className='grid grid-cols-12 gap-20'>
                <div className='col-span-6'>
                    <Heading name='How it Works' style='font-bold text-[32px] leading-[48px] text-[#000000] mb-6' />
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            [...Array(5)].map((_item: any, index) => {
                                return (
                                    <div onClick={() => toggleAccordion(index)} key={_item?._id}
                                        ref={(el) => {
                                            if (el) {
                                            contentRefs.current[index] = el;
                                            }
                                        }}
                                        className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out p-7 pt-2 rounded-[4px] border border-secondary   border-opacity-[12%] cursor-pointer relative'
                                        style={{
                                            maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                        }}
                                    >
                                        <MdKeyboardArrowRight color='#FDB64E' className={`bg-[#ECECEC] absolute top-[6px] right-2 border rounded-full text-2xl transition-all ${openIndex === index ? 'rotate-90' : ''} `} />
                                        <p className='text-[16px] leading-6 font-medium text-[#3E3E3E]'>
                                            {
                                                "What are the foods like Steel Yat? How does the mail plan work?"
                                            }
                                        </p>

                                        <div className='text-[16px] leading-6 font-normal text-secondary mt-2'>
                                            {
                                                "Lorem30"
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-6 h-[426px] relative">
                    <Image
                        alt="Catering"
                        src={work}
                        layout="fill"
                        objectFit="container"
                    />
                </div>
            </div>

            {/* work flow body */}
            <div className='bg-[#F1F1F1] rounded-xl p-10 my-20'>
                <Heading name='How it Works' style='font-bold text-[32px] leading-[48px] text-[#000000] mb-3' />
                <p className='font-normal text-[16px] leading-[24px] text-[#656565]'>Subscribe for free shipping. Just pick your meals, tell us how often you want them, <br /> and then we&apos;ll take care of the rest.</p>

                <div className='grid grid-cols-2 gap-10 w-[928px] mx-auto mt-10'>
                    <div className='flex gap-6'>
                        <Image
                            src={weekly}
                            alt='icon'
                            width={64}
                            height={64}
                            objectFit='cover'
                        />
                        <div>
                            <Heading name='Weekly Delivery' style='font-semibold text-[16px] leading-[21px] text-[#000000] mb-2' />
                            <p className='font-normal text-[14px] leading-[21px] text-[#656565]'>
                                Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we&apos;ll take care of the rest.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <Image
                            src={cancel}
                            alt='icon'
                            width={64}
                            height={64}
                            objectFit='cover'
                        />
                        <div>
                            <Heading name='Cancel Anytime' style='font-semibold text-[16px] leading-[21px] text-[#000000] mb-2' />
                            <p className='font-normal text-[14px] leading-[21px] text-[#656565]'>
                                Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we&apos;ll take care of the rest.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <Image
                            src={pause}
                            alt='icon'
                            width={64}
                            height={64}
                            objectFit='cover'
                        />
                        <div>
                            <Heading name='Pause Anytime' style='font-semibold text-[16px] leading-[21px] text-[#000000] mb-2' />
                            <p className='font-normal text-[14px] leading-[21px] text-[#656565]'>
                                Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we&apos;ll take care of the rest.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <Image
                            src={play}
                            alt='icon'
                            width={64}
                            height={64}
                            objectFit='cover'
                        />
                        <div>
                            <Heading name='Pause Anytime' style='font-semibold text-[16px] leading-[21px] text-[#000000] mb-2' />
                            <p className='font-normal text-[14px] leading-[21px] text-[#656565]'>
                                Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we&apos;ll take care of the rest.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* aminities */}
            <div>
                <Heading name='Why Simply Good Food ' style='font-bold text-[40px] leading-[46px] text-[#333333] text-center mb-10' />
                <div className='grid grid-cols-3 gap-10'>
                    <div>
                        <Image
                            src={health}
                            alt='icon'
                            width={80}
                            height={80}
                            className='mx-auto'
                        />
                        <Heading name='Health awareness' style='font-medium text-center text-[24px] leading-[28px] text-[#3E3E3E] my-4' />
                        <p className='font-normal text-[14px] leading-[20px] text-[#656565] text-center'>
                            Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we&apos;ll take care of the rest.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={protein}
                            alt='icon'
                            width={80}
                            height={80}
                            className='mx-auto'
                        />
                        <Heading name='More Protein' style='font-medium text-center text-[24px] leading-[28px] text-[#3E3E3E] my-4' />
                        <p className='font-normal text-[14px] leading-[20px] text-[#656565] text-center'>
                            Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={variety}
                            alt='icon'
                            width={80}
                            height={80}
                            className='mx-auto'
                        />
                        <Heading name='Unending Variety' style='font-medium text-center text-[24px] leading-[28px] text-[#3E3E3E] my-4' />
                        <p className='font-normal text-[14px] leading-[20px] text-[#656565] text-center'>
                            Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkflowClient