import React from 'react';
import { Modal as AntModal } from "antd";

interface IModalProps{
    title: string,
    open: boolean;
    width?: number;
    setOpen:( open: boolean )=> void;
    body: React.ReactElement;
}

const Modal:React.FC<IModalProps> = ({title, open, body, width, setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <AntModal
            centered
            title={title}
            footer={false}
            open={open}
            onCancel={handleClose}
            width={width || 500}
        >
            <div>
                {body}
            </div>
        </AntModal>
    )
}

export default Modal