import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import AboutBanner from '../assets/about-banner.svg';

function About() {
  const certifiItems = [
    {
      title: "Adventure Tourism",
      code: "ISO 211001",
      image: "https://devashanv.github.io/ceylon-visit/certificate/certi-1.svg",
    },
    {
      title: "Health And Safety",
      code: "ISO 45001",
      image: "https://devashanv.github.io/ceylon-visit/certificate/certi-2.svg",
    },
    {
      title: "Quality",
      code: "ISO 9001 ",
      image: "https://devashanv.github.io/ceylon-visit/certificate/certi-3.svg",
    },
    {
      title: "Health And Safety",
      code: "ISO 211001",
      image: "https://devashanv.github.io/ceylon-visit/certificate/certi-4.svg",
    },
    {
      title: "Health And Safety",
      code: "ISO 45001",
      image: "https://devashanv.github.io/ceylon-visit/certificate/certi-5.svg",
    },
       
  ]

  return (
    <>
      <header>
        <NavBar page="about"/>
      </header>
      
      <main className="mt-10 text-mainfont">
        {/* heder section */}
        <section className="w-5/6 lg:w-4/5 mx-auto flex flex-col text-center sm:text-left md:text-left gap-8 sm:gap-5 sm:flex-row lg:gap-0 lg:flex-row">
          <section className="sm:w-1/2 lg:w-2/5 lg:pt-10">
            <h1 className="mb-3 text-3xl lg:text-6xl font-bold lg:mb-5">About<span className="text-secondary ml-5">Us</span></h1>
            <p className="text-sm w-full sm:text-sm sm:pr-5 lg:text-lg font-semibold text-[#555758] flex flex-col gap-2">
              <span>
                Welcome to <span className="text-primary font-bold">Cey Visit</span>, where we turn travel dreams into reality. 
              </span>
              <span>
                Our mission is to craft unforgettable experiences tailored to your unique interests and desires. we specialize in personalized itineraries that highlight the best of each destination.
              </span>
              
            </p>
          </section>
          <section className="sm:w-1/2 lg:w-3/5">
              <img src={AboutBanner} alt="About banner image" className="max-h-48 sm:max-h-60 w-full lg:max-h-[26rem]"/>
          </section>
        </section>    

        {/* vission mission */}
        <div className="text-mainfont w-5/6 mx-auto mt-20 lg:mt-40 flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between lg:w-4/5">
          <div className="bg-[#D9D9D9]/[0.3] w-full sm:w-full lg:max-w-[36rem] px-10 py-5 h-auto rounded-lg">
            <h2 className="lg:text-2xl font-bold mb-3">Vision</h2>
            <p className="text-sm lg:text-base font-semibold text-[#555758]">
              To be a global leader in tourism, inspiring and enabling transformative travel experiences that connect people with the world’s beauty, cultures, and wonders, while promoting sustainability.
            </p>
          </div>

          <div className="bg-[#D9D9D9]/[0.3] w-full sm:w-full md:w-full lg:max-w-[36rem] px-10 py-5 h-auto rounded-lg">
            <h2 className="lg:text-2xl font-bold mb-3">Mission</h2>
            <p className="text-sm lg:text-base font-semibold text-[#555758]">
              We aim to deliver personalized and unforgettable travel experiences tailored to each traveler’s preferences. We are committed to providing exceptional service, fostering cultural understanding, and advocating for sustainable tourism that benefits both communities and the environment. Through our passion for travel, we create lasting memories and enrich lives, one journey at a time.
            </p>
          </div>
        </div>

        {/* certificates  */}
        <div className="mt-16 lg:mt-32 w-5/6 lg:w-4/5 mx-auto">
          <section className="py-2 text-center mb-4">
            <h1 className="text-lg font-bold lg:text-4xl">Cerifications</h1>
            <p className="text-[#7B7B7B] text-base font-semibold lg:text-lg">our values are represent by certifications</p>
          </section>

          <div className=" w-full flex justify-center md:justify-between lg:justify-between items-center flex-wrap gap-2">
          {
            certifiItems.map((item, index) => {
              return(
                <div className="max-h-48 lg:max-h-60 lg:w-1/6 flex flex-col justify-center items-center"
                 key={index}>
                  <div className="bg-backgbround h-28 w-28 flex justify-center items-center rounded-full lg:w-44 lg:h-44 mx-auto shadow-card">
                    <img src={item.image} alt={`${item.title} image`} className="w-5/6" />
                  </div>
                  <p className="text-xs lg:text-base font-bold py-1">{item.title}</p>
                  <p className="text-xs lg:text-base font-bold">{item.code}</p>
                </div>
              )
            })
          }
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

export default About