import React from 'react';
import logo from '../../public/whatever.png'
import { SidebarTrigger } from './ui/sidebar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronRight, GitCompareArrows, Heart, ShoppingBag } from 'lucide-react';

const Nav = () => {
    return (
       <div className='flex items-center bg-[#a96bdf5f] justify-between py-1.5' >
        <div className='md:pl-3 md:pt-2 '>
            <div className='flex md:hidden'>
            <SidebarTrigger className="-ml-0" />
            </div>
           <img src={logo} alt="whatever logo" className=' h-8 md:h-10'/> 
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 relative">
            <Input type="text" placeholder="Search anything..." className="outline-0 border-gray-400 " />
            <Button className="absolute right-1 bg-[#5782dfe4]"  variant="" type="submit"><ChevronRight /></Button>
        </div>
        <div className='hidden md:flex items-center gap-3 pr-3 text-[#5782dff6]'>
            <Heart />
            <GitCompareArrows />
            <ShoppingBag />
        </div>
       </div >
    );
};

export default Nav;