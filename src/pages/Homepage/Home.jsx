import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductCard from "../Product/ProductCard";
import TodaysDeals from "../Product/TodaysDeal";
import FeaturedProducts from "./FeatureProduct";
import ComboSection from "./ComboSection";
import { Link } from "react-router-dom";
import ProductFinderQuiz from "./ProductFinder";
import HypeDropSection from "./HypeDropSection";
import SocialShoppingPulse from "./SocialShoppingSection";

const Home = () => {
  const banners = [
    {
      image:"https://i.ibb.co.com/HfyQBcsh/White-Minimalist-Banner-Etsy-Shop.png",
      path:"/"
    },
    {
      image:"https://i.ibb.co.com/XZKkpw5X/Banner-black-friday-webshop-ecommerce-promotion.png",
      path:"/"
    },
    {
      image:"https://i.ibb.co.com/0pXCdtTW/Blue-Ecommerce-Online-Shopping-Linked-In-Banner.png",
      path:"/"
    },
  
  ]
const banner2= [
  {
    image:"https://i.ibb.co.com/spMj8G6j/Gadget-Store-Sale-E-commerce-Storefront-Banner-in-Black-and-White-Modern-Minimalist-Style.png",
    path:"/"
  },
  {
    image:"https://i.ibb.co.com/0pXCdtTW/Blue-Ecommerce-Online-Shopping-Linked-In-Banner.png",
    path:"/"
  }
]
  return (
    <div>
        {/* Banner area  */}
      <div className="flex max-h-[150px] md:max-h-[320px] w-full overflow-hidden items-center ">
        
        <div className="w-full md:w-[70%] flex-shrink-0 h-full">
        <Banner items={banners} />
        </div>
        <div className="hidden md:block md:w-[30%]">
        <Banner items={banner2} time={4500} />
        </div>
      </div>
      {/* category section */}
      <div>
      <Categories />
      </div>
      <div>
      <HypeDropSection />
    </div>
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-gray-800 mb-6">
        Top Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    <div>
      <TodaysDeals />
    </div>
    <div>
      <FeaturedProducts />
    </div>
    <div className="flex flex-col space-y-4 mb-5">
      <ComboSection />
      <Link className="bg-purple-500 w-fit text-center mx-auto text-white font-medium text-xl px-5 py-2 rounded-2xl">View All Combo</Link>
    </div>
    {/* Product finder quiz */}
    <div>
      <ProductFinderQuiz />
    </div>
    {/*Hype drop section */}
   <SocialShoppingPulse />
    </div>
  );
};

export default Home;
