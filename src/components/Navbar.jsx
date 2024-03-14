import React, { useEffect, useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import Sidebar from './Sidebar';
import { PiPhoneCallThin } from "react-icons/pi";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const toggle = () => {
    setIsOpen(prevState => !prevState); 
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const headerClasses =  "bg-blue-500";
  const logo = require("../images/logoxxxx.png");

  return (
    <header className={`header ${headerClasses}`} data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo">
            <img className='w-46 h-36' src={logo} alt="" />
          </a>
        </h1>
        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">Transportio</a>
            <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>
                <span>Home</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                <span>About</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>
                <span>Service</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#blog"  className="navbar-link" data-nav-link>
                <span>Blog</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contactpage" className="navbar-link" data-nav-link>
                <span>Contact Us</span>
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-contact">
          <div>
            <p className="contact-label">Free Call In U.S.A</p>
            <a href="tel:12345678910" className="contact-number">213 817 5814</a>
          </div>
          <div className="contact-icon">
          <PiPhoneCallThin />
          </div>
        </div>
        <div className="md:hidden">
        <button 
        onClick={toggle}
        >
          <IoIosMenu className='text-white'/>
        </button>
        </div>
        <div className="overlay" ></div>
        <Sidebar  isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  );
};

export default Navbar;
