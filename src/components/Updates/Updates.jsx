import React from 'react'
import NavBar from '../NavBar/NavBar';

import { Link } from 'react-router-dom';

function Updates() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <div className="text-center mt-52">
        under development
        <Link to="/signin">Signin</Link>
        <Link to="/signup">register</Link>
      </div>
    </>
    
  )
}

export default Updates