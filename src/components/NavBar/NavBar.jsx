import React, { useState } from 'react'

import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
    //toggle menue
    const [isMenuToggle, setisMenuToggle] = useState(false);
    const openMenu = () => {
        setisMenuToggle(!isMenuToggle);
        console.log(isMenuToggle)
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
            md:px-10
            md:py-2">

            {/* logo */}
            <div className="w-2/3
                flex
                sm:w-3/4
                md:w-1/3
                md:flex">
                <img src="logo.svg" alt="Ceylon Visit logo" className="w-40

                    md:w-44"/>
            </div>

            {/* nav links */}
            <div className="hidden absolute 
                bg-slate-100
                shadow 
                w-1/2
                mt-14
                right-0
                rounded-lg
                md:flex
                md:w-1/2
                md:px-20
                md:relative
                md:mt-0
                md:shadow-none
                md:justify-between
                md:items-center">
                <ul className="
                    w-full
                    font-semibold
                    flex
                    flex-col
                    gap-2
                    md:gap-4
                    md:flex
                    md:flex-row
                    md:pl-0
                    md:justify-between" id="nav-links">
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        md:px-3">
                        <a href="#home">Home</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        md:px-3">
                        <a href="#services">Services</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        md:px-3">
                        <a href="#about">About</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        md:px-3">
                        <a href="#updates">Updates</a>
                    </li>
                    <li className="py-2
                        pl-5
                        hover:text-[#2E9B85]
                        hover:bg-ternary/[0.3]
                        hover:cursor-pointer
                        hover:rounded-lg
                        md:px-3">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            {/* btn sign in */}
            <div className="w-24
                flex
                justify-center
                items-center">
                <button className="w-full
                    bg-primary
                    rounded-lg
                    text-secondary
                    text-sm
                    py-2">
                    Sign In
                </button>
            </div>

            {/* btn menu */}
            <div className="md:hidden
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
                md:hidden">
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