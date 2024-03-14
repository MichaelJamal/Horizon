import React from 'react'

const NewsLetter = () => {
    const newsletterBanner = require("../images/newsletter-banner.png");


  return (
    <div>
              <section class="section newsletter" aria-label="newsletter">
        <div class="container">

          <figure class="newsletter-banner img-holder">
            <img src={newsletterBanner} width="303" height="381" alt="newsletter banner"
              class="w-100" />
          </figure>

          <div class="newsletter-content">

            <h2 class="h2 section-title">Subscribe for offers and news</h2>

            <form action="" class="newsletter-form">
              <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email"
                class="email-field" />

              <button type="submit" class="newsletter-btn">Subscribe Now</button>
            </form>

          </div>

        </div>
      </section>
    </div>
  )
}

export default NewsLetter