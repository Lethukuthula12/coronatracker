import React from 'react';
import "./nav.styles.css";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
  
  render(){
    return (
      <div className="navigation-bar">
        <div className="contact-info">
          <div className="contact-info-content">
            <span>ORDER ONLINE OR CALL US: 0711419544</span>
            <ul className="contact-links">
              <li className="nav-link">
                <i class="fas fa-shopping-cart"></i> ( 0 )
              </li>

              <li className="nav-link">
                <i class="fas fa-user"></i>
              </li>
            </ul>
          </div>
          <hr />
          <div className="contact-info-content navbar">
            <h1>
              Onl
              <i class="fas fa-shopping-bag" style={{ color: "#fdb827" }}></i>
              Buy
            </h1>
            <ul className="contact-links navbar-links">
              <li className="nav-link">
                <Link to="#" className="nav-links active">
                  HOME
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#" className="nav-links">
                  COLLECTIONS
                </Link>
                {/* <ul className="dropdown">
                  <li>
                    <Link to="#">Mens</Link>
                  </li>
                  <li>
                    <Link to="#">Mens Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Womens</Link>
                  </li>
                  <li>
                    <Link to="#">Womens Shoes</Link>
                  </li>
                  <li>
                    <Link to="#">Toddler</Link>
                  </li>
                  <li>
                    <Link to="#">Sales</Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-link">
                <Link to="#" className="nav-links">
                  CATALOGY
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#" className="nav-links">
                  SALE
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#" className="nav-links">
                  BLOG
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#" className="nav-links">
                  CONTACT US
                </Link>
              </li>
            </ul>
            <input type="search" placeholder="Search" />
          </div>
        </div>
      </div>
    );
   
  }
}

export default NavBar;