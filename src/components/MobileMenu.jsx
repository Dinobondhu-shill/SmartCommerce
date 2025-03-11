import { NavLink } from "react-router-dom";
import { CircleUser, House, MessageCircle, Search, ShoppingCart, Store } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="bg-gradient-to-b from-[#e2cdf6] to-[rgb(224,206,240)] shadow-2xl h-[50px] w-full fixed bottom-0 flex md:hidden justify-between items-center px-2 z-[500] border-t border-purple-400 rounded-tl-3xl rounded-tr-3xl">
      {[
        { to: "/message", icon: <MessageCircle size={18} />, label: "Message" },
        { to: "/search", icon: <Search size={18} />, label: "Search" },
        { to: "/", icon: <House size={22} />, label: "Home", special: true },
        { to: "/cart", icon: <ShoppingCart size={18} />, label: "My Cart" },
        { to: "/profile", icon: <CircleUser size={18} />, label: "Account" }
      ].map((item, index) => (
        <NavLink 
          key={index} 
          to={item.to} 
          className={({ isActive }) =>
            `relative flex flex-col items-center gap-1 transition-all duration-300 ease-in-out 
             ${isActive ? "text-purple-600 border-x rounded-tr-2xl rounded-tl-2xl border-purple-600 p-1" : "text-gray-500 hover:text-purple-500"}`
          }
        >
          {item.special ? (
            <div className="relative flex flex-col items-center">
              <House size={20} className="transition-all duration-300 ease-in-out" />
              <div className="absolute bottom-0 w-3 h-1 rounded-full bg-purple-500 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
            </div>
          ) : (
            item.icon
          )}
          <p className="text-[12px] font-medium">{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;