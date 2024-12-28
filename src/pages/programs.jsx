import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function programs() {
  return (
    <>
        <header>
            <NavBar/>
        </header>

        <main>Programs</main>

        {/* footer section */}
        <div className="bg-primary mt-32">
            <Footer />
        </div>
    </>
  )
}

export default programs