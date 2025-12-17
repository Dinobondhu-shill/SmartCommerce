import React from "react";
import logo from "../../public/whatever.png";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  ChevronRight,
  GitCompareArrows,
  Heart,
  LogIn,
  Search,
  ShoppingBag,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import { NavLink, Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Nav = () => {
  return (
    <div className="flex sticky top-0 z-[500]  bg-gradient-to-bl from-fuchsia-300 via-purple-400 to-purple-600 border-purple-400 rounded-tl-0  md:rounded-bl-0  items-center w-full  justify-between py-1.5">
      <div className="md:pl-3 md:pt-2 flex gap-3">
        <div className="block text-xl bg-white rounded-full p-1">
          <SidebarTrigger className="-ml-0" />
        </div>
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="whatever logo" className=" h-8 md:h-8" />{" "}
        </Link>
      </div>
      <Link
        to="/search"
        className="hidden md:flex w-full max-w-sm items-center space-x-2 relative"
      >
        <Input
          type="text"
          placeholder="Search anything..."
          className=" outline-0 border-gray-400 "
        />
        <Button
          className="absolute right-1 bg-[#d16de3] hover:bg-[#9e6bba]"
          variant=""
          type="submit"
        >
          <Search className="right-4 top-1.5 text-[8px]" />
        </Button>
      </Link>
      <div className="hidden md:flex items-center gap-3 pr-3 text-white">
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) =>
            `p-2 rounded-full transition-all duration-300 bg-[#b11db7] flex justify-center items-center ${
              isActive ? "bg-white text-[#b11db7] hover:text-[#b11db7]" : ""
            }`
          }
        >
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Heart className="w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Wishlist</p>
            </TooltipContent>
          </Tooltip>
        </NavLink>
        <NavLink
          to={"/compare"}
          className={({ isActive }) =>
            `group relative p-2 rounded-full transition-all duration-300 bg-[#b11db7] flex justify-center items-center ${
              isActive ? "bg-white text-[#b11db7]" : ""
            }`
          }
        >
          <Tooltip>
            <TooltipTrigger>
              <GitCompareArrows className="w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Compare</p>
            </TooltipContent>
          </Tooltip>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            `group relative p-2 rounded-full transition-all duration-300 bg-[#b11db7] flex justify-center items-center  ${
              isActive ? "bg-white text-[#b11db7]" : ""
            }`
          }
        >
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <ShoppingBag className="w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>
        </NavLink>
      </div>
      <div className="flex items-center md:hidden gap-3">
        <Tooltip>
          <TooltipTrigger>
            <Link to="/wishlist">
              <Heart />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Link to="/search" className="flex gap-3 pr-3  relative">
          <Search className=" right-4 text-[8px]" />
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Nav;
