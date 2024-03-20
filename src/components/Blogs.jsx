import { IonIcon } from '@ionic/react';
import React from 'react'


export const Blogs = () => {
    const blogImage1 = require("../images/blog-10.jpg");
    const blogImage2 = require("../images/blog-2.jpg");

  return (
    <div>
         <section class="section blog" aria-label="blog" id="blog">
        <div class="container">

          <p class="section-subtitle">Our Blogs</p>

          <h2 class="h2 section-title">Recent News & Events</h2>

          <p class="section-text">
            Stay updated with the latest happenings and industry insights, from Horizon Express' recent achievements to upcoming events and announcements.
          </p>

          <ul class="blog-list grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{ '--width': '770px', '--height': '500px' }}>
                  <img src={blogImage1} width="770" height="500" loading="lazy"
                    alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                    class="img-cover" />
                </figure>

                <div class="card-content">

                  <time class="card-meta" datetime="2024-04-01">
                    <span class="span">13</span> Mar
                  </time>

                  <h3 class="h3 card-title">
                    <button>
                    NEW EU CUSTOMS SECURITY AND SAFETY PROGRAM EFFECTIVE JUNE 3, 2024
                    </button>
                  </h3>

                  <p class="card-text">
                  Effective June 3, 2024, the European Union will be implementing a new Customs pre-arrival security and safety program: Import Control System 2 (ICS 2). Under ICS 2, all cargo transported on maritime and inland waterways, roads, and railways, to or through the EU, Norway, Switzerland and Northern Ireland must comply with new filing requirements.
                  </p>

                  <a href="/blogpage" className="btn-link">
                    <IonIcon name="chevron-forward" aria-hidden="true" />
                    <span className="span">Read More</span>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style={{ '--width': '770px', '--height': '500px' }}>
                  <img src={blogImage2} width="770" height="500" loading="lazy"
                    alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                    class="img-cover" />
                </figure>

                <div class="card-content">

                  <time class="card-meta" datetime="2024-2-21">
                    <span class="span">21</span> Jan
                  </time>

                  <h3 class="h3 card-title">
                    <button>
                    Customer Advisory – Contingency plans in response to the Red Sea situation.
                    </button>
                  </h3>

                  <p class="card-text">
                  In response to recent security threats against merchant vessels in the Red Sea, Horizon Express is implementing proactive measures and contingency strategies to enhance navigational security. For long-haul routes linking Asia to the Mediterranean, Europe, and the East Coast of the United States, Horizon Express will redirect containerships scheduled to traverse the Red Sea around the Cape of Good Hope, ensuring uninterrupted voyages to their respective ports of call.
                  </p>

                  <a href='/blogpage2' class="btn-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                    <span class="span">Read More</span>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}
