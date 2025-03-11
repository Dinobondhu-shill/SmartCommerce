import React from 'react';
import logo from '../../public/whatever.png'
import { SidebarTrigger } from './ui/sidebar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronRight, GitCompareArrows, Heart, LogIn, Search, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
       <div className='flex sticky top-0 z-[500] bg-gradient-to-t from-[#a573d3] md:to-transparent to-[#b171ed] border-purple-200 rounded-b-3xl rounded-tl-0  md:rounded-bl-0  items-center w-full  justify-between py-1.5' >
        <div className='md:pl-3 md:pt-2 flex gap-3'>
            <div className='block text-xl'>
            <SidebarTrigger className="-ml-0" />
            </div>
           <Link to={'/'}> <img src={logo} alt="whatever logo" className=' h-8 md:h-8'/> </Link>
        </div>
        <Link to="/search" className="hidden md:flex w-full max-w-sm items-center space-x-2 relative">
            <Input type="text" placeholder="Search anything..." className=" outline-0 border-gray-400 " />
            <Button className="absolute right-1 bg-[#d16de3] hover:bg-[#9e6bba]"  variant="" type="submit">
                <Search  className='right-4 top-1.5 text-[8px]'/>
                </Button>
        </Link>
        <div className="hidden md:flex items-center gap-3 pr-3 text-white">
  <NavLink 
    to={'/wishlist'} 
    className={({ isActive }) => 
        `group relative p-2 rounded-full transition-all duration-300 bg-[#b11db7]   ${isActive ? 'bg-white text-[#b11db7] hover:text-[#b11db7]' : ''}`
      }
  >
    <Heart className="w-5 h-5" />
  </NavLink>
  <NavLink 
    to={'/compare'} 
    className={({ isActive }) => 
       `group relative p-2 rounded-full transition-all duration-300 bg-[#b11db7] ${isActive ? 'bg-white text-[#b11db7]' : ''}`
      }
  >
    <GitCompareArrows className="w-5 h-5" />
  </NavLink>
  <NavLink 
    to={'/cart'} 
    className={({ isActive }) => 
         `group relative p-2 rounded-full transition-all duration-300 bg-[#b11db7]   ${isActive ? 'bg-white text-[#b11db7]' : ''}`
      }
  >
    <ShoppingBag className="w-5 h-5" />
  </NavLink>

</div>
     <div className='flex items-center md:hidden gap-3'>
     <Link to="/wishlist">
     <Heart />
     </Link>
       <Link to='/search' className='flex gap-3 pr-3  relative'>
       <Search  className=' right-4 text-[8px]'/>
       </Link>
     </div>
       <MobileMenu />
       </div >
    );
};

export default Nav;