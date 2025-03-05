import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";

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
    </div>
  );
};

export default Home;
