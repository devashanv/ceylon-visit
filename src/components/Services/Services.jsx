import React from 'react'
import './Services.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

import ServiceBanner from '../../assets/services-banner.svg'
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHotel, FaTaxi , FaPersonHiking } from "react-icons/fa6";
import { GiMeditation, GiForestCamp, GiElephant } from "react-icons/gi";


function Services() {
  return (
    <>
      <header>
        <NavBar page="services"/>
      </header>

      <main className="mt-10 text-mainfont">
        {/* heder section */}
        <section className="w-5/6 lg:w-4/5 mx-auto flex flex-col text-center sm:text-start md:text-left gap-8 sm:gap-5 sm:flex-row lg:gap-10 lg:flex-row">
          <section className="sm:w-1/2 lg:w-2/5 lg:pt-10">
            <h1 className="mb-3 text-3xl lg:text-6xl font-bold lg:mb-5">Servic<span className="text-secondary">es</span></h1>
            <p className="text-sm w-full sm:text-sm sm:pr-5  lg:text-lg font-semibold text-[#555758] lg:pr-16">
              We offers a wide range of personalized services designed to make your travel experience seamless and memorable. Whether you're looking for adventure, relaxation, or cultural exploration, our team is dedicated to providing exceptional service and support throughout your journey.
            </p>
          </section>
          <section  className="sm:w-1/2 lg:w-3/5">
              <img src={ServiceBanner} alt="Services banner image" className="max-h-48 sm:max-h-60 w-full lg:max-h-96"/>
          </section>
        </section>

        {/* categories section */}
        <div className="mt-16 lg:mt-28">
          <div className="py-2 text-center mb-4">
            <h1 className="text-lg font-bold lg:text-4xl">Categories</h1>
            <p className="text-[#7B7B7B] font-medium text-lg">our unique values for you</p>
          </div>
          
          {/* cards area */}
          <div className="text-mainfont bg-[#D9D9D9]/[0.3] py-5">
            <div className="w-5/6 mx-auto mb-3">
              <section className="w-full flex justify-center items-center lg:justify-center lg:items-start gap-3 sm:gap-5 lg:gap-10 flex-wrap">
                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround w-[9rem] shadow-card mt-1 lg:mt-3 lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center hover:cursor-pointer card-hover">
                    <FaPlaneDeparture className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Tourist Visa <br/> Applying</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-primary w-[9rem]  shadow-card mt-1 lg:mt-3 lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                    <GiMeditation className="w-12 h-12 text-secondary"/>
                    <p className="mt-4 font-bold text-sm text-backgbround">Wellness  <br/> Services</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround  shadow-card mt-1 lg:mt-3  w-[9rem] lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center hover:cursor-pointer card-hover">
                    <FaHotel className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Hotel <br/> Booking</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround  shadow-card mt-1 lg:mt-3 w-[9rem] lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                    <FaPersonHiking className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Tourist Guider <br/> Booking</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround  shadow-card mt-1 lg:mt-3 w-[9rem] lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                    <FaTaxi className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Transport  <br/> Booking</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround  shadow-card mt-1 lg:mt-3 w-[9rem] lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                    <GiForestCamp className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Transport  <br/> Booking</p>
                  </article>
                </Link>

                {/* to do: link set with relavent page */}
                <Link to="/add link">
                  <article className="bg-backgbround  shadow-card mt-1 lg:mt-3 w-[9rem] lg:w-[17rem] min-h-40 lg:min-h-36 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                    <GiElephant className="w-12 h-12 text-primary"/>
                    <p className="mt-4 font-bold text-sm">Safari  <br/> Services</p>
                  </article>
                </Link>              
              </section>             
            </div>
          </div>
        </div>
      </main>

      {/* footer section */}
      <div className="bg-primary mt-32">
        <Footer />
      </div>
    </>
   
  )
}

export default Services