import { Helmet } from "react-helmet-async";
import Wrapper from "../assets/wrapper/Rules";

const Payment = () => {
  return (
    <>
       <Helmet>
        <title>Payment Policy</title>
        <meta name="description" content="This Payment Policy outlines the terms and conditions  on our peer-to-peer betting platform. By using FollowMeBet, you agree to comply with this Payment Policy"/>
        <link rel="canonical" href="/payment"/>
      </Helmet>
        <Wrapper>
      <div className="rules">
        <div className="image">
          <h1>Payment Policy</h1>
        </div>
        <div className="list">
          <ol>
            <li>Overview</li>
            <ul>
              <li>
                Welcome to FollowMeBet! This Payment Policy outlines the terms
                and conditions related to financial transactions on our
                peer-to-peer betting platform. By using FollowMeBet, you agree
                to comply with this Payment Policy.
              </li>
            </ul>
            <li>Account Funding</li>
            <ol type="a">
              <li>Deposit Methods</li>
              <ul>
                <li>
                  FollowMeBet provides users with payment gateways, enabling
                  deposits through methods such as bank transfers, card
                  payments, bank transactions, and USSD. Users can fund their
                  accounts using these authorised payment options.
                </li>
              </ul>
              <li>Minimum Deposit</li>
              <ul>
                <li>
                  There may be a minimum deposit requirement, and users are
                  responsible for ensuring their deposits meet this requirement.
                </li>
              </ul>
            </ol>
            <li>Betting Transactions</li>
            <ol type="a">
              <li>Placing Bets</li>
              <ul>
                <li>
                  Users can place bets using the funds available in their
                  FollowMeBet accounts. Bets are binding and cannot be canceled
                  once confirmed.
                </li>
              </ul>
            </ol>
            <li>Withdrawals</li>
            <ol type="a">
              <li>Withdrawal Requests</li>
              <ul>
                <li>
                  Users can request withdrawals of their available funds at any
                  time. Withdrawal requests are subject to review and approval.
                </li>
              </ul>
              <li>Withdrawal Methods</li>
              <ul>
                <li>
                  FollowMeBet facilitates bank transfers for withdrawals. All
                  user withdrawal transactions are directly processed to the
                  user's designated bank account. It is important to note that
                  the account holder's names must match the user's provided
                  first and last names.
                </li>
              </ul>
              <li>Processing Time</li>
              <ul>
                <li>
                  Withdrawals may be processed within 24 hours, and the specific
                  processing time may vary depending on various factors.
                </li>
              </ul>
            </ol>
            <li>Fees and Charges</li>
            <ol type="a">
              <li>Transaction Fees</li>
              <ul>
                <li>
                  FollowMeBet may charge transaction fees for certain deposit or
                  withdrawal methods. Details regarding applicable fees will be
                  clearly communicated to users before they initiate
                  transactions.
                </li>
              </ul>
              <li>Fee Deductions</li>
              <ul>
                <li>
                  Transaction fees, if applicable, will be deducted from the
                  deposited or withdrawn amount. Users are responsible for any
                  fees associated with their transactions.
                </li>
              </ul>
            </ol>
            <li>Security Measures</li>
            <ol type="a">
              <li>Secure Transactions</li>
              <ul>
                <li>
                  FollowMeBet employs industry-standard security measures to
                  ensure the safety of financial transactions. However, users
                  are responsible for maintaining the security of their account
                  credentials.
                </li>
              </ul>
              <li>Fraud Prevention</li>
              <ul>
                <li>
                  FollowMeBet reserves the right to investigate and prevent
                  fraudulent activities. Any suspicious transactions may be
                  flagged for review.
                </li>
              </ul>
            </ol>
            <li>Compliance with Laws</li>
            <ol type="a">
              <li>Legal Requirements</li>
              <ul>
                <li>
                  Users are responsible for complying with all applicable laws
                  and regulations related to online gambling and financial
                  transactions in their jurisdiction.
                </li>
              </ul>
            </ol>
            <li>Changes to Payment Policy</li>
            <ol type="a">
              <ul>
                <li>
                  FollowMeBet reserves the right to update or modify this
                  Payment Policy at any time. Any changes will be effective
                  immediately upon posting the revised policy on the app
                </li>
              </ul>
            </ol>
            <li>Contact Information</li>
            <ul>
              <li>
                If you have any questions, concerns, or inquiries regarding the
                Payment Policy, please contact us at <a href="mailto: info@followmebet.com.ng"> info@followmebet.com.ng</a>
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </Wrapper>
    </>
  
  );
};

export default Payment;
