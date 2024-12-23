import './App.css'
import NavBar from './components/NavBar/NavBar';
import HeroImage from './assets/banner-image.png';
import AboutBannerImage from "./assets/about-us.jpg";
import PromotionBanner from "./assets/wellness-banner.png";
import { Link } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHotel, FaTaxi , FaPersonHiking } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const updatesCardItems = [
    {
      id: "1",
      image: "/card-image/image-1.jpg",
      title: "Kandy 'Dalada Perahara' 2024.",
      description: "World's cultural festival.Time Schedule published.",
    },
    {
      id: "2",
      image: "/card-image/image-2.jpg",
      title: "Colombo Vesak Festival May 2024.",
      description: "The colourfull festival are announced. Time Schedule published.",
    },
    {
      id: "3",
      image: "/card-image/image-3.jpg",
      title: "Tourism program In Sigiriya.",
      description: "Newly introduced program for tourism by Sri Lanka government. Packages and programs released.",
    },
    {
      id: "4",
      image: "/card-image/image-4.jpg",
      title: "Yala Adventure Safari Program.",
      description: "Newly introduced program for tourism by Sri Lanka government. Packages and programs released.",
    },
    {
      id: "5",
      image: "/card-image/image-5.jpg",
      title: "Nuwara Eliya New Year Festival.",
      description: "Newly introduced program for tourism by Sri Lanka government. Time Schedule published",
    },
    {
      id: "6",
      image: "/card-image/image-6.jpg",
      title: "Ella Special Tourism Program.",
      description: "Newly introduced program for tourism by Sri Lanka government. Packages and programs released.",
    },
  ];

  //slider settings
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      }
    ]
  };

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
              lg:w-full
              lg:text-lg
              lg:mt-4
              lg:pr-6
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
              lg:mt-6
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
          <div className="py-2 text-center mb-5">
            <h1 className="text-lg font-bold lg:text-4xl">Our Services</h1>
            <p className="text-[#7B7B7B] font-medium text-lg">we provide valuables services for you</p>
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
          <div className="py-2 text-center mb-8">
            <h1 className="text-lg font-bold lg:text-4xl">About Us</h1>
            <p className="text-[#7B7B7B] font-semibold text-lg">our unique values for you</p>
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
                <img src={AboutBannerImage} alt="About us banner image" className="max-h-96 w-full object-cover rounded-lg lg:object-left-bottom"/>
              </article>
          </section>
        </div>

        {/* promotion section */}
        <div className="mt-24 lg:mt-36">
          <section className="w-full flex justify-center items-center">
            <img src={PromotionBanner} alt="wellness promotion banner" className="object-cover lg:max-h-96 lg:object-contain"/>
            <div className="bg-mainfont/[0.7] rounded-lg min-h-40 sm:min-h-52 md:min-h-60 md:max-h-72 absolute lg:min-h-96 w-4/5 flex flex-col justify-center items-center ">
              <p className="text-secondary text-3xl sm:text-5xl md:text-6xl banner-font font-semibold lg:text-8xl">Sri Lanka</p>
              <p className="text-secondary text-md sm:text-lg md:text-xl banner-font lg:text-4xl">World's Best Wellness Tourism</p>
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
                Explore More
              </button>
            </div>
          </section>
        </div>

        {/* updates section */}
        <div className="mt-24 lg:mt-36">
          <div className="py-2 text-center mb-8">
            <h1 className="text-2xl font-bold lg:text-4xl">Updates</h1>
            <p className="text-[#7B7B7B] font-semibold text-lg">latest tourism news in our country</p>
          </div>

          {/* cards section*/}
          <div className="mt-6 w-4/5 mx-auto lg:min-h-[27rem]">
            <Slider {...settings}>
              {
                updatesCardItems.map((item, index)=> {
                  return(
                    // cards
                    <div className="bg-backgbround shadow-card mt-1 flex flex-col p-4 rounded-lg lg:h-[26rem]" key={index}>
                      
                      {/* card header */}
                      <div className=" bg-backgbround ml-[-0.5rem] flex justify-center items-center mt-[-1rem] p-2 absolute w-14 h-14 rounded-full">
                        <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                          <p className="text-backgbround font-semibold">{item.id}</p>
                        </div>
                      </div>

                      <div className="w-full">
                        <img src={item.image} alt={`${item.title} image`} className="rounded-md mx-auto w-full object-cover h-48"/>
                      </div>

                      {/* card body */}
                      <div className="h-44  flex flex-col content-between mt-5">
                        <div className="h-3/4 w-full">
                          <p className="text-base lg:text-lg font-bold w-full">{item.title}</p>
                          <p className="text-sm sm:text-xs lg:text-sm pt-2 text-[#555758] font-semibold">{item.description}</p>
                        </div>
   
                        <div className="h-1/4 flex justify-end items-center">
                          <button className="bg-primary 
                            w-4/6
                            mt-2
                            rounded-lg
                            text-[9px]
                            text-secondary
                            px-4
                            py-2
                            flex
                            justify-center
                            items-center
                            gap-1
                            font-medium
                            sm:px-4
                            sm:py-2
                            sm:text-sm
                            lg:mt-0
                            lg:text-base
                            lg:py-2
                            lg:px-3
                          hover:bg-[#2E9B85]
                            hover:transition-all
                            hover:duration-700">
                            More details
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
