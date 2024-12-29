import React from 'react';

import DashbordNavBar from '../components/DashboardNavBar/DashbordNavBar';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';

function Dashboard() {
  return (
    <>
        <header>
            <DashbordNavBar />
        </header>

        <main 
            className="flex flex-col justify-center items-center">
            <BottomNavBar />


        </main>
    </>
  )
}

export default Dashboard