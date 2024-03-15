// components/Sidebar.js
import React from 'react';
import { IoIosClose } from 'react-icons/io';

const Sidebar = ({ isOpen, toggle }) => {
  const logo = require("../images/logoside.png");
  return (
    <div className={`fixed top-0 left-0 w-80 h-full bg-white text-black transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
    
    `}>
        <div className={`${isOpen ? 'block' : 'hidden'}`}>

<div className='flex justify-between p-4'>

<div>
<h6>
    <a href='/' className="text-black">
    <img className='w-46 h-36' src={logo} alt="" />
    </a>
</h6>
</div>

    <div>
    <button className='mx-auto px-4 pt-2 ' onClick={toggle}>
     <IoIosClose className='' />
    </button>
    </div>
    </div>



    <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
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
              <a href="#blog" className="navbar-link" data-nav-link>
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
    </div>
    </div>
  );
};

export default Sidebar;
