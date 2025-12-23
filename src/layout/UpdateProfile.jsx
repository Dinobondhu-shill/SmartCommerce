import Nav from '@/components/Nav';
import { useAuth } from '@/hooks/useAuth';
import Loader from '@/Loader/Loader';
import Page from '@/pages/Dashboard/Pages/Page';
import ScrollToTop from '@/pages/Utilites/ScrollToTop';
import React from 'react';

const UpdateProfile = () => {

    const {user, isLoading} = useAuth();


    if(isLoading) return <Loader />; 
    return (
        <div>
                 <ScrollToTop /> 
             <Nav />
             <Page />
        </div>
    );
};

export default UpdateProfile;