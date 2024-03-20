import React from 'react'

const Footer = () => {
  const logo = require("../images/logoxxxxx.png");
  return (
    <footer className="footer">
    <div className="container">

      <div className="footer-top section">

        <div className="footer-brand">

          <button href="/" className="logo">
          <img className='w-56 h-60' src={logo} alt="" />
          </button>

          <p className="footer-text">
           Horizon Express: Your Logistics Partner. Trusted. Reliable. Efficient.
          </p>
{/* 
          <ul className="social-list">

            <li>
              <button href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </button>
            </li>

            <li>
              <button href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
            </li>

            <li>
              <button href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
            </li>

            <li>
              <button href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </button>
            </li>

          </ul> */}

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Quick Links</p>
          </li>

          <li>
            <button  className="footer-link">About</button>
          </li>


          <li>
            <a href='/blogpage' className="footer-link">Blog</a>
          </li>

          <li>
            <a href='/faq' className="footer-link">FAQ</a>
          </li>

          <li>
            <button className="footer-link">Contact Us</button>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Services</p>
          </li>

          <li>
            <a href='/#service'  className="footer-link">Warehouse</a>
          </li>

          <li>
            <a href='/#service'   className="footer-link">Air Freight</a>
          </li>

          <li>
            <a href='/#service'  className="footer-link">Ocean Freight</a>
          </li>

          <li>
            <a href='/#service'   className="footer-link">Road Freight</a>
          </li>

          <li>
            <a href='/#service'   className="footer-link">Packaging</a>
          </li>

        </ul>

        <ul className="footer-list">

        <li>
            <p className="footer-list-title">Community</p>
          </li>


          <li>
            <a href='/contactpage'  className="footer-link">Business Consulting</a>
          </li>

          <li>
            <a href='/track'  className="footer-link">Track Your Shipment</a>
          </li>

          <li>
            <button className="footer-link">Privacy Policy</button>
          </li>

          <li>
            <a href='/termsandconditions'  className="footer-link">Terms & Condition</a>
          </li>

        </ul>

      </div>

      <div className="footer-bottom">
        <p className="copyright">
          2024 &copy; - all rights reserved<button className="copyright-link"></button>
        </p>
      </div>

    </div>
  </footer>
  )
}

export default Footer