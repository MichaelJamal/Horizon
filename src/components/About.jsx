import React from 'react';

const About = () => {
    const aboutImage1 = require("../images/about-banner.jpg");
    const aboutImage2 = require("../images/about-shape-1.png");
    const aboutImage3 = require("../images/about-shape-2.png");
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">

        <figure className="about-banner img-holder" style={{ '--width': '400px', '--height': '720px' }}>
          <img src={aboutImage1} width="400" height="720" loading="lazy" alt="About Banner" className="img-cover" />
          <img src={aboutImage2} width="260" height="170" loading="lazy" alt="About Shape 1" className="abs-img abs-img-1" />
          <img src={aboutImage3} width="500" height="500" loading="lazy" alt="About Shape 2" className="abs-img abs-img-2" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="h2 section-title">We Are Professional Logistics & cargo Agency</h2>
          <p className="section-text">
            Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam inventore.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-icon">
                <ion-icon name="chevron-forward"></ion-icon>
              </div>
              <p className="about-text">
                Go beyond logistics, make the world go round and revolutionize business.
              </p>
            </li>

            {/* Repeat the pattern for other list items */}

          </ul>

          <a href="#" className="btn">Learn More</a>

        </div>

      </div>
    </section>
  );
}

export default About;
