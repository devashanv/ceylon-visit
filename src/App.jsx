import './App.css'
import NavBar from './components/NavBar/NavBar';
import HeroImage from './assets/banner-image.png';
import AboutBannerImage from "./assets/about-us.jpg";
import { Link } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHotel, FaTaxi , FaPersonHiking } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      
      <main className="mb-10">
        {/* hero section */}
        <div>
          <img src={HeroImage} alt="web main banner image" 
          className="w-full h-52
          object-cover
          sm:h-96
          md:h-96
          lg:h-100
          lg:object-bottom"/>

          <div className="w-full
          text-backgbround
            px-10
            text-left
            absolute
            top-16
            sm:top-28
            md:top-28
            lg:px-0
            lg:w-1/2
            lg:pl-40
            lg:top-40">

            <p className="text-[20px] 
              font-bold
              sm:text-4xl
              md:text-4xl
              lg:text-6xl">
              <span className="text-secondary">Wellness</span> Tourism, <br/> Paradise..
            </p>

            <p className="text-[10px]
              pt-1
              pr-40
              text-ternary
              sm:text-base
              sm:my-2
              sm:w-2/3
              md:w-2/3
              md:text-base
              lg:text-lg
              lg:mt-4
              lg:pr-10
              lg:leading-8">
              Sri Lanka, the "Pearl of the Indian Ocean," offers breathtaking landscapes, rich cultural heritage, and diverse wildlife.
              <span className="hidden
              sm:hidden md:hidden lg:flex">
              Visitors can explore golden beaches, ancient temples, and lush tea plantations in this island paradise.
              </span>
            </p>

            <button className="border-secondary
              border
              rounded-lg
              text-[9px]
              text-secondary
              px-4
              py-1
              mt-3
              flex
              justify-center
              items-center
              gap-1
              font-bold
              sm:px-6
              sm:py-2
              sm:text-sm
              lg:mt-8
              lg:text-base
              lg:py-2
              lg:px-8
              hover:bg-secondary/[0.3]
              hover:transition-all
              hover:duration-700">
              Apply Visa
              <span>
                <GoArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5"/>
              </span>
            </button>
          </div>

          {/* theropy card */}
          <div className="flex
            gap-2
            py-2
            px-4
            lg:gap-4
            lg:px-0
            lg:pl-40
            lg:mt-[-55px]">

            <div className="w-1/3 bg-[#C4B36D]/[0.8]
              px-4
              py-2
              rounded-lg
              hover:cursor-pointer
              hover:bg-[#C4B36D]
              hover:transition-all
              hover:duration-700
              lg:w-60
              lg:h-32">
              <h2 className="text-sm 
              pb-2
              font-bold
              lg:text-base">
                Wellness Therapy</h2>
              <hr className="pb-2 "/>
              <p className="text-xs font-medium lg:text-sm">Traditional Sri Lankan ayuruwedic therapy. </p>
            </div>

            <div className="w-1/3 bg-[#C4B36D]/[0.8]
              px-4
              py-2
              rounded-lg
              hover:cursor-pointer
              hover:bg-[#C4B36D]
              hover:transition-all
              hover:duration-700
              lg:w-60
              lg:h-32">
              <h2 className="text-sm pb-2
              font-bold lg:text-base">Nature Therapy </h2>
              <hr className="pb-2 "/>
              <p className="text-xs font-medium lg:text-sm">The all about nature and experience from one country.</p>
            </div>

            <div className="w-1/3 bg-[#C4B36D]/[0.8]
              px-4
              py-2
              rounded-lg
              hover:cursor-pointer
              hover:bg-[#C4B36D]
              hover:transition-all
              hover:duration-700
              lg:w-60
              lg:h-32">
              <h2 className="text-sm pb-2
              font-bold lg:text-base">Meditation Therapy</h2>
              <hr className="pb-2 "/>
              <p className="text-xs font-medium lg:text-sm">Cultural medicine therapies, unique only for Sri Lankans.</p>
            </div>
          </div>
        </div>

        {/* services section */} 
        <div className="px-4 mt-10 lg:px-40 lg:mt-24 text-mainfont">
          <div className="py-2 text-center">
            <h1 className="text-lg font-bold lg:text-2xl">Our Services</h1>
            <p className="mt-[-5px] text-ternary font-medium text-lg">we provide valuables services for you</p>
          </div>

          <div className="flex flex-col gap-6 mt-6 lg:flex-row">
            <section className="w-full flex justify-between items-center gap-6">
              <article className="bg-backgbround shadow-card  w-1/2 min-h-40 rounded-lg flex flex-col justify-center items-center text-center hover:cursor-pointer card-hover">
                <FaPlaneDeparture className="w-12 h-12 text-primary"/>
                <p className="mt-4 font-bold text-sm">Tourist Visa <br/> Applying</p>
              </article>

              <article className="bg-backgbround shadow-card  w-1/2 min-h-40 rounded-lg flex flex-col justify-center items-center text-center hover:cursor-pointer card-hover">
                <FaHotel className="w-12 h-12 text-primary"/>
                <p className="mt-4 font-bold text-sm">Hotel <br/> Booking</p>
              </article>
            </section>

            <section  className="w-full flex justify-between items-center gap-6">
              <article className="bg-backgbround shadow-card w-1/2 min-h-40 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                <FaPersonHiking className="w-12 h-12 text-primary"/>
                <p className="mt-4 font-bold text-sm">Tourist Guider <br/> Booking</p>
              </article>

              <article className="bg-backgbround shadow-card w-1/2 min-h-40 rounded-lg flex flex-col justify-center items-center text-center card-hover">
                <FaTaxi className="w-12 h-12 text-primary"/>
                <p className="mt-4 font-bold text-sm">Transport  <br/> Booking</p>
              </article>
            </section>
          </div>

          <div className=" mt-5 lg:text-right flex justify-center lg:justify-end items-center group ">
                <Link to="/services" className="text-sm text-[#2E9B85] font-bold lg:text-base group-hover:text-primary group-hover:cursor-pointer ">
                more services
                </Link>
                <RiArrowRightDoubleFill className="w-4 h-4 mt-1 underline text-[#2E9B85] group-hover:text-primary group-hover:cursor-pointer"/>
          </div>
        </div>

        {/* about section */}
        <div className="mt-14">
          <div className="py-2 text-center">
            <h1 className="text-lg font-bold lg:text-2xl">About Us</h1>
            <p className="mt-[-5px] text-ternary font-semibold text-lg">our unique values for you</p>
          </div>

          <section className="mt-3 px-4 flex flex-col sm:flex-row sm:gap-6 lg:px-40">
              <article className="sm:w-1/2 sm:px-5"> 
                <p className="text-sm sm:text-base sm:pt-5">
                  We are most experienced tourism agency in of Sri Lanka. We are  ensure to provide safety and fair tourism experience. Also, we provide consulting service within your vacation period. We aim to provide high quality and valuable tourism experience to you.
                  <span>
                    <Link to="/about" className="text-sm text-[#2E9B85] font-bold lg:text-base hover:text-primary hover:cursor-pointer underline ml-2">
                        more details
                    </Link>
                  </span>
                </p>

                <p className="mt-4 text-sm">
                  <span className="text-primary font-semibold">Why are you late?</span> just apply visa for get amazing tourism experience.
                </p>

                <button className="bg-primary
                  rounded-lg
                  text-[9px]
                  text-secondary
                  px-4
                  py-2
                  mt-3
                  flex
                  justify-center
                  items-center
                  gap-1
                  font-medium
                  sm:px-6
                  sm:py-2
                  sm:text-sm
                  lg:mt-8
                  lg:text-base
                  lg:py-2
                  lg:px-8
                 hover:bg-[#2E9B85]
                  hover:transition-all
                  hover:duration-700">
                  Apply Visa
                  <span>
                    <GoArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5"/>
                  </span>
                </button>

              </article>

              <article className="mt-5 w-full max-h-96 sm:w-1/2 sm:mt-0">
                <img src={AboutBannerImage} alt="About us banner image" className="max-h-96 w-full object-cover rounded-lg"/>
              </article>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
