import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHotel, FaTaxi , FaPersonHiking } from "react-icons/fa6";
import { GiMeditation, GiForestCamp, GiElephant } from "react-icons/gi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

function BottomNavBar() {
  return (
    <>
        <nav
            className="bg-backgbround shadow-card w-5/6 bottom-10 fixed py-2 rounded-lg">
            <ul
                className="flex w-full justify-between px-5">
                <li>
                    <Link to="/dashboard"
                        className="group flex flex-col justify-center items-center">
                        <AiFillHome 
                            className="lg:w-7 lg:h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-xs lg:text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Home
                        </p>
                    </Link>
                </li>

                <li
                    className="hidden sm:hidden lg:block">
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <FaPlaneDeparture 
                            className="w-7 h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Apply Visa
                        </p>
                    </Link>
                </li>

                <li
                    className="hidden sm:hidden lg:block">
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <BsFillTicketPerforatedFill 
                            className="w-7 h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Airline Tickets
                        </p>
                    </Link>
                </li> 

                <li>
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <GiMeditation 
                            className="lg:w-7 lg:h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-xs lg:text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Wellness
                        </p>
                    </Link>
                </li>  

                <li>
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <FaHotel 
                            className="w-3.5 lg:w-5 lg:h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-xs lg:text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Hotels
                        </p>
                    </Link>
                </li> 

                <li>
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <FaTaxi 
                            className="lg:w-6 lg:h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-xs lg:text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Transport
                        </p>
                    </Link>
                </li>

                <li
                    className="hidden sm:hidden lg:block">
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <FaPersonHiking 
                            className="w-7 h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Tourist Guide
                        </p>
                    </Link>
                </li> 

                <li
                    className="hidden sm:hidden lg:block">
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <GiForestCamp 
                            className="w-7 h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Camping
                        </p>
                    </Link>
                </li>

                <li
                    className="hidden sm:hidden lg:block">
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <GiElephant 
                            className="w-7 h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Safari Services
                        </p>
                    </Link>
                </li> 

                <li>
                    {/* to do: link assign */}
                    <Link to="/404"
                        className="group flex flex-col justify-center items-center">
                        <IoMdSettings 
                            className="lg:w-7 lg:h-7 text-[#555758]/[0.4] group-hover:text-[#2E9B85]"/>
                        <p
                            className="text-xs lg:text-base font-bold text-[#555758]/[0.4] group-hover:text-[#2E9B85]">
                        Settings
                        </p>
                    </Link>
                </li>         
            </ul>
        </nav>
    </>
  )
}

export default BottomNavBar