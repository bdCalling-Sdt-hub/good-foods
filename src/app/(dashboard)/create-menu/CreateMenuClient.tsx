"use client";
import Heading from '@/components/shared/Heading'
import { Button, Form, Input, Select } from 'antd'
import Link from 'next/link';
import React from 'react';
import { MdArrowBackIos } from "react-icons/md";

const CreateMenuClient = () => {
    return (
        <div>
            <div className='flex items-center gap-6 my-6 px-6'>
                <Link href={"/menu"} className='flex items-center gap-1 text-[#735571]'>
                    <MdArrowBackIos color='#735571' /> Back
                </Link>
                <Heading name='Add Food menu' style='font-medium text-[18px] leading-[24px] text-[#333333]' />
            </div>

            <Form className='grid grid-cols-12 gap-6 px-6 pb-8' layout='vertical'>
                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-6'
                    name={"menu"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Our Menu</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Select Menu"
                        }
                    ]}
                >
                    <Select
                        style={{
                            height: 42,
                        }}
                    >
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-6'
                    name={"meal"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Meal Plan</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Select Meal"
                        }
                    ]}
                >
                    <Select
                        style={{
                            height: 42,
                        }}
                    >
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                        <Select.Option value="">Meal</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    name={"name"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Name</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Name"
                        }
                    ]}
                >
                    <Input
                        placeholder=''
                        style={{
                            height: 42,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Image</p>}
                    
                >
                    <Input
                        placeholder=''
                        style={{display: "none"}}
                    />
                    <label 
                        htmlFor="" 
                        style={{
                            display: "block",
                            width: "100%",
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6",
                            marginBottom: 0,
                            borderRadius: 8,
                            height: 42
                        }}
                    >

                    </label>
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    name={"price"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Price</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Price"
                        }
                    ]}
                >
                    <Input
                        placeholder='Price...'
                        style={{
                            height: 42,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    name={"protein"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Protein</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Protein"
                        }
                    ]}
                >
                    <Input
                        placeholder='Protein...'
                        style={{
                            height: 42,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    name={"carbon"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Carbons</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Carbon"
                        }
                    ]}
                >
                    <Input
                        placeholder='Carbons'
                        style={{
                            height: 42,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-4'
                    name={"fat"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Fat</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Fat"
                        }
                    ]}
                >
                    <Input
                        placeholder='Fat'
                        style={{
                            height: 42,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-12'
                    name={"details"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Details</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Details"
                        }
                    ]}
                >
                    <Input.TextArea
                        placeholder=''
                        style={{
                            height: 100,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            resize: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-12'
                    name={"ingredients"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Ingredients</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Ingredients"
                        }
                    ]}
                >
                    <Input.TextArea
                        placeholder=''
                        style={{
                            height: 100,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            resize: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    className='col-span-12'
                    name={"instructions"}
                    label={<p className='font-medium text-[14px] leading-5 text-[#636363]'>Instructions</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Instructions"
                        }
                    ]}
                >
                    <Input.TextArea
                        placeholder=''
                        style={{
                            height: 100,
                            background: "transparent",
                            outline: "none",
                            boxShadow: "none",
                            resize: "none",
                            border: "1px solid #D6D6D6"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0, display: "flex", alignItems: "center", justifyContent:"center"}}
                    className='col-span-12'
                >
                    <Button 
                        htmlType='submit'
                        style={{
                            background: "#277E16",
                            color: "white",
                            border: "none",
                            height: 42
                        }}
                    >
                        Submit Menu
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default CreateMenuClient