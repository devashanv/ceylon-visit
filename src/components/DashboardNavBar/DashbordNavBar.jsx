import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiSolidBell } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";
import { GiForestCamp, GiElephant } from "react-icons/gi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

function DashbordNavBar() {
  //toggle menue
  const [isMenuToggle, setisMenuToggle] = useState(false);
  const openMenu = () => {
    setisMenuToggle(!isMenuToggle);
  };

  return (
    <>
      <nav className="text-mainfont bg-primary/[0.5] h-14 lg:h-16 text-base shadow flex justify-between items-center px-3 py-0 lg:px-10 lg:py-2 ">
        {/* profile */}
        <div className="w-auto flex justify-center items-center gap-5">
          <div className="bg-primary w-12 h-10 lg:w-14 lg:h-12 rounded-full flex justify-center items-center">
            <img
              src="profile.jpg"
              alt="profile image"
              className="w-10 h-8 lg:w-12 lg:h-10 rounded-full object-cover object-top bg-center"
            />
          </div>
          <p className="text-sm ml-[-10px] lg:text-lg font-bold">
            Peterson Wich
          </p>

          <button className="p-1 flex">
            <BiSolidBell className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
            <p className="bg-secondary w-3 h-3 lg:w-4 lg:h-4 rounded-full text-xs font-bold relative left-[-12px] top-[-4px] lg:top-[-6px] flex justify-center items-center">
              5
            </p>
          </button>
        </div>

        {/* btn sign out */}
        <div className="w-24 flex justify-center items-center">
          <Link to="/signin" className="w-24 flex justify-center  items-center">
            <button 
              className="hidden lg:block w-16 bg-primary rounded-lg text-secondary text-xs py-2 md:py-2 md:w-full lg:py-2 lg:w-full lg:text-base hover:bg-[#2E9B85]">
              Sign Out
            </button>
          </Link>
        </div>

        {/* btn menu */}
        <div className="lg:hidden flex justify-center items-center">
          <button className="group hover:text-primary" onClick={openMenu}>
            {isMenuToggle ? (
              <RxCross2 className="w-7 h-7  hover:text-primary group-focus:text-mainfont" />
            ) : (
              <FiMenu className="w-7 h-7 hover:text-primary group-focus:text-mainfont" />
            )}
          </button>
        </div>

        {/* toggle menu */}
        {isMenuToggle ? (
          <div
            className="absolute shadow-card w-3/4 
            top-14 right-0 z-50 rounded-lg lg:hidden transition-all duration-1000 ease-in delay-150">
            <ul
              className="w-full font-semibold flex flex-col gap-1 divide-y-2 divide-ternary/[0.2]">
              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/dashboard"
                  className="rounded-tl-lg w-full py-3 pl-5 gap-2 flex flex-row items-center justify-start">
                  <FaPlaneDeparture className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Apply Visa
                  </p>
                </Link>
              </li>

              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/dashboard"
                  className="w-full py-2 pl-5 gap-2 flex flex-row items-center justify-start">
                  <BsFillTicketPerforatedFill className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Airline Tickets
                  </p>
                </Link>
              </li>

              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/dashboard"
                  className="w-full py-2 pl-5 gap-2 flex flex-row items-center justify-start">
                  <FaPersonHiking className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Tourists Guide
                  </p>
                </Link>
              </li>

              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/dashboard"
                  className="w-full py-2 pl-5 gap-2 flex flex-row items-center justify-start">
                  <GiForestCamp className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Camping Services
                  </p>
                </Link>
              </li>

              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/dashboard"
                  className="w-full py-2 pl-5 gap-2 flex flex-row items-center justify-start">
                  <GiElephant className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Safari Services
                  </p>
                </Link>
              </li>

              <li
                className="flex group hover:text-[#2E9B85] hover:bg-ternary/[0.3] hover:cursor-pointer hover:rounded-lg">
                <Link
                  to="/signin"
                  className="rounded-bl-lg w-full py-2 pl-5 gap-2 flex flex-row items-center justify-start">
                  <IoLogOut className="w-4 h-4 text-[#555758]/[0.4] group-hover:text-[#2E9B85]" />
                  <p className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                    Sign Out
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default DashbordNavBar