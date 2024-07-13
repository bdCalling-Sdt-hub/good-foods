"use client"
import { Button, Form, Input } from 'antd';
import React from 'react';

interface IEditProfileProps{
    image: any;
    setImage: ( image : null )=> void;
}

const EditProfile: React.FC<IEditProfileProps> = ({image, setImage}) => {
    const [form] = Form.useForm();

    const handleSubmit=(values:any)=>{
        setImage(null)
    }

    return (
        <Form
            onFinish={handleSubmit}
            layout="vertical"
            form={form}
            className='max-w-[481px] mx-auto'
        >
            <Form.Item
                name="fullName"
                label={<p className="text-[#636363] text-[16px] leading-6 font-normal">User Name</p>}
            >
                <Input
                    style={{
                        width: "100%",
                        height: 48,
                        background: "transparent",
                        border: "1px solid #D6D6D6",
                        borderRadius: "8px",
                        color: "#818181",
                        outline: "none",
                        boxShadow: "none"
                    }}
                    className='text-[16px] leading-5 placeholder:text-[#818181]'
                    placeholder="Enter User Name"
                />
            </Form.Item>

            <Form.Item
                name="email"
                label={<p className="text-[#636363] text-[16px] leading-6 font-normal">Email</p>}
            >
                <Input
                    style={{
                        width: "100%",
                        height: 48,
                        background: "transparent",
                        border: "1px solid #D6D6D6",
                        borderRadius: "8px",
                        color: "#818181",
                        outline: "none",
                        boxShadow: "none"
                    }}
                    className='text-[16px] leading-5 placeholder:text-[#818181]'
                    placeholder='Enter Your Email'
                />
            </Form.Item>

            <Form.Item
                name="contactNo"
                label={<p className="text-[#636363] text-[16px] leading-6 font-normal">Contact Number</p>}
            >
                <Input
                    style={{
                        width: "100%",
                        height: 48,
                        background: "transparent",
                        border: "1px solid #D6D6D6",
                        borderRadius: "8px",
                        color: "#818181",
                        outline: "none",
                        boxShadow: "none"
                    }}
                    className='text-[16px] leading-5 placeholder:text-[#818181]'
                    placeholder="Enter Contact Number"
                />
            </Form.Item>

            <Form.Item
                name="address"
                label={<p className="text-[#636363] text-[16px] leading-6 font-normal">Address</p>}
            >
                <Input
                    style={{
                        width: "100%",
                        height: 48,
                        background: "transparent",
                        border: "1px solid #D6D6D6",
                        borderRadius: "8px",
                        color: "#818181",
                        outline: "none",
                        boxShadow: "none"
                    }}
                    className='text-[16px] leading-5 placeholder:text-[#818181]'
                    placeholder="Enter Address"
                />
            </Form.Item>

            <Form.Item
                style={{ marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Button
                    htmlType="submit"
                    style={{
                        width: 197,
                        height: 48,
                        color: "#FCFCFC",
                        background: "#277e16"
                    }}
                >
                    Save & Changes
                </Button>
            </Form.Item>
        </Form>
    )
}

export default EditProfile