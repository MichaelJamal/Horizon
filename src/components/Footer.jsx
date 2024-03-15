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
            Many desktop publishing packages and web page editors now use are dolra Ipsum as their default.
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
            <button  className="footer-link">Services</button>
          </li>

          <li>
            <button className="footer-link">Blog</button>
          </li>

          <li>
            <button className="footer-link">FAQ</button>
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
            <button  className="footer-link">Warehouse</button>
          </li>

          <li>
            <button  className="footer-link">Air Freight</button>
          </li>

          <li>
            <button className="footer-link">Ocean Freight</button>
          </li>

          <li>
            <button className="footer-link">Road Freight</button>
          </li>

          <li>
            <button className="footer-link">Packaging</button>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Community</p>
          </li>

          <li>
            <button  className="footer-link">Business Consulting</button>
          </li>

          <li>
            <button className="footer-link">Testimonials</button>
          </li>

          <li>
            <button  className="footer-link">Track Your Shipment</button>
          </li>

          <li>
            <button className="footer-link">Privacy Policy</button>
          </li>

          <li>
            <button  className="footer-link">Terms & Condition</button>
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