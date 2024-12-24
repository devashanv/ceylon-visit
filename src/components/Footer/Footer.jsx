import React from 'react';
import './Footer.css';
import SocialIcons from './SocialIcons';
import FooterLinks from './FooterLinks';

import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <>

        <footer>
            {/* details section */}
            <div className="h-auto pt-5 w-4/5 mx-auto flex flex-col lg:flex-row lg:gap-24">
                <div className="flex flex-col gap-5 p-5 lg:w-3/5">
                    <div className="">
                        {/* hidden image */}
                        <img src="logo.svg" alt="CeyVisit Logo" className="h-10 lg:h-1/5 hidden"/>
                        <p className="text-sm lg:text-xl text-secondary text-semibold mt-2">If you have question? write to us</p>

                        <p className="text-[10px]
                        sm:text-xs
                        md:text-xs
                        lg:text-sm text-backgbround lg:w-5/6 mt-3">If you have question or any other confusions or want to know more details, feel free to contact us. You can directly write to email to us or contact us via telephone. Also, follows the our social media for update news and interact with us. We ready to provide valuable and fast services for you in 24 x 7.</p>
                    </div>
                    <div className="h-auto">
                        <p className="text-sm font-semibold text-backgbround mb-3">Get help</p>

                        <form action="">
                            <input type="text" 
                            name="userEmail" 
                            id="user_email" 
                            placeholder="your email address" 
                            className="w-full text-sm lg:w-5/6 lg:text-base py-2 px-2 rounded-lg border-2 border-secondary bg-[#09967A]/[0.6] text-backgbround focus:ring-1 
                            focus:ring-secondary focus:outline-none focus:border-secondary placeholder:text-[#cdcdcd]
                            placeholder:text-sm"/>

                            <textarea name="userMessage" 
                            id="user_message" 
                            placeholder="enter your message here.." 
                            rows={6}
                            className="w-full text-sm lg:w-5/6 lg:text-base py-2 px-2 rounded-lg border-2 resize-none border-secondary bg-[#09967A]/[0.6] text-backgbround focus:ring-1 
                            focus:ring-secondary focus:outline-none focus:border-secondary placeholder:text-[#cdcdcd]
                            placeholder:text-sm mt-5">
                            </textarea>

                            <button 
                            type="submit"
                            className="bg-secondary rounded-lg text-[10px] text-mainfont w-full py-2 mt-3 flex justify-center items-center gap-1 font-medium sm:px-6 sm:py-2 sm:text-lg lg:w-1/4 lg:mt-6 lg:text-base lg:py-2 lg:px-12 hover:bg-secondary/[0.9] 
                            hover:ring-2 hover:ring-secondary lg:font-semibold hover:transition-all
                            hover:duration-700">
                            Send
                            <span>
                                <IoSend className="lg:ml-2 w-2 h-2 lg:w-4 lg:h-4"/>
                            </span>
                            </button>                           
                        </form>
                    </div>
                </div>

                <div  className="px-4 py-2 flex sm:px-14 flex-col-reverse lg:flex-col justify-start items-center lg:pt-24 gap-6 text-center lg:w-2/5 lg:text-start lg:px-0">
                    <div className="w-full">
                        <SocialIcons />
                    </div>
                    <div className="w-full">
                       <p className="text-backgbround text-sm sm:text-sm lg:text-base font-medium">
                            CeyVisit <br />
                            No. 100 / A, <br />
                            2nd cross street, <br />
                            Colombo, <br />
                            Sri Lanka.
                        </p> 
                    </div>
                    <div className="w-full text-sm sm:text-sm text-backgbround lg:text-base font-medium">
                        <p>Mail: ceyvisit.help@gmail.com</p>
                        <p>Hot Line: +94 11 1234567</p>
                        <p>Land No: +94 11 7654321</p>
                    </div>
                    <div className="w-full lg:mt-5">
                        <FooterLinks />
                    </div>
                </div>
            </div>   
      

            {/* copyrights */}
            <div className="bg-[#2E7D6D] text-center py-3 text-[10px] text-backgbround lg:text-xs">
                © 2025 Ceylon Visit | All rights reserved.
            </div>
        </footer>
    </>
  )
}

export default Footer