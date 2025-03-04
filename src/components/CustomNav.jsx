import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <div className="flex justify-between items-center w-full mr-2">
      <h3 className="text-[12px]">Free 3 day delirery and free returns within the US <Link to={"/register"} className="text-[#4985ec] text-[14px] font-medium">Register</Link> or <Link to={"/register"} className="text-[#4985ec] text-[14px] font-medium" >Login</Link> </h3>
      {/* <Link className="font-elegent text-3xl italic text-[#8833c1] font-medium">Whatever</Link> */}
      {/* <div className="flex w-full max-w-sm items-center space-x-2 relative">
        <Input type="text" placeholder="Search anything..." className="outline-0 border-gray-400 " />
        <Button className="absolute right-1 bg-[#3462c7f2]"  variant="" type="submit"><ChevronRight /></Button>
      </div> */}

      <div className="flex gap-1 md:gap-3 md:font-medium text-[12px] md:text-[16px] ">
        <Link to={"/login"} className="hover:underline">Login</Link>
        <Link to={"/vendor-register"} className="hover:underline">Become A Seller</Link>
      </div>
    </div>
  );
};

export default CustomNav;