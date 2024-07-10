
import React from 'react';
import banner from "@/assets/Rectangle 1290.png";

const AuthLayout  = ({children}: {children : React.ReactNode}) => {
    return (
        <div 
            className='flex items-center justify-end'
            style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;