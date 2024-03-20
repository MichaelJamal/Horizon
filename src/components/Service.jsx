import React from 'react';

const Service = () => {
const airFreight = require("../images/service-icon-3.png");
const roadFreight = require("../images/service-icon-1.png");
const oceanFreight = require("../images/service-icon-2.png");
const railFreight = require("../images/service-icon-4.png");
const wareHousing = require("../images/service-icon-5.png");
const cargof = require("../images/service-icon-6.png");


  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle">All Services</p>
        <h2 className="h2 section-title">Trusted For Our Services</h2>
        <p className="section-text">
        Explore our comprehensive range of services including freight forwarding, warehousing, customs clearance, and distribution.
        </p>
        <ul className="service-list grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={airFreight} width="80" height="60" loading="lazy" alt="Truck" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">01</span> Air Freight
              </h3>
              <p className="card-text">
              Reliable air freight forwarding ensures swift delivery, leveraging our aviation expertise and global network for seamless logistics execution and exceptional service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={roadFreight} width="74" height="60" loading="lazy" alt="Ship" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">02</span> Road Freight
              </h3>
              <p className="card-text">
              Dependable road freight solutions ensure timely delivery, utilizing our industry expertise and extensive network for seamless logistics execution and outstanding service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={oceanFreight} width="60" height="60" loading="lazy" alt="Airplane" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">03</span> Ocean Freight
              </h3>
              <p className="card-text">
              Secure ocean freight solutions ensure timely delivery, utilizing our maritime expertise and global network for seamless logistics execution and exceptional service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={railFreight} width="50" height="60" loading="lazy" alt="Train" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">04</span> Rail Freight
              </h3>
              <p className="card-text">
              Efficient rail freight solutions ensure timely delivery, leveraging our rail expertise and extensive network for seamless logistics execution and exceptional service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={wareHousing} width="63" height="60" loading="lazy" alt="Trolley" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">05</span> Warehousing
              </h3>
              <p className="card-text">
              Optimized warehousing solutions ensure efficient storage, leveraging our expertise and state-of-the-art facilities for seamless inventory management and exceptional service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={cargof} width="46" height="60" loading="lazy" alt="Paper" />
              </div>
              <h3 className="h3 card-title">
                <span className="span">06</span> Project Cargo
              </h3>
              <p className="card-text">
              Specialized project cargo solutions ensure safe handling, leveraging our expertise and global network for seamless logistics execution and exceptional service.
              </p>
              {/* <button className="btn-link">
                <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                <span className="span">View Detail</span>
              </button> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;

