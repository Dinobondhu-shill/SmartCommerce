import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductCard from "../Product/ProductCard";
import TodaysDeals from "../Product/TodaysDeal";
import FeaturedProducts from "./FeatureProduct";

const Home = () => {
  return (
    <div>
        {/* Banner area  */}
      <div className="flex max-h-[320px] w-full overflow-hidden items-center gap-1.5">
        <div className="w-[70%] flex-shrink-0 h-full">
          <Banner />
        </div>
        <div className="w-[30%] h-full overflow-hidden flex-shrink-0">
          <img
            src="https://i.ibb.co.com/ZTv6y15/bb707bf71aeb80caed4db25f6e51e379.webp"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* category section */}
      <div>
      <Categories />
      </div>
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold tracking-widest text-gray-800 mb-6">
        Our Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </div>
  );
};

export default Home;
