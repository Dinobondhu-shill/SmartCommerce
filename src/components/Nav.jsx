import React from 'react';
import logo from '../../public/whatever.png'
import { SidebarTrigger } from './ui/sidebar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronRight, GitCompareArrows, Heart, LogIn, Search, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       <div className='flex border-y-2 border-purple-200 rounded-tl-3xl rounded-br-3xl  items-center w-full bg-white justify-between py-1.5' >
        <div className='md:pl-3 md:pt-2 flex gap-3'>
            <div className='block text-xl md:hidden'>
            <SidebarTrigger className="-ml-0" />
            </div>
           <Link to={'/'}> <img src={logo} alt="whatever logo" className=' h-8 md:h-8'/> </Link>
        </div>
        <div className="hidden md:flex w-full max-w-sm items-center space-x-2 relative">
            <Input type="text" placeholder="Search anything..." className="outline-0 border-gray-400 " />
            <Button className="absolute right-1 bg-[#d16de3] hover:bg-[#9e6bba]"  variant="" type="submit">
                <Search  className='right-4 top-1.5 text-[8px]'/>
                </Button>
        </div>
        <div className="hidden md:flex items-center gap-3 pr-3 text-[#b11db7]">
  <Link to={'wishlist'} className="group relative">
    <div className="p-2 rounded-full transition-all duration-300 group-hover:bg-[#b11db7] group-hover:text-white">
      <Heart className="w-5 h-5" />
    </div>
  </Link>
  <div className="p-2 rounded-full transition-all duration-300 hover:bg-[#b11db7] hover:text-white">
    <GitCompareArrows className="w-5 h-5" />
  </div>
  <div className="p-2 rounded-full transition-all duration-300 hover:bg-[#b11db7] hover:text-white">
    <ShoppingBag className="w-5 h-5" />
  </div>
</div>

       <div className='flex gap-3 pr-3 md:hidden relative'>
       <Input type="text" placeholder="Search anything..." className="max-w-44 border-gray-400 " />
       <Search  className='absolute right-4 top-1.5 text-[8px]'/>
       </div>
       <MobileMenu />
       </div >
    );
};

export default Nav;