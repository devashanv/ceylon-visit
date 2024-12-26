import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContactBanner from '../../assets/contact-banner.svg';

import { TiLocation } from "react-icons/ti";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function ContactUs() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="mt-10 text-mainfont">
        {/* heder section */}
        <section className="w-5/6 lg:w-4/5 mx-auto flex flex-col text-center sm:text-start md:text-left gap-8 sm:gap-5 sm:flex-row lg:gap-10 lg:flex-row">
          <section className="sm:w-1/2 lg:w-2/5 lg:pt-10">
            <h1 className="mb-3 text-3xl lg:text-6xl font-bold lg:mb-5">
              Contact<span className="text-secondary ml-3">Us</span>
            </h1>
            <p className="text-sm w-full sm:text-sm sm:pr-5  lg:text-lg font-semibold text-[#555758] lg:pr-16">
              If you have question or any other confusions or want to know more
              details, feel free to contact us. You can directly write to email
              to us or contact us via telephone. Also, follows the our social
              media for update news and interact with us. We ready to provide
              valuable and fast services for you in 24 x 7.
            </p>
          </section>
          <section className="sm:w-1/2 lg:w-3/5">
            <img
              src={ContactBanner}
              alt="Services banner image"
              className="max-h-48 sm:max-h-60 w-full lg:max-h-96"
            />
          </section>
        </section>

        {/* contact section */}
        <div className="mt-16 lg:mt-28">
          <div className="py-2 text-left w-4/5 mx-auto mb-4">
            <h1 className="text-lg font-bold lg:text-4xl">
              Feel Free to contact us..
            </h1>
          </div>

          <div className="bg-[#D9D9D9]/[0.3] p-3">
            <div className="w-5/6 lg:4/5 gap-10 lg:gap-0 mx-auto flex flex-col sm:flex-row lg:flex-row">
              {/* row 1 */}
              <div className="sm:w-1/2 lg:w-1/2 flex lg:flex-row">
                <section className="max-h-44 lg:min-h-60 w-1/2 flex flex-col justify-center items-center lg:pt-10">
                  <div className="w-full h-1/3 flex justify-center items-center">
                    <TiLocation className="min-w-10 min-h-10 lg:w-14 lg:h-14 text-primary" />
                  </div>
                  <div className="text-center w-full h-2/3">
                    <h3 className="text-sm lg:text-base font-bold pb-2">
                      Office Address
                    </h3>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      No. 100 / 2 / A,
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      2nd cross street,
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      Colombo,
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      Sri Lanka.
                    </p>
                  </div>
                </section>
                <section className="max-h-44 lg:min-h-60 w-1/2 flex flex-col justify-center items-center lg:pt-10">
                  <div className="w-full h-1/3 flex justify-center items-center">
                    <PiPhoneDisconnectFill className="min-w-10 min-h-10 lg:w-14 lg:h-14 text-primary" />
                  </div>
                  <div className="text-center w-full h-2/3">
                    <h3 className="text-sm lg:text-base font-bold pb-2">
                      Telephone
                    </h3>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      +94 11 1234567
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      +94 11 1234567
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      +94 11 1234567
                    </p>
                  </div>
                </section>
              </div>

              {/* row 2 */}
              <div className="sm:w-1/2 lg:w-1/2 flex lg:flex-row">
                <section className="max-h-44 lg:min-h-60 w-1/2 flex flex-col justify-center items-center lg:pt-10">
                  <div className="w-full h-1/3 flex justify-center items-center">
                    <MdMarkEmailUnread className="min-w-10 min-h-10 lg:w-14 lg:h-14 text-primary" />
                  </div>
                  <div className="text-center w-full h-2/3">
                    <h3 className="text-sm lg:text-base font-bold py-1 sm:pb-2 lg:pt-0 lg:pb-2">
                      Email
                    </h3>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      info@ceyvisit.com
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      support@ceyvisit.com
                    </p>
                  </div>
                </section>
                <section className="max-h-44 lg:min-h-60 w-1/2 flex flex-col justify-center items-center lg:pt-10">
                  <div className="w-full h-1/3 flex justify-center items-center">
                    <FaWhatsappSquare className="min-w-9 min-h-9 lg:w-14 lg:h-14 text-primary" />
                  </div>
                  <div className="text-center w-full h-2/3">
                    <h3 className="text-sm lg:text-base font-bold py-1 sm:pb-2 lg:pb-2">
                      Whatsapp
                    </h3>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      +94 77 1234567
                    </p>
                    <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                      +94 77 1234567
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="mt-16 lg:mt-28">
          <div className="w-4/5 mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-5">
            <div className="lg:w-2/3">
              <form action="">
                <input
                  type="text"
                  name="userContatcName"
                  id="user_contatc_name"
                  placeholder="enter first and last name"
                  className="w-full text-mainfont text-sm lg:w-5/6 lg:text-base py-2 px-2 rounded-lg border-2 border-secondary bg-[#f4f4f4]/[0.6] focus:ring-1  focus:ring-secondary focus:outline-none focus:border-secondary placeholder:text-[#949494]
                  placeholder:text-xs lg:placeholder:text-sm"/>

                <input
                  type="text"
                  name="userEmail"
                  id="user_email"
                  placeholder="enter email address"
                  className="w-full text-mainfont text-sm lg:w-5/6 lg:text-base py-2 px-2 rounded-lg border-2 border-secondary bg-[#f4f4f4]/[0.6] focus:ring-1 focus:ring-secondary focus:outline-none focus:border-secondary placeholder:text-[#949494]
                  placeholder:text-xs lg:placeholder:text-sm mt-3"/>

                <textarea
                  name="userMessage"
                  id="user_message"
                  placeholder="enter your message here.."
                  rows={6}
                  className="w-full text-sm lg:w-5/6 lg:text-base py-2 px-2 rounded-lg border-2 resize-none border-secondary bg-[#f4f4f4]/[0.5] text-mainfont focus:ring-1 focus:ring-secondary focus:outline-none focus:border-secondary placeholder:text-[#949494]
                  placeholder:text-xs lg:placeholder:text-sm mt-3"></textarea>

                <button
                  type="submit"
                  className="bg-secondary rounded-lg text-[10px] text-mainfont w-full py-2 mt-3 flex justify-center items-center gap-1 font-medium sm:px-6 sm:py-2 sm:text-lg lg:w-1/4 lg:mt-6 lg:text-base lg:py-2 lg:px-12 hover:bg-secondary/[0.9] hover:ring-2 hover:ring-secondary lg:font-semibold hover:transition-all hover:duration-700">
                  Send
                  <span>
                    <IoSend className="lg:ml-2 w-2 h-2 lg:w-4 lg:h-4" />
                  </span>
                </button>
              </form>
            </div>


            <div className="lg:w-1/3">
              <p className="text-base font-bold py-3">Do you want to direct us?</p>
              <p className="text-sm font-medium text-[#555758] pb-3">
                If do you want to directly contact us, feel free to direct message us to your problem or any other information required to know.
              </p>
              <p className="text-sm font-medium text-[#555758]">
                We ready to response to you within minimum time period. Our 24 x 7 assistance service all ready estabilished to support you.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* footer section */}
      <div className="bg-primary mt-28">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs