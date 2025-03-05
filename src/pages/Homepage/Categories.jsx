import React from "react";
import { Link } from "react-router-dom";

const category = [
  {
    name: "Electronics",
    icon: "https://i.ibb.co.com/bjH3ZcbP/0533529-electronics-120.webp",
    path: "#",
  },
  {
    name: "Beauty Collections",
    icon: "https://i.ibb.co.com/ymTsLxjm/0606333-health-beauty-120.jpg",
    path: "#",
  },
  {
    name: "Women's Collections",
    icon: "https://i.ibb.co.com/HLgPqb0c/0612938-jewelleries-watches-120.jpg",
    path: "#",
  },
  {
    name: "Home Living",
    icon: "https://i.ibb.co.com/BKncx6L2/0533528-home-living-120.webp",
    path: "#",
  },
  {
    name: "Bags & Wallet",
    icon: "https://i.ibb.co.com/SwGTKYTf/0634933-bags-wallets-belts-120.jpg",
    path: "#",
  },
  {
    name: "Bottles",
    icon: "https://i.ibb.co.com/R9pG2cw/bottles.jpg",
    path: "#",
  },
  {
    name: "Baby Toy's",
    icon: "https://i.ibb.co.com/zW3X01Yf/0671264-toys-baby-products-120.jpg",
    path: "#",
  },
  {
    name: "Fashions",
    icon: "https://i.ibb.co.com/kzwmprR/0667855-fashion-120.jpg",
    path: "#",
  },
  {
    name: "Gift Packs",
    icon: "https://i.ibb.co.com/YBGgnNXC/0680688-gift-packages-120.jpg",
    path: "#",
  },
];

const Categories = () => {
  return (
    <div>
  <h2 className="text-3xl font-extrabold tracking-widest text-gray-800 px-4 py-2">
  Our Collections
</h2>
      <div className="flex items-center justify-between px-4">
        {category.map((item, i) => (
          <Link
            to={item.path}
            className="flex flex-col justify-center gap-1.5 items-center"
            key={i}
          >
            <div className="border-2 border-blue-200 rounded-full">
              <img
                src={item.icon}
                alt=""
                className="w-20 rounded-full object-cover"
              />
            </div>
            <h3 className="font-medium text-sm font-modern">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
