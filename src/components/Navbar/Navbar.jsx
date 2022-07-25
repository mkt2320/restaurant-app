import React, { useState } from 'react';
import './Navbar.css';

import images from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
return (
  <nav className='app__navbar'>

    <div className='app__navbar-logo'>
      <img src={images.wslogo} alt='app__logo'/>
    </div>

    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className='app__navbar-login'>
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>


    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' size={20} onClick={() => setToggleMenu(true)}/>
      { toggleMenu && (
        <div className='app__navbar-smallscreen-overlay'>
          <MdOutlineRestaurantMenu color='#fff' className="overlay__close" size={20} onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen-overlay-links'>
            <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li className="p__opensans"><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            <li className="p__opensans"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>

      )}
    </div>

  </nav>
);
}

export default Navbar;
