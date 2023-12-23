import React from "react";
import Wrapper from "../assets/wrapper/Rules";
import { Helmet } from "react-helmet-async";
const Rules = () => {
  return (
    <>
        <Helmet>
        <title>Rules</title>
        <meta name="description" content="This are the rules which are regulating followmebet"/>
        <link rel="canonical" href="/rules"/>
      </Helmet>
      <Wrapper>
        <div className="rules">
          <div className="image">
            <h1>Rules</h1>
          </div>
          <div className="list">
            <ol>
              <li>General Rules</li>
              <ol type="a">
                <li>Minimum age to use the platform is 18 years.</li>
                <li>Minimum withdrawal amount is 1000 naira.</li>
                <li>Minimum deposit amount is 100 naira.</li>
                <li>
                  Minimum bet stake for creating a bet challenge is 100 naira
                </li>
                <li>
                  All soccer event results are determined by 90 minutes of play.
                </li>
              </ol>
              <li>Outcome Scenarios</li>
              <ol type="a">
                <li>Outcome Scenarios</li>
                <ul>
                  <li>
                    if no bet party prediction matches the event result, 5% is
                    deducted for mediator fee before splitting the balance back
                    to users wallets.
                  </li>
                </ul>
                <li>Winner</li>
                <ul>
                  <li>
                    if a bet party predicted matches the event result, 5% is
                    deducted for mediator fee before sending the total stake
                    balance to the winners wallets.
                  </li>
                </ul>
                <li>No Challenger</li>
                <ul>
                  <li>
                    if a user create and sends a bet challenge, but it's not
                    accepted before the event starts, the system cancels the bet
                    and returns the full stake to the users wallet.
                  </li>
                </ul>
                <li>Refund</li>
                <ul>
                  <li>
                    For bets on events that are postponed, cancelled, or
                    abandoned, all stakes are refunded back to users wallets
                    with no deductions.{" "}
                  </li>
                </ul>
                <li>Wallets Transaction</li>
                <ul>
                  <li>
                    For every bet challenge created or accepted, the total stake
                    is deducted from both the initiator and the opponent's
                    wallets.
                  </li>
                  <li>
                    if a challenge opponent declines, the total stake is
                    refunded back to the initiator's wallet.
                  </li>
                  <li>
                    Bet challenge created and sent cannot be cancelled if an
                    opponents has already accepted. if cancelled with no
                    opponents, 5% is deducted for the mediator fee before
                    sending the balance to the user's wallet.
                  </li>
                </ul>
              </ol>
            </ol>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Rules;
