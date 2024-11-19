import LOGO from "../images/logo.png";
import Paystack from "../images/Paystack_Logo.svg";
import visa from "../images/visa.svg";
import mastercard from "../images/Mastercard.svg";
import age from "../images/age.svg";
import Twitter from "../images/Twitter.svg";
import Instagram from "../images/Instagram.svg";
import Youtube from "../images/YouTube.svg";
import Android from "../images/Android.png";
import ios from "../images/App-store.png";

import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <img src={LOGO} alt="logo" title="Logo" loading="lazy" />
          </div>
          <div className="footer-links">
            <h1>Quick links</h1>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/download">Download App</Link>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
          <div className="download-app">
            <h1>Download</h1>
            <div className="link">
              <Link to="/download">
                <img
                  src={Android}
                  alt="Android"
                  title="Dowload For Android now"
                  loading="lazy"
                />
              </Link>
              <a
                href="https://apps.apple.com/ng/app/followmebet/id6444085742"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={ios}
                  alt="ios"
                  title="Download on IOS Now "
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="media">
            <img
              src={Twitter}
              alt="twitter"
              title="Contact us on Twitter"
              loading="lazy"
            />
            <img
              src={Instagram}
              alt="instagram"
              title="Contact us on instagram"
              loading="lazy"
            />
            <img
              src={Youtube}
              alt="youtube"
              title="Contact us on Youtube"
              loading="lazy"
            />
          </div>
          <div className="short-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy and policy</Link>
            <Link to="/payment">Payment Policy</Link>
            <Link to="/rules">Rules</Link>
          </div>
          <div className="payment">
            <img
              src={mastercard}
              alt="payment"
              title="payment with MasterCard"
              loading="lazy"
            />
            <img
              src={Paystack}
              alt="payment"
              title="payment with Paystact"
              loading="lazy"
            />
            <img
              src={visa}
              alt="payment"
              title="payment with visa"
              loading="lazy"
            />
            <img src={age} alt="age" title="18 plus" loading="lazy" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
