import React from "react";
import Wrapper from "../assets/wrapper/Features1";
import Phone from "../images/phone6.png";

const Features1 = () => {
  return (
    <Wrapper>
      <div className='bg5'>
        <div className='phone'>
          <img src={Phone} alt='Join Telegram Now' title=" Join Telegram Now" loading="lazy"/>
        </div>
        <div className='content'>
          <h2>
            {" "}
            Join our exclusive Telegram group for the ultimate peer-to-peer
            betting experience!
          </h2>
          <p>
            Connect with fellow bettors, initiate bet discussions , and resolve
            them effortlessly using our FollowMeBet betting app. Don't miss out
            – join us now!
          </p>
          <a  href='https://t.me/follomebet' target='_blank'>
            <button className='btn'>Join Now</button>
          </a>
          <div className='phone1'>
            <img src={Phone} alt='Join Telegram Now' title=" Join Telegram Now" loading="lazy"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Features1;
