import React from 'react';

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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
              since the when an printer took.
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
              <h3 className="h3 card-title">Solutions and specialized</h3>
              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service
              </p>
              <button  className="card-btn" aria-label="Read more">
                <ion-icon name="arrow-forward"></ion-icon>
              </button>
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
                <ion-icon name="arrow-forward"></ion-icon>
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
              <button className="card-btn" aria-label="Read more">
                <ion-icon name="arrow-forward"></ion-icon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
