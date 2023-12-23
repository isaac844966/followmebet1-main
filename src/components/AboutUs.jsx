import React, { useState } from "react";
import Phone from "../images/phone3.png";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/About";

const AboutUs = () => {
  
  return (
    <Wrapper>
      <section className='bg4' id="about">
        <header>
          <h1>How its works</h1>
          <p>
            The following steps outline the straightforward procedure by which
            the FollowMeBet betting app operates.
          </p>
        </header>

        <div className='Container'>
          <div className='content'>
            <div className='box'>
              <h2>01. User Registration</h2>
              <p>
                To utilize the application, individuals are required to download
                it and set up an account. The registration procedure includes
                verifying their identity and depositing funds into their
                accounts.
              </p>
            </div>
            <div className='box'>
              <h3>02. Creating Bet Challenge</h3>
              <p>
                Users initiate bets, establish stakes, and send challenges to
                their opponents. Alternatively, they can opt to post it on our
                bets marketplace, where other users can view and respond with
                counter-bets.
              </p>
            </div>
            <div className='box'>
              <h3>03. Bet Fixtures Selection</h3>
              <p>
                Users have the option to explore our bet fixtures, which covers
                soccer events from major leagues and competitions, as well as
                occasional events like UFC, Boxing, and Elections, with
                additional options on the way. Alternatively, users can browse
                the existing betting challenges created and shared by other
                users in our bet marketplace.
              </p>
            </div>
          
          </div>
          <img src={Phone}  alt="How its works" loading="lazy" title="How its Works"/>
          <div className='content'>
           
            <div className='box'>
              <h3>04. Bet Matching</h3>
              <p>
                The system pairs individuals with conflicting predictions about
                the result of an event. For example, if a user predicts that
                Team A will emerge victorious, the opposing participant must
                place a bet against Team A's success (either betting on Team B
                to win or predicting a draw) for the wager to be considered
                valid
              </p>
            </div>
            <div className='box'>
              <h3>05. Payouts and Settlement</h3>
              <p>
                After the event concludes, the platform validates the results
                and oversees the payout procedure. It disburses the total
                winnings from the bet challenge to the victorious participant's
                account, deducting a modest commission fee for facilitating the
                bet.
              </p>
            </div>
            <div className='box six'>
              <h3>06. Withdrawals</h3>
              <p>
                Users can withdraw their winnings or remaining funds from their
                accounts back to their chosen payment method.
              </p>
            </div>
          </div>
        </div>
        <Link to='/download'>
          <div className='btn-cls'>
            <button className='btn-outline'>Download Now</button>
          </div>
        </Link>
      </section>
    </Wrapper>
  );
};

export default AboutUs;
