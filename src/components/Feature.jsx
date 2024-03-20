import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


const Features = () => {
    const featureIcon1 = require("../images/feature-icon-1.png");
    const featureIcon2 = require("../images/feature-icon-2.png");
    const featureIcon3 = require("../images/feature-icon-3.png");

  return (
    <section className="section feature" aria-label="feature">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Estimation</p>
            <h2 className="h2 section-title">Has a wide range of solutions</h2>
            <p className="section-text">
            Horizon Express offers an extensive array of customizable solutions, catering to diverse logistical needs and providing tailored services to optimize supply chain operations efficiently.
            </p>
          </div>
          <button className="btn">Read More</button>
        </div>
        <ul className="feature-list grid-list">
          <li>
            <div className="feature-card" style={{ '--card-number': "'01'" }}>
              <div className="card-icon">
                <img src={featureIcon1} width="72" height="91" alt="" />
              </div>
              <h3 className="h3 card-title">Intermodal Solutions</h3>
              <p className="card-text">
              Horizon Express offers reliable, eco-friendly intermodal services globally. Tailored solutions ensure safe, efficient, and enjoyable shipping experiences for customers.
              </p>
              <a href='/inter'  className="card-btn" aria-label="Read more">
              <IoIosArrowRoundForward />
              </a>
            </div>
          </li>
          <li>
            <div className="feature-card" style={{ '--card-number': "'02'" }}>
              <div className="card-icon">
                <img src={featureIcon2} width="94" height="94" alt="" />
              </div>
              <h3 className="h3 card-title">Multiple warehouses</h3>
              <p className="card-text">
                We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
                any kind...
              </p>
              <button  className="card-btn" aria-label="Read more">
              <IoIosArrowRoundForward />
              </button>
            </div>
          </li>
          <li>
            <div className="feature-card" style={{ '--card-number': "'03'" }}>
              <div className="card-icon">
                <img src={featureIcon3} width="93" height="93" alt="" />
              </div>
              <h3 className="h3 card-title">Tracking made easy</h3>
              <p className="card-text">
                A tracking number for the entire process. so that you can find the exact position. this process will
                help you
              </p>
              <a href='/tracking' className="card-btn" aria-label="Read more">
              <IoIosArrowRoundForward />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
