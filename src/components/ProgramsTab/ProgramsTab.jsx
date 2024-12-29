import React, { useState } from 'react';
import './ProgramsTab.css';

import WellnesPrograms from '../../pages/WellnesPrograms';
import EntertainmentPrograms from '../../pages/EntertainmentPrograms';
import CulturalPrograms from '../../pages/CulturalPrograms';
import SportPrograms from '../../pages/SportPrograms';

function ProgramsTab() {
    // set tab toggles
    const [toggleTab, setToggleTab] = useState(1);
    const updateTab = (index) =>{
        setToggleTab(index);
    }

  return (
    <>
        <div className="rounded-lg text-mainfont">
            <header className="bg-ternary/[0.2]">
                <ul className="text-xs lg:text-base flex gap-5 w-full lg:w-1/2 h-10 pt-2">
                    <li onClick={() => updateTab(1)}
                        className={(toggleTab === 1 ? 
                            "text-[#555758] border-b-2 border-secondary w-32 h-auto text-center" :
                            "hover:border-b-2 hover:border-secondary hover:cursor-pointer w-32 h-auto text-center"
                        )}>
                        Wellness
                    </li>
                    <li onClick={() => updateTab(2)}
                        className={(toggleTab === 2 ? 
                            "text-[#555758] border-b-2 border-secondary w-32 h-auto text-center" :
                            "hover:border-b-2 hover:border-secondary hover:cursor-pointer w-32 h-auto text-center"
                        )}>
                        Entertainment
                    </li>
                    <li onClick={() => updateTab(3)}
                        className={(toggleTab === 3 ? 
                            "text-[#555758] border-b-2 border-secondary w-32 h-auto text-center" :
                            "hover:border-b-2 hover:border-secondary hover:cursor-pointer w-32 h-auto text-center"
                        )}>
                        Cultural
                    </li>
                    <li onClick={() => updateTab(4)}
                        className={(toggleTab === 4 ? 
                            "text-[#555758] border-b-2 border-secondary w-32 h-auto text-center" :
                            "hover:border-b-2 hover:border-secondary hover:cursor-pointer w-32 h-auto text-center"
                        )}>
                        Sport
                    </li>
                </ul>

                <hr className="hr-line"/>
            </header>

            <div className="bg-ternary/[0.2] max-h-[40rem] p-5 flex flex-col gap-3 overflow-y-auto lg:max-h-[44rem] lg:gap-5">
                {(toggleTab === 1 ? <WellnesPrograms /> : 
                    toggleTab === 2 ?               <EntertainmentPrograms /> : 
                    toggleTab === 3 ? <CulturalPrograms /> : <SportPrograms />)
                }
            </div>
        </div>
  
    </>
  )
}

export default ProgramsTab