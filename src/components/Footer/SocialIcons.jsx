import React from 'react';
import { Link } from 'react-router-dom';

import { 
    FaSquareFacebook,
    FaSquareInstagram,
    FaSquareXTwitter,
    FaSquareWhatsapp,
    FaSquareYoutube} from "react-icons/fa6";

function SocialIcons() {
  return (
    <>
        <div className="flex justify-center lg:justify-start items-center">
            <div className="flex gap-6">
                <a href="#facebook/CeyVisit" 
                    className="w-6 h-6 lg:w-8 lg:h-8">
                    <FaSquareFacebook className="text-backgbround w-full h-full hover:text-secondary"/>
                </a>
                <a href="#instagram/CeyVisit"
                    className="w-6 h-6 lg:w-8 lg:h-8">
                    <FaSquareInstagram className="text-backgbround w-full h-full hover:text-secondary"/>
                </a>
                <a href="#xtwitter/CeyVisit" 
                    className="w-6 h-6 lg:w-8 lg:h-8">
                    <FaSquareXTwitter className="text-backgbround w-full h-full hover:text-secondary"/>
                </a>
                <a href="#whatsapp/CeyVisit"
                    className=" w-6 h-6 lg:w-8 lg:h-8">
                    <FaSquareWhatsapp className="text-backgbround w-full h-full hover:text-secondary"/>
                </a>
                <a href="#youtube/CeyVisit"
                    className="w-6 h-6 lg:w-8 lg:h-8">
                    <FaSquareYoutube className="text-backgbround w-full h-full hover:text-secondary"/>
                </a>
            </div>
        </div>
    </>
  )
}

export default SocialIcons