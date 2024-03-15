import { IonIcon } from '@ionic/react';
import React from 'react'


export const Blogs = () => {
    const blogImage1 = require("../images/blog-1.jpg");
    const blogImage2 = require("../images/blog-2.jpg");

  return (
    <div>
         <section class="section blog" aria-label="blog" id="blog">
        <div class="container">

          <p class="section-subtitle">Our Blogs</p>

          <h2 class="h2 section-title">Recent news & events</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
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
                    <span class="span">04</span> Jan
                  </time>

                  <h3 class="h3 card-title">
                    <button>
                      At the end of the day, going forward, a new normal that has evolved from. your only logistic
                      partner.
                    </button>
                  </h3>

                  <p class="card-text">
                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                    industry the standard
                    dummy text ever since the when an printer.
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
                    <span class="span">21</span> Feb
                  </time>

                  <h3 class="h3 card-title">
                    <button>
                      Going forward, a new normal that has evolved from generation. moving your products across all
                      borders.
                    </button>
                  </h3>

                  <p class="card-text">
                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                    industry the standard
                    dummy text ever since the when an printer.
                  </p>

                  <button class="btn-link">
                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                    <span class="span">Read More</span>
                  </button>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}
