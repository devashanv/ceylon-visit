import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProgramsTab from '../components/ProgramsTab/ProgramsTab';
import ProgramsBanner from '../assets/program-banner.svg';

function programs() {
  return (
    <>
      <header>
        <NavBar page="programs" />
      </header>

      <main className="mt-10 lg:mt-20">
        {/* heder section */}
        <section className="w-5/6 lg:w-4/5 mx-auto flex flex-col text-center sm:text-start md:text-left gap-8 sm:gap-5 sm:flex-row lg:gap-0 lg:flex-row">
          <section className="sm:w-1/2 lg:w-2/5 lg:pt-10">
            <h1 className="mb-3 text-3xl lg:text-6xl font-bold lg:mb-5">Progra<span className="text-secondary">ms</span></h1>
            <p className="text-sm w-full sm:text-sm sm:pr-5  lg:text-lg font-semibold text-[#555758] lg:pr-0">
                Explore our vibrant programs, from wellness retreats to cultural festivals, entertainment events, and sports adventures, offering unforgettable experiences that celebrate tradition, relaxation, and excitement for every traveler.
            </p>
          </section>
          <section  className="sm:w-1/2 lg:w-3/5">
              <img src={ProgramsBanner} alt="Programs banner image" className="max-h-48 sm:max-h-60 w-full lg:max-h-96"/>
          </section>
        </section>

        <div className="sm:w-4/5 lg:w-4/5 mx-auto mt-16 lg:mt-28">
          <ProgramsTab />
        </div>
      </main>

      {/* footer section */}
      <div className="bg-primary mt-32">
        <Footer />
      </div>
    </>
  );
}

export default programs