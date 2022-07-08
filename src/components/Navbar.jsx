import React from 'react';
import '../styles/Main.scss';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-between'>
          <img src={logo} className='navbar__logo' />

        <div className='navbar__rightDiv d-flex display-content-center gap-5'>
            <h5>Contact</h5>
            
            <div className='navbar__elipseDiv d-flex justify-content-center flex-wrap'>
                <div className='navbar__elipse'></div>
                <div className='navbar__elipse'></div>
                <div className='navbar__elipse'></div>
                <div className='navbar__elipse'></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;