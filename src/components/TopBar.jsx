// import React from "react";
import { CiHeart } from "react-icons/ci";

const TopBar = () => {
  return (
    <nav className="border-gray-200 bg-gray-200">
      <div className="max-w-screen-xl p-0 flex flex-wrap items-center justify-between mx-auto p-">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-light text-xs whitespace-nowrap text-black">
            Sitemap
          </span>
          {/* <TbMinusVertical className="m-0 p-0"/> */}
          <span className="self-center font-light text-xs whitespace-nowrap text-black">
            Contact us
          </span>
        </a>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-light text-xs whitespace-nowrap text-black">
            English
          </span>
          {/* <TbMinusVertical/> */}
          <span className="self-center font-light text-xs whitespace-nowrap text-black">
            USD $    
          </span>
          {/* <TbMinusVertical/> */}
          <span className="self-center flex items-center font-light text-xs whitespace-nowrap text-black">
           <CiHeart/>
             Wishlist(0)
          </span>
          {/* <TbMinusVertical/> */}
          <span className="self-center font-light text-xs whitespace-nowrap text-black">
            Compare(0)
          </span>
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
