import React from "react";
import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <div className="flex justify-between items-center w-full px-3 ">
      <h3 className="text-[12px] hidden md:block">Free 3 day delivery and free returns within the US <Link to={"/register"} className="text-[#dd32e3] hover:text-[#b66fd7] text-[14px] font-medium">Register</Link> or <Link to={"/login"} className="text-[#dd32e3] hover:text-[#b66fd7] text-[14px] font-medium" >Login</Link> </h3>

      <div className="flex gap-1 md:gap-3 font-normal text-[12px] md:text-[12px] ">
        <Link to={"/login"} className="hover:underline">Login</Link>
        <Link to={"/vendor/register"} className="hover:underline">Become A Seller</Link>
      </div>
    </div>
  );
};

export default CustomNav;