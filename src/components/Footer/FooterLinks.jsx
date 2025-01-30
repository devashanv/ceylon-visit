import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinks() {
  return (
    <>
        <div className="flex flex-col">
            <p className="text-base lg:text-lg font-semibold text-backgbround mb-1">Quick Links</p>
            <ul className="-5/6 text-secondary flex justify-between text-base">
                <li className="px-2 py-1 sm:text-sm md:text-sm hover:text-secondary/[0.8]">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2 py-1 sm:text-sm md: hover:text-secondary/[0.8]">
                    <Link to="/services">Services</Link>
                </li>
                <li className="px-2 py-1 sm:text-sm md: hover:text-secondary/[0.8]">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-2 py-1 sm:text-sm md: hover:text-secondary/[0.8]">
                    <Link to="/updates">Updates</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default FooterLinks