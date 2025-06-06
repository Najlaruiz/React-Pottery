import React from 'react';

const HeroSection = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            We Make Top Quality
            <span className="span">Handmade Products</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <a href="#" className="btn">
            <span className="span">View Collection</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>

        <div className="wrapper">
          <div className="hero-banner-1 img-holder" style={{ '--width': 400, '--height': 550 }}>
            <img
              src="https://i.pinimg.com/564x/e4/21/ee/e421eed81ceb470e1cae129314dabf2b.jpg"
              width="400"
              height="550"
              alt="view of assortment of decor for interior shop"
              className="img-cover"
            />
          </div>

          <div className="hero-banner-2 img-holder" style={{ '--width': 500, '--height': 850 }}>
            <img
              src="images/hero-banner-2.jpg"
              width="500"
              height="850"
              alt="ceramic craft ware"
              className="img-cover"
            />
          </div>

          <img src="images/hero-shape.png" width="570" height="676" alt="leaves" className="shape" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
