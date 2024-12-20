import React, { useState } from 'react'

import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
    //toggle menue
    const [isMenuToggle, setisMenuToggle] = useState(false);
    const openMenu = () => {
        setisMenuToggle(!isMenuToggle);
    }
  return (
    <>
        <nav className="bg-slate-100
            text-base 
            shadow
            flex
            justify-between
            px-5
            py-2
            lg:px-10
            lg:py-2">

            {/* logo */}
            <div className="w-2/3
                flex
                sm:w-3/4
                lg:w-1/3
                lg:flex">
                <img src="logo.svg" alt="Ceylon Visit logo" className="w-36
                    lg:w-44"/>
            </div>

            {/* nav links */}
            <div className="hidden absolute 
                bg-slate-100
                shadow 
                w-1/2
                mt-14
                right-0
                rounded-lg
                lg:flex
                lg:w-1/2
                lg:px-20
                lg:relative
                lg:mt-0
                lg:shadow-none
                lg:justify-between
                lg:items-center">
                <ul className="
                    w-full
                    font-semibold
                    flex
                    flex-col
                    gap-2
                    lg:gap-4
                    lg:flex
                    lg:flex-row
                    lg:pl-0
                    lg:justify-between" id="nav-links">
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        lg:px-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        lg:px-3">
                        <a href="#services">Services</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        lg:px-3">
                        <a href="#about">About</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        lg:px-3">
                        <a href="#updates">Updates</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        lg:px-3">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            {/* btn sign in */}
            <div className="w-24
                flex
                justify-center
                items-center">
                <button className="w-16
                    bg-primary
                    rounded-lg
                    text-secondary
                    text-sm
                    py-2
                    md:w-full
                    lg:w-full">
                    Sign In
                </button>
            </div>

            {/* btn menu */}
            <div className="lg:hidden
                flex
                justify-center
                items-center">
                <button className="group hover:text-primary" onClick={openMenu}>
                    {isMenuToggle ? (
                        <RxCross2 className="w-7 
                        h-7
                        hover:text-primary
                        group-focus:text-[#2E9B85]"/>
                    ): (
                        <FiMenu className="w-7 
                        h-7
                        hover:text-primary
                        group-focus:text-mainfont"/>
                    )}

                </button>
            </div>

            {/* toggle menu */}
            {isMenuToggle ? (
                <div className="absolute 
                bg-slate-100
                shadow 
                w-1/2
                mt-14
                right-0
                rounded-lg
                lg:hidden">
                    <ul className="
                        w-full
                        font-semibold
                        flex
                        flex-col
                        gap-2"
                        id="nav-links">
                        <li className="py-2
                            pl-5
                            hover:text-[#2E9B85]
                            hover:bg-ternary/[0.3]
                            hover:cursor-pointer
                            hover:rounded-lg">
                            <a href="#home">Home</a>
                        </li>
                        <li className="py-2
                            pl-5
                            hover:text-[#2E9B85]
                            hover:bg-ternary/[0.3]
                            hover:cursor-pointer
                            hover:rounded-lg">
                            <a href="#services">Services</a>
                        </li>
                        <li className="py-2
                            pl-5
                            hover:text-[#2E9B85]
                            hover:bg-ternary/[0.3]
                            hover:cursor-pointer
                            hover:rounded-lg">
                            <a href="#about">About</a>
                        </li>
                        <li className="py-2
                            pl-5
                            hover:text-[#2E9B85]
                            hover:bg-ternary/[0.3]
                            hover:cursor-pointer
                            hover:rounded-lg">
                            <a href="#updates">Updates</a>
                        </li>
                        <li className="py-2
                            pl-5
                            hover:text-[#2E9B85]
                            hover:bg-ternary/[0.3]
                            hover:cursor-pointer
                            hover:rounded-lg">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            ): null}
        </nav>
    </>
  )
}

export default NavBar