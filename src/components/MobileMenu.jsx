import { CircleUser, House, MessageCircle, ShoppingCart, Store } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="bg-[#6bdf7dd6] h-12  w-full fixed bottom-0 flex justify-between items-center px-1.5">
       
       <div className="flex flex-col items-center ">
      <MessageCircle />
        <p className="text-[12px] font-medium">Message Us</p>
      </div>
      <div className="flex flex-col items-center ">
        <Store />
        <p className="text-[12px] font-medium">Shops</p>
      </div>
      <div className="flex flex-col items-center ">
        <House />
        <p className="text-[12px] font-medium">Home</p>
      </div>
      <div className="flex flex-col items-center ">
        <ShoppingCart />
        <p className="text-[12px] font-medium">My Cart</p>
      </div>
      <div className="flex flex-col items-center ">
        <CircleUser />
        <p className="text-[12px] font-medium">My Account</p>
      </div>
    </div>
  );
};

export default MobileMenu;
