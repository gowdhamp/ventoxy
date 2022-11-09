import React from 'react';
import logo from '../assets/images/bit.png';
import sih from '../assets/images/sih.jpg';
import '../assets/css/header.css';

const Header = () => {
  return (
    <header className="header" id="myHeader">
      <nav>
        <div className="header_container">
          <div className="row">
            <div className="col-5 left_header">
              <div className="logo_search_group flex">
                <div className="logo_wrap">
                  <a href="/" className="logo flex">
                    <img
                      src={logo}
                      alt="Bannari Amman Institiute of Technology"
                      className="aqi_logo"
                      width="50"
                      height="38.58"
                    ></img>
                    <h3>BIT SHARKS</h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-7 right_menu_responsive">
              <div className="right_menu">
                <ul className="menu_list_hover">
                  <li className="d-inline-block">
                    <a href="/" className="d-inline-block">
                      Home
                    </a>
                  </li>
                  <li className="active">
                    <a href="/">Dashboard</a>
                  </li>

                  <li className="active">
                    <a href="/">Login/Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
