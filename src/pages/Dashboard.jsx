import React from 'react';
import ChatBot from '../components/ChatBot.jsx/ChatBot';

import DashbordNavBar from '../components/DashboardNavBar/DashbordNavBar';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';
import SampleImage from '../assets/sample-recom.jpg';

function Dashboard() {
  return (
    <>
        <header>
            <DashbordNavBar />
        </header>

        <main 
            className="flex flex-col justify-center items-center text-mainfont">
            <BottomNavBar />
            <ChatBot />

            {/* recommendation */}
            <div
              className="w-full mt-10">
              <section className="w-5/6 mb-5 mx-auto flex flex-col">
                <section
                  className="w-full">
                  <h3
                  className="text-[#555758] text-base font-bold">Recommendations</h3>
                </section>

                {/* card section */}
                <section
                  className="w-full mt-5 lg:w-auto p-1 flex justify-between gap-4 items-center lg:gap-2 overflow-x-scroll lg:overflow-x-hidden">

                  <article
                    className="bg-backgbround shadow-card p-2 min-w-52 max-h-60 lg:w-52 lg:h-60 rounded-lg">
                    <img 
                      src={SampleImage} 
                      alt="sample  image" 
                      className="w-full h-24 object-cover rounded-md"/>
                    
                    <h4
                      className="text-sm font-bold text-center my-1">
                      Ella Camping
                    </h4>

                    <p
                      className="text-xs font-semibold text-[#555758]">
                      Ella camping in currently popular camping wave among the tourists. It has adventure hiking and gaming activities.
                    </p>

                    <div 
                      className="bg-primary w-full mt-3">
                      <button
                        className="bg-secondary w-1/2 rounded-lg float-end text-sm py-1 font-semibold text-mainfont">
                          Try now
                      </button>
                    </div>
                  </article>

                  <article
                    className="bg-backgbround shadow-card p-2 min-w-52 max-h-60 lg:w-52 lg:h-60 rounded-lg">
                    <img 
                      src={SampleImage} 
                      alt="sample  image" 
                      className="w-full h-24 object-cover rounded-md"/>
                    
                    <h4
                      className="text-sm font-bold text-center my-1">
                      Ella Camping
                    </h4>

                    <p
                      className="text-xs font-semibold text-[#555758]">
                      Ella camping in currently popular camping wave among the tourists. It has adventure hiking and gaming activities.
                    </p>

                    <div 
                      className="bg-primary w-full mt-3">
                      <button
                        className="bg-secondary w-1/2 rounded-lg float-end text-sm py-1 font-semibold text-mainfont">
                          Try now
                      </button>
                    </div>
                  </article>

                  <article
                    className="bg-backgbround shadow-card p-2 min-w-52 max-h-60 lg:w-52 lg:h-60 rounded-lg">
                    <img 
                      src={SampleImage} 
                      alt="sample  image" 
                      className="w-full h-24 object-cover rounded-md"/>
                    
                    <h4
                      className="text-sm font-bold text-center my-1">
                      Ella Camping
                    </h4>

                    <p
                      className="text-xs font-semibold text-[#555758]">
                      Ella camping in currently popular camping wave among the tourists. It has adventure hiking and gaming activities.
                    </p>

                    <div 
                      className="bg-primary w-full mt-3">
                      <button
                        className="bg-secondary w-1/2 rounded-lg float-end text-sm py-1 font-semibold text-mainfont">
                          Try now
                      </button>
                    </div>
                  </article>


                  <article
                    className="bg-backgbround shadow-card p-2 min-w-52 max-h-60 lg:w-52 lg:h-60 rounded-lg">
                    <img 
                      src={SampleImage} 
                      alt="sample  image" 
                      className="w-full h-24 object-cover rounded-md"/>
                    
                    <h4
                      className="text-sm font-bold text-center my-1">
                      Ella Camping
                    </h4>

                    <p
                      className="text-xs font-semibold text-[#555758]">
                      Ella camping in currently popular camping wave among the tourists. It has adventure hiking and gaming activities.
                    </p>

                    <div 
                      className="bg-primary w-full mt-3">
                      <button
                        className="bg-secondary w-1/2 rounded-lg float-end text-sm py-1 font-semibold text-mainfont">
                          Try now
                      </button>
                    </div>
                  </article>


                  <article
                    className="bg-backgbround shadow-card p-2 min-w-52 max-h-60 lg:w-52 lg:h-60 rounded-lg">
                    <img 
                      src={SampleImage} 
                      alt="sample  image" 
                      className="w-full h-24 object-cover rounded-md"/>
                    
                    <h4
                      className="text-sm font-bold text-center my-1">
                      Ella Camping
                    </h4>

                    <p
                      className="text-xs font-semibold text-[#555758]">
                      Ella camping in currently popular camping wave among the tourists. It has adventure hiking and gaming activities.
                    </p>

                    <div 
                      className="bg-primary w-full mt-3">
                      <button
                        className="bg-secondary w-1/2 rounded-lg float-end text-sm py-1 font-semibold text-mainfont">
                          Try now
                      </button>
                    </div>
                  </article>

                </section>
              </section>
            </div>
        </main>
    </>
  )
}

export default Dashboard