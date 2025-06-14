import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png'
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h3>Memory Fragmentation Visualizer</h3>
        {/* <p>
Always open to tech-related conversations and collaborations — feel free to reach out!
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address" />
          <button>➤</button>
        </div> */}
        {/* <div className="social-icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
          <FaWhatsapp />
          <FaEnvelope />
        </div> */}
      </div>

      <div className="footer-content">
        <div className="footer-col about">
          <img src={logo} alt="logo" />
          <p>
            Gain real-time insight into memory allocation, usage, and fragmentation with the Memory Fragmentation Visualizer.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} | Memory Fragmentation Visualizer | By Mayank Singh.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
