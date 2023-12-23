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
      <section className='bg1' id="home">
        <div className='align-item'>
          <div className='hero'>
            <h1>
              One-on-one <br /> betting in <br /> <span>Naija way.</span>{" "}
            </h1>
            <p>
              Experience the distinctive FollowMeBet platform, a peer-to-peer
              interactive social betting mobile app that enables you to engage
              in friendly bets with your friends or compete against others
              across an extensive range of events.
            </p>
            <div className='download'>
              <Link to='/download'>
                <img src={Android} alt='Android download ' />
              </Link>
              <a href="https://apps.apple.com/ng/app/followmebet/id6444085742" target="_blank">
                
              <img src={AppStore} alt='AppStore download' />
</a>
            </div>
            <img src={age} alt='18 plus please play Reesponsible' className='age ' />
          </div>
          <div className='phone'>
            <img src={phone1} alt='Phone' />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
