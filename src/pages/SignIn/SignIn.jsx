import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SignInBanner from '../../assets/signin-banner.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import { IoSend } from "react-icons/io5";

function SignIn() {
  return (
    <>
      <header>
        <NavBar page="signin"/>
      </header>

      {/* sign in form */}
      <main className="mt-20">
        <div className="bg-backgbround py-8 lg:py-0 w-5/6 sm:w-2/3 lg:w-3/5 mx-auto flex h-auto shadow-card rounded-lg ">
          <section className="hidden lg:block lg:w-2/5">
            <img src={SignInBanner} 
              alt="Signin banner image"
              className="h-[35rem] object-cover rounded-l-lg"/>
          </section>

          <section className="w-full lg:w-3/5 flex gap-8 flex-col justify-center items-center">
            <div className="lg:w-2/3 text-center lg:mt-[-40px]">
              <h1 className="text-2xl text-primary font-extrabold py-2">Sign In</h1>
              <p className="text-sm font-semibold text-[#555758]">
                <span className="text-secondary">Ayubowan!,</span> Welcome
              </p>                
            </div>

            <div className="w-5/6 lg:w-2/3">
              <form action=""
                className="flex flex-col gap-3 lg:gap-4">
                <input
                    type="text"
                    name="userEmail"
                    id="user_email"
                    placeholder="enter email address"
                    className="w-full text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7]
                    placeholder:text-xs lg:placeholder:text-sm"/>

                <input
                    type="text"
                    name="userEmail"
                    id="user_password"
                    placeholder="enter password"
                    className="w-full text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7]
                    placeholder:text-xs lg:placeholder:text-sm mt-3"/>

                <div className="text-right">
                  <Link to="/forgotpswd"
                    className="text-[#555758]/[0.6] text-xs lg:text-sm font-semibold hover:text-[#555758]">
                      Forgot password?
                  </Link>
                </div>

                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="bg-primary rounded-lg text-xs text-secondary w-full py-2 mt-3 flex justify-center items-center gap-1 font-medium sm:px-6 sm:py-2 sm:text-lg lg:mt-6 lg:text-base lg:py-2 lg:px-12 hover:bg-[#2E9B85] lg:font-semibold hover:transition-all hover:duration-700">
                    Sign In
                  </button>
                </Link>
              </form>                
            </div>

            <div>
              <p className="text-xs lg:text-sm text-[#555758] font-semibold">
                A new user? 
                <Link to="/signup"
                className="text-[#2E9B85] underline font-bold ml-1 hover:text-primary">Register</Link>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* footer section */}
      <div className="bg-primary mt-28">
        <Footer />
      </div>
    </>
  )
}

export default SignIn