import React from 'react';

const FeatureSection = () => {
  return (
    <section className="feature" aria-label="features">
      <div
        className="feature-banner has-bg-image has-after"
        style={{
          backgroundImage: "url('https://i.pinimg.com/236x/24/5b/bc/245bbcb3694fece479ca47f0416e8428.jpg')"
        }}
      >
        <button className="play-btn" aria-label="play video: man making handmade belt">
          <img src="images/play.svg" width="60" height="60" loading="lazy" alt="play icon" />
        </button>
      </div>

      <div className="section feature-content">
        <div className="container">
          <h2 className="h2 section-title">
            Passionate About Elegance and Beauty Design
          </h2>

          <p className="section-text">
            Curabitur porttitor nulla vitae purus eleifend feugiat. Quisque faucibus sapien, ut porttitor lorem.
          </p>

          <ul className="feature-list">
            <li>
              <div className="feature-list-card">
                <div className="card-icon">
                  <img src="images/feature-icon-1.svg" width="45" height="45" loading="lazy" alt="review icon" />
                </div>
                <div>
                  <h3 className="h4 card-title">100% Guarantee</h3>
                  <p className="card-text">Vestibulum in eros at lectus commodo</p>
                </div>
              </div>
            </li>

            <ul className="feature-list">
            <li>
              <div className="feature-list-card">
                <div className="card-icon">
                  <img src="images/feature-icon-2.svg" width="45" height="45" loading="lazy" alt="review icon" />
                </div>
                <div>
                  <h3 className="h4 card-title">100% Guarantee</h3>
                  <p className="card-text">Vestibulum in eros at lectus commodo</p>
                </div>
              </div>
            </li>
            <ul className="feature-list">
            <li>
              <div className="feature-list-card">
                <div className="card-icon">
                  <img src="images/feature-icon-3.svg" width="45" height="45" loading="lazy" alt="review icon" />
                </div>
                <div>
                  <h3 className="h4 card-title">100% Guarantee</h3>
                  <p className="card-text">Vestibulum in eros at lectus commodo</p>
                </div>
              </div>
            </li>
            </ul>
            </ul>
          </ul>

          <p>
            Nunc cursus ante libero, et convallis eros tristique nec. Fusce consequat lectus dui, nec laoreet purus
            venenatis id.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
