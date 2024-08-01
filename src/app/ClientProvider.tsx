'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@/provider/User';

const ClientProvider = ({ children }: {children: ReactNode}) => {
    return (
        <Provider store={store}>
            <UserProvider>
                {children}
            </UserProvider>
            <Toaster />
        </Provider>
    );
};
  
export default ClientProvider;