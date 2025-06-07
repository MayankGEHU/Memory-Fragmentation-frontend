import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>
          Get all the latest information on services, events, jobs and fairs.
          Sign up for our newsletter today.
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address" />
          <button>➤</button>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
          <FaWhatsapp />
          <FaEnvelope />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-col about">
          <img src="/logo.png" alt="logo" />
          <p>
            Your one-stop career platform to find Jobs, Internships,
            Professional Trainings, Projects, and Volunteering Opportunities.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Partners</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Fresher Jobs</li>
            <li>Internships & Projects</li>
            <li>Resume Writing Services</li>
            <li>Curated Library</li>
            <li>Campus Ambassadors</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>EVENTS</h4>
          <ul>
            <li>Events</li>
            <li>Jobs & Internship Fair 2025</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} | All Rights Reserved by Your Company.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
