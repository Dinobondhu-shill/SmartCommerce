import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CustomNav = () => {
  return (
    <div className="flex justify-between items-center w-full mr-5">
      <h4 className="font-elegent text-3xl underline font-medium">Reversive</h4>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search anything..." />
        <Button type="submit">Search</Button>
      </div>
    </div>
  );
};

export default CustomNav;