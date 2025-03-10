import Nav from '@/components/Nav';
import Footer from '@/pages/Homepage/Footer';
import ProfileSidebar from '@/pages/Profile/ProfileSidebar';
import ScrollToTop from '@/pages/Utilites/ScrollToTop';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div>
            <ScrollToTop /> 
             <Nav />

             <div className='md:grid grid-cols-4 lg:px-24'>
                <div className='md:col-span-1'>
                    <ProfileSidebar />
                </div>
                <div className='w-full md:col-span-3 mb-10'>
                <Outlet />
                </div>
             </div>
        </div>
    );
};

export default ProfileLayout;