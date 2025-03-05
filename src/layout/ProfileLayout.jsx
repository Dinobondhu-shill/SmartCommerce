import Nav from '@/components/Nav';
import Footer from '@/pages/Homepage/Footer';
import ProfileSidebar from '@/pages/Profile/ProfileSidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div>
             <Nav />
             <div className='grid grid-cols-4 lg:px-24'>
                <div className='col-span-1'>
                    <ProfileSidebar />
                </div>
                <div className='col-span-3'>
                <Outlet />
                </div>
             </div>
            
             <Footer />
        </div>
    );
};

export default ProfileLayout;