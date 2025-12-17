import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const category = [
  {
    name: "Electronics",
    icon: "https://i.ibb.co/bjH3ZcbP/0533529-electronics-120.webp",
    path: "#",
  },
  {
    name: "Beauty Collections",
    icon: "https://i.ibb.co/ymTsLxjm/0606333-health-beauty-120.jpg",
    path: "#",
  },
  {
    name: "Women's Collections",
    icon: "https://i.ibb.co/HLgPqb0c/0612938-jewelleries-watches-120.jpg",
    path: "#",
  },
  {
    name: "Home Living",
    icon: "https://i.ibb.co/BKncx6L2/0533528-home-living-120.webp",
    path: "#",
  },
  {
    name: "Bags & Wallet",
    icon: "https://i.ibb.co/SwGTKYTf/0634933-bags-wallets-belts-120.jpg",
    path: "#",
  },
  {
    name: "Bottles",
    icon: "https://i.ibb.co/R9pG2cw/bottles.jpg",
    path: "#",
  },
  {
    name: "Baby Toy's",
    icon: "https://i.ibb.co/zW3X01Y/0671264-toys-baby-products-120.jpg",
    path: "#",
  },
  {
    name: "Fashions",
    icon: "https://i.ibb.co/kzwmprR/0667855-fashion-120.jpg",
    path: "#",
  },
  {
    name: "Gift Packs",
    icon: "https://i.ibb.co/YBGgnNC/0680688-gift-packages-120.jpg",
    path: "#",
  },
];

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="py-3 md:py-8 px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-gray-800 mb-6">
        Our Collections
      </h2>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-2">
        {(showAll ? category : category.slice(0,9)).map((item, i) => (
          <Link to={item.path} className="flex flex-col items-center gap-2" key={i}>
            <div className="border-2 border-purple-300 rounded-full p-1 w-[72px] h-[72px] md:w-20 md:h-20 flex items-center justify-center">
              <img src={item.icon} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
            </div>
            <h3 className="font-medium text-sm text-center">{item.name}</h3>
          </Link>
        ))}
      </div>

      {/* Toggle Button */}
      <Button className="w-full md:hidden  my-4" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "See All"}
      </Button>
    </div>
  );
};

export default Categories;
