import React from 'react';

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          Luxury Traditional Store
        </a>

        <nav className="navbar" data-navbar>
          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;