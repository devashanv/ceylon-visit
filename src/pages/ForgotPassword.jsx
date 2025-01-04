import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordBanner from '../assets/forgot-password-banner.svg'

function ForgotPassword() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-svh">
      <div className="lg:w-3/5 mx-auto">
          <p className="text-xs lg:text-sm text-[#555758] font-semibold">
            <Link
              to="/signin"
              className="text-[#2E9B85] underline font-bold ml-1 hover:text-primary"
            >
              Back to Sign In
            </Link>
          </p>
        </div>

        <div className="py-8 lg:py-0 w-5/6 sm:w-2/3 lg:w-3/5 mx-auto flex flex-col-reverse gap-10 lg:flex-row h-auto rounded-lg ">
          <section className="w-full lg:w-ful flex gap-8 flex-col justify-center items-center">
            <div className="w-5/6 lg:w-full text-center lg:text-left">
              <h1 className="text-2xl text-primary font-extrabold py-2">
                Forgot Password
              </h1>
              <p className="text-sm font-semibold text-[#555758]">
                please enter your email address, then click next button to reset
                you password.
              </p>
            </div>

            <div className="w-5/6 lg:w-full">
              <form action="" 
                className="flex flex-col gap-3 lg:gap-1">
                <input
                  type="text"
                  name="userEmail"
                  id="user_email"
                  placeholder="enter email address"
                  className="w-full lg:w-2/3 text-sm lg:text-base py-[6px] px-2 rounded-lg border-2 border-mainfont/[0.6] text-mainfont lg:font-semibold focus:ring-1  focus:ring-mainfont/[0.2] focus:outline-none focus:border-mainfont/[0.9] placeholder:text-[#949494]/[0.7]
                            placeholder:text-xs lg:placeholder:text-sm"
                />

                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="bg-primary rounded-lg text-xs text-secondary w-full lg:w-1/3 py-2 mt-3 flex justify-center items-center gap-1 font-medium sm:px-6 sm:py-2 sm:text-lg lg:mt-6 lg:text-base lg:py-2 lg:px-12 hover:bg-[#2E9B85] lg:font-semibold hover:transition-all hover:duration-700"
                  >
                    Next
                  </button>
                </Link>
              </form>
            </div>
          </section>

          <section className="w-2/3 mx-auto lg:block lg:w-2/3">
            <img
              src={ForgotPasswordBanner}
              alt="Forgot password banner image"
              className="object-cover rounded-l-lg"
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default ForgotPassword