import React from 'react';
import ChatBot from '../components/ChatBot.jsx/ChatBot';

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

            <ChatBot />
        </main>
    </>
  )
}

export default Dashboard