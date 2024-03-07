import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Sidemenu from "./Sidemenu";

const Navbar = ({ toggleSidemenu }) => {
  return (
    <div>
      <nav className="bg-lightblack w-full py-4 text-white flex justify-around items-center border-b border-gray-500">
        <FaBars
          className="text-gray h-6 w-6 ml-4 cursor-pointer"
          onClick={toggleSidemenu}
        />
        <h1 className="text-2xl font-bold pl-4">Reminder</h1>
     



        < div className="max-w-md mx-auto flex items-center">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center">
            <IoSearchOutline className="text-black h-5 w-5 absolute left-3" />

            <input
              type="search"
              id="default-search"
              className="block w-96 p-2 pl-10 text-sm  bg-lightgrey rounded-lg focus:outline-none focus:bg-white text-black border-gray placeholder-black"
            
              placeholder="Search"
              required
            />

            {/* You can add a submit button if needed */}
            {/* <button type="submit" className="text-white bg-blue-500 px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button> */}
          </div>

          <div className="flex items-center ml-4">
            <FaArrowRotateRight className="text-gray h-6 w-6 mr-2" />
            <IoMdSettings className="text-gray h-6 w-6 "  />
        
          </div>
        </ div>
      </nav>
      
    </div>
  );
};

export default Navbar;
