"use client"
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'

interface IPasswordErrorsProps {
    newPassError?: string;
    conPassError?: string;
}

const ChangePassword = ()=> {
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const [form] = Form.useForm();

    // password validation function
    const validatePasswordChange = (values:any) => {
        let errors: IPasswordErrorsProps = {};
    
        if (values?.currentPassword === values.newPassword) {
            errors.newPassError = "The New password is similar to the old Password";
            setNewPassError(errors.newPassError);
        } else {
            setNewPassError("");
        }
    
        if (values?.newPassword !== values.confirmPassword) {
            errors.conPassError = "New Password and Confirm Password Don't Match";
            setConPassError(errors.conPassError);
        } else {
            setConPassError("");
        }
    
        return errors;
    };

    // submit function for change password
    const handleSubmit=(values:any)=>{
        let errors = validatePasswordChange(values);
        if (Object.keys(errors).length === 0) {}
    };

    return (
        <div className='max-w-[481px] mx-auto'>
            <Form
                layout='vertical'
                onFinish={handleSubmit}
                form={form}
            >
                <Form.Item
                    name="current_password"
                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Current Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Current Password!"
                        }
                    ]}
                >
                    <Input.Password
                        style={{
                            width: "100%",
                            height: "42px",
                            border: "1px solid #DCDDDE",
                            borderRadius: "8px",
                            color: "black",
                            outline: "none",

                        }}
                        type="text"
                        placeholder="Enter Current Password"
                    />
                </Form.Item>


                <Form.Item
                    name="new_password"
                    rules={[
                        {
                            required: true,
                            message: "Please Enter New Password!"
                        }
                    ]}
                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">New Password</p>}
                >
                    <Input.Password
                        style={{
                            width: "100%",
                            height: "42px",
                            border: "1px solid #DCDDDE",
                            borderRadius: "8px",
                            color: "black",
                            outline: "none",
                        }}
                        placeholder="Enter New Password"
                    />
                </Form.Item>

                <Form.Item
                    label={<p className="text-[#415D71] text-sm leading-5 poppins-semibold">Confirm Password</p>}
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Confirm Password!"
                        }
                    ]}
                >
                    <Input.Password
                        style={{
                            width: "100%",
                            height: "42px",
                            border: "1px solid #DCDDDE",
                            borderRadius: "8px",
                            color: "black",
                            outline: "none"
                        }}
                        type="text"
                        placeholder="Enter Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                            width: 197,
                            height: 48,
                            color: "#FCFCFC",
                            background: "#6EA963"
                        }}
                    >
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ChangePassword