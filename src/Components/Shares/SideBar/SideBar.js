import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseContext, { AuthContext } from "../../../Context/UseContext";
import SideNavBar from "../SideNavBar/SideNavBar";
import logo from '../../../image/logo2.png'
const SideBar = () => {
  const { user } = UseContext(AuthContext);
  const [isActive, setActive] = useState("false");

  const handleNavbar = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="bg-gray-100 text-black flex justify-between md:hidden w-full">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">BigOne</Link>
          </div>
        </div>

        <button
          onClick={handleNavbar}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        
        <div>
        <img className="p-3" src={logo} alt="" />
         <SideNavBar></SideNavBar>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
