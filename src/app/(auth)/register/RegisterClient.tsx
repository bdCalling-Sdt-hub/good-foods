"use client"
import Heading from '@/components/shared/Heading';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

const RegisterClient = () => {
    const [form] = Form.useForm();
    const handleSubmit=(values:any)=>{
        console.log(values)
    }
    form.setFieldsValue(undefined)
    
    return (
        <div className='bg-[#FEFEFE] bg-opacity-[90%] rounded-[16px] p-[50px]'>
            <Heading name='Sign up' style='font-semibold text-[24px] leading-[32px] text-[#333333] text-center mb-6' />
            <p className='font-normal text-[14px] leading-[14px] text-[#5C5C5C] text-center mb-6' >Please Enter Your Personal Data</p>
            <Form onFinish={handleSubmit} form={form} layout='vertical'>
                <Form.Item
                    name="name"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>User Name</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Your Name!"
                        }
                    ]}
                >
                    <Input
                        placeholder='Enter Your Name'
                        style={{
                            width: "100%",
                            height: 50,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Email</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Email!"
                        }
                    ]}
                >
                    <Input
                        placeholder='Enter Email'
                        style={{
                            width: "100%",
                            height: 50,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="contact_no"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Contact No</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Contact No!"
                        }
                    ]}
                >
                    <Input
                        placeholder='Enter Contact No'
                        style={{
                            width: "100%",
                            height: 50,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                        className='poppins placeholder:text-[#818181] placeholder:text-[14px] placeholder:font-normal placeholder:leading-6'
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Password"
                        }
                    ]}
                >
                    <Input.Password
                        placeholder='Enter Password'
                        className='placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6'
                        style={{
                            width: "100%",
                            height: 50,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<p className='font-medium text-[16px] leading-6 text-[#636363]'>Confirm Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Confirm Password"
                        }
                    ]}
                >
                    <Input.Password
                        placeholder='Enter Confirm Password'
                        className='placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6'
                        style={{
                            width: "100%",
                            height: 50,
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E0E0E0",
                            borderRadius: 24,
                            background: "#FEFEFE"
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <Button 
                        htmlType='submit'
                        style={{
                            width: 150,
                            height: 50,
                            background: "#277E16",
                            color: "#ffffff"
                        }}
                    >
                        Log in
                    </Button>
                </Form.Item>

                <p className="text-[#636363] text-[16px] leading-[21px] font-normal text-center">
                    Have any account? 
                    <Link className='ml-2' href={"/login"}>
                        <span className='text-[#FDB64E] cursor-pointer font-semibold'>Login</span>
                    </Link> 
                </p>
            </Form>
        </div>
    )
}

export default RegisterClient