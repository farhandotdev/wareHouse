// import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


const NavBar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-light text-2xl whitespace-nowrap text-gray-400">
            WARE
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            HOUSE
          </span>
          </span>
        </a>
        <div>
        <button
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <FaSearch className="w-4 h-4"/>
        </button>
        <button
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <IoMdPerson className="w-5 h-5"/>
        </button>
        <button
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <IoBagCheckSharp className="w-5 h-5"/>
        </button>        
        <button
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <IoMenu className="w-5 h-5"/>
        </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
