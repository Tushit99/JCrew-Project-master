import React from "react";
import "./footer.css";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GiIndianPalace } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="footerParent">
      <div className="grandChild">
        <div className="li">
          <h3 className="h3">Help</h3>
          <ul>
            <li>Customer Service</li>
            <li>Track Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping</li>
            <li>International Orders</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="li">
          <h3 className="h3">Quick Links</h3>
          <ul>
            <li>Find a Store</li>
            <li>Size Charts</li>
            <li>Offers & Promotions</li>
          </ul>
        </div>
        <div className="li">
          <h3 className="h3">About J.Crew</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Social Responsibility</li>
            <li>
              California Transparency <br /> Act/Modern Slavery{" "}
            </li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
            <li>
              California Do Not Sell My <br /> Personal Information
            </li>
            <li>
              Diversity, Equity and Inclusion <br /> at J.Crew Group
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="social">
            <div>
              <GrInstagram className="ic" />
            </div>
            <div>
              <FaFacebookF className="ic" />
            </div>
            <div>
              <BsTwitter className="ic" />
            </div>
            <div>
              <BsLinkedin className="ic" />
            </div>
            <div>
              <BsPinterest className="ic" />
            </div>
            <div>
              <BsYoutube className="ic" />
            </div>
          </div>
          <div className="flag">
            <section className="india">
              <span>
                <a href="#">India</a>
                <GiIndianPalace />{" "}
              </span>
            </section>
            <section className="logos">
              <a href="#">
                <img src="https://th.bing.com/th/id/OIP.l0sMewYc8xvxAT5lTr49OQHaHa?pid=ImgDet&rs=1"></img>
              </a>
              <a href="#">
                <img src="https://th.bing.com/th/id/OIP.iEjlrwbxBCMFlD-7lb-M2wHaHa?pid=ImgDet&rs=1"></img>
              </a>
            </section>
          </div>
          <div className="footer__copyright">
            <small>&copy; 2022 J.Crew</small>
          </div>
        </div>
      </div>

      <div className="grandchild2">
        <h3 className="h3">Like Being First?</h3>
        <ul>
          <li>Get can't-miss style news, before everybody else.</li>
        </ul>
        <div className="input">
          <div className="box">
            <input
              type="text"
              className="box-1"
              placeholder="Enter your email"
            />{" "}
          </div>
          <div className="btn">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
