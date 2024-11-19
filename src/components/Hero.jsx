import React from "react";
import Android from "../images/Android.png";
import AppStore from "../images/App-store.png";
import phone1 from "../images/phone1.png";
import age from "../images/age18.png";
import Wrapper from "../assets/wrapper/Hero";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Wrapper>
      <section className="bg1" id="home">
        <div className="align-item">
          <div className="hero">
            <h1>
              <span>Wager, Win,</span> and Have Fun on Your Own Terms!
            </h1>
            <p>
              Step into the world of FollowMeBet, where gaming is redefined. No
              more traditional betting platforms with rigid rules. With
              FollowMeBet, you’re in control. Our innovative platform allows you
              to wager on sports, politics, and pop culture events in a way
              that’s fair, fun, and inclusive. Whether you’re a sports fanatic
              or just love the thrill of the game, FollowMeBet offers something
              for everyone.
            </p>
            <div className="download">
              <Link to="/download">
                <img src={Android} alt="Android download " />
              </Link>
              <a
                href="https://apps.apple.com/ng/app/followmebet/id6444085742"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AppStore} alt="AppStore download" />
              </a>
            </div>
            <img
              src={age}
              alt="18 plus please play Reesponsible"
              className="age "
            />
          </div>
          <div className="phone">
            <img src={phone1} alt="Phone" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
