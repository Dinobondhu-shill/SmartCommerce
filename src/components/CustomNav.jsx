import React from "react";
import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <div className="flex bg-gradient-to-br from-purple-500 via-purple-400 to-fuchsia-300 justify-between items-center h-full w-full px-3 ">
      <h3 className="text-[12px] hidden md:block">Free 3 day delivery and free returns within the US <Link to={"/register"} className="text-blue-700 hover:text-blue-800 text-[14px] font-medium">Register</Link> or <Link to={"/login"} className="text-blue-700 hover:text-blue-800 text-[14px] font-medium" >Login</Link> </h3>

      <div className="flex gap-1 md:gap-3 font-normal text-[12px] md:text-[12px] text-blue-700">
        <Link to={"/login"} className="hover:underline">Login</Link>
        <Link to={"/vendor/register"} className="hover:underline">Become A Seller</Link>
      </div>
    </div>
  );
};

export default CustomNav;