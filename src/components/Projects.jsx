import React from 'react';

const Projects = () => {
    const projectImage1 = require("../images/project-1.jpg");
    const projectImage2 = require("../images/project-2.jpg");
    const projectImage3 = require("../images/project-3.jpg");
    const projectImage4 = require("../images/project-4.jpg");
    const projectImage5 = require("../images/project-5.jpg");
    const projectImage6 = require("../images/project-6.jpg");

  return (
    <section className="section project" aria-label="project">
    <div className="container">

      <p className="section-subtitle">Projects</p>

      <h2 className="h2 section-title">Featured Projects</h2>

      <p className="section-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
        the when an
        printer took.
      </p>

      <ul className="project-list">

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage1} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

           

            <div className="card-content">
              <p className="card-tag">Warehousing , Distrbution</p>

              <h3 className="h3">
                <a href="#" className="card-title">Warehouse inventory</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage2} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

            <div className="card-content">
              <p className="card-tag">Logistics, Analytics</p>

              <h3 className="h3">
                <a href="#" className="card-title">Minimize Manufacturing</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage3} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

            

            <div className="card-content">
              <p className="card-tag">Warehousing , Distrbution</p>

              <h3 className="h3">
                <a href="#" className="card-title">Warehouse inventory</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage4} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

           

            <div className="card-content">
              <p className="card-tag">Logistics, Analytics</p>

              <h3 className="h3">
                <a href="#" className="card-title">Minimize Manufacturing</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage5} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

         

            <div className="card-content">
              <p className="card-tag">Warehousing , Distrbution</p>

              <h3 className="h3">
                <a href="#" className="card-title">Warehouse inventory</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

        <li className="project-item">
          <div className="project-card">

            <figure className="card-banner img-holder" style={{ '--width': '397px', '--height': '352px' }}>
              <img src={projectImage6} width="397" height="352" loading="lazy"
                alt="Warehouse inventory" className="img-cover" />
            </figure>

          
            <div className="card-content">
              <p className="card-tag">Logistics, Analytics</p>

              <h3 className="h3">
                <a href="#" className="card-title">Minimize Manufacturing</a>
              </h3>

              <a href="#" className="card-link">Read More</a>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  );
};

export default Projects;