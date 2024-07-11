import Navbar from '@/components/shared/Navbar';
import React from 'react'

const WebsiteLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default WebsiteLayout;