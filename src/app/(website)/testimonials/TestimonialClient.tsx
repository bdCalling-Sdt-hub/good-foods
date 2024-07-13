"use client";
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import React from 'react';
import review from "@/assets/review.png";

const TestimonialClient = () => {
    return (
        <div className='container mt-[120px]'>
            <Heading name='Testimonials' style='font-bold text-[40px] leading-[46px] text-[#333333] text-center mb-4' />

            <div className='grid grid-cols-1 gap-10'>
                {
                    [...Array(4)]?.map((testimonial, index)=>{
                        return(
                            <div key={index}>
                                <div className={`flex flex-col md:flex-row  ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-10`}>
                                    <div className="w-fit mx-auto">
                                        <Image
                                            alt="Catering"
                                            src={review}
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Heading name='Anjelina' style='font-normal text-[24px] leading-[27px] text-[#333333] mb-4' />
                                        <p className='text-[16px] leading-5 font-normal text-[#FDB64E] my-4'>Student</p>

                                        <p className='text-[16px] leading-5 font-normal text-[#767676]'>
                                            scelerisque convallis. Sed faucibus dui. sit tincidunt eu placerat. eget Ut nisi cursus venenatis tortor. leo. 
                                            faucibus dui diam est. Ut at sed tincidunt eget consectetur non, tincidunt In efficitur. laoreet non felis, faucibus 
                                            Praesent id id diam elementum Donec ex venenatis id porta ex tincidunt dui. sodales. Sed tempor eget Vestibulum Quisque 
                                            luctus dui lacus sed gravida facilisis adipiscing id sed Ut vitae odio gravida In venenatis felis, tempor faucibus amet, 
                                            Nunc sapien vitae ex convallis. tortor. dolor nisi massa amet, urna tincidunt ac eget sed nulla, eu nec malesuada venenatis 
                                            convallis. quam nisl. Donec In sed quis urna. ullamcorper elementum gravida enim. sit nisl. sollicitudin. hendrerit fringilla 
                                            lacus dui. consectetur venenatis placerat. placerat lacus, at viverra 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialClient