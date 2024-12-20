import './App.css'
import NavBar from './components/NavBar/NavBar';
import HeroImage from './assets/banner-image.png';

import { GoArrowUpRight } from "react-icons/go";

function App() {
  return (
    <>
      
      <NavBar/>
      <main>
        <div>
          <img src={HeroImage} alt="web main banner image" 
          className="w-full h-52
          object-cover
          md:h-96
          lg:h-100"/>

          <div className="w-full
          text-backgbround
            px-10
            text-left
            absolute
            top-16
            lg:px-0
            lg:w-1/2
            lg:pl-40
            lg:top-32">
            <p className="text-[20px] 
              font-bold
              lg:text-6xl">
              <span className="text-secondary">Wellness</span> Tourism, <br/> Paradise..
            </p>
            <p className="text-[10px]
              pt-1
              pr-40
              text-ternary
              lg:text-lg
              lg:mt-4
              lg:pr-10
              lg:leading-8">
              Sri Lanka, the "Pearl of the Indian Ocean," offers breathtaking landscapes, rich cultural heritage, and diverse wildlife.
              <span className="hidden lg:flex">
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
              lg:mt-8
              lg:text-base
              lg:py-2
              lg:px-8">
              Apply Visa
              <span>
                <GoArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5"/>
                </span>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
