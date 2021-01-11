import React from 'react';
import "./footer.css";
import {Link} from "react-router-dom";
import {MdLocationOn} from "react-icons/md";
import {IoMdCall} from "react-icons/io";
import {BiTimeFive} from "react-icons/bi";
import {BsEnvelope} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="about">
        <h2>ABOUT OUR COMPANY</h2>
        <p>
          {" "}
          Being created for everyone with a style, items <br /> from thse shops
          correspond to the
          <br /> highest quality standards and are marked with the <br />
          pleasant to eyes look. After the visit to such a shop <br />
          the tens and adults feel like real fashionastas
        </p>
      </div>
      <div className="category">
        <h2>CATEGORIES</h2>
        <ul>
          <Link to="#" className="footer-links">
            <li>Mens</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Mens Shoes</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Women</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Women Shoes</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Shoes</li>
          </Link>
          <Link to="#" className="footer-links">
            {" "}
            <li>Sale</li>
          </Link>
        </ul>
      </div>
      <div className="information">
        <h2>INFORMATION</h2>
        <ul>
          <Link to="#" className="footer-links">
            <li>About Us</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Catelog</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Contact Us</li>
          </Link>

          <Link to="#" className="footer-links">
            <li>Collection</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Privacy Policy</li>
          </Link>
          <Link to="#" className="footer-links">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="about-us">
        <h2>CONTACT US</h2>
        <ul>
          <div to="#" className="link-icons">
            <div
              className="icons"
              style={{ paddingRight: "10px", color: "black" }}
            >
              <MdLocationOn />
            </div>{" "}
            <li> 3453 St. hugeX Place, Mbz</li>
          </div>
          <div to="#" className="link-icons">
            <div
              className="icons"
              style={{ paddingRight: "10px", color: "black" }}
            >
              <IoMdCall />
            </div>
            <li> 0711819544</li>
          </div>
          <div to="#" className="link-icons">
            <div
              className="icons"
              style={{ paddingRight: "10px", color: "black" }}
            >
              <BiTimeFive />
            </div>
            <li> 7 Days a week from 08:30 am to 10:00 pm</li>
          </div>
          <div to="#" className="link-icons">
            <div
              className="icons"
              style={{ paddingRight: "10px", color: "black" }}
            >
              <BsEnvelope />
            </div>
            <li>lethufzikhali@gmail.com</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
