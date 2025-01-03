import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import SignUpBanner from '../../assets/signup-banner.jpg';
import { Link } from 'react-router-dom';

import GoogleIcon from '../../assets/icons/google.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import InstagramIcon from '../../assets/icons/instagram.png';

function SignUp() {
  return (
    <>
      <header>
        <NavBar page="signup"/>
      </header>

      {/* sign in form */}
      <main className="mt-5 lg:mt-20">
        <div className="bg-backgbround py-3 lg:py-0 w-5/6 sm:w-2/3 lg:w-3/5 mx-auto flex h-auto shadow-card rounded-lg">
          <section className="hidden lg:block lg:w-2/5">
            <img src={SignUpBanner} 
                alt="Signin banner image"
                className="h-[35rem] object-cover rounded-l-lg"/>
          </section>

          <section className="w-full lg:w-3/5 flex gap-8 flex-col justify-center items-center pt-0 lg:pt-5 py-3">
            <div className="lg:w-2/3 text-center">
              <h1 className="text-2xl text-primary font-extrabold py-2">Register</h1>
                
              <div className="flex justify-center items-center gap-6 mt-2 mb-1">
                <img src={GoogleIcon} alt="Google icon"  className="w-9 h-9"/>
                <img src={FacebookIcon} alt="Facebook icon"  className="w-6 h-6 ml-[-7px]" />
                <img src={InstagramIcon} alt="Instagram icon"  className="w-7 h-7" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#555758]">
                  or fill up below fields to sign up with application 
              </p>                
            </div>

            <div className="mt-[-10px] w-5/6 lg:w-2/3">
              <form action=""
                  className="flex flex-col gap-2 lg:gap-">
                <input
                  type="text"
                  name="userEmail"
                  id="user_email"
                  placeholder="enter email address"
                  className="w-full text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7] placeholder:text-xs lg:placeholder:text-sm mt-3"/>

                <input
                  type="text"
                  name="userPassword"
                  id="user_password"
                  placeholder="enter password"
                  className="w-full text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7] placeholder:text-xs lg:placeholder:text-sm mt-3"/>
                  
                <input
                  type="text"
                  name="userConfirmPassword"
                  id="user_confirm_password"
                  placeholder="re-type password"
                  className="w-full text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7] placeholder:text-xs lg:placeholder:text-sm mt-3"/>

                <div className="text-[10px] text-left lg:text-xs flex gap-1 mt-2">
                  <input type="checkbox" className="checked:bg-secondary default:bg-primary"/>
                  Agree all privacy policy and regulations 
                </div>

                <button
                  type="submit"
                  className="bg-primary rounded-lg text-xs text-secondary w-full py-2 mt-2 flex justify-center items-center gap-1 font-medium sm:px-6 sm:py-2 sm:text-lg lg:mt-2 lg:text-base lg:py-2 lg:px-12 hover:bg-[#2E9B85] lg:font-semibold hover:transition-all hover:duration-700">
                  Register
                </button>
              </form>                
            </div>

            <div className="mt-[-5px]">
              <p className="text-xs lg:text-sm text-[#555758] font-semibold">
                Already have an acount? 
                <Link to="/signin"
                className="text-[#2E9B85] underline font-bold ml-1 hover:text-primary">Sign In</Link>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* footer section */}
      <div className="bg-primary mt-24">
        <Footer />
      </div>
    </>
  )
}

export default SignUp