import React from "react";
import Wrapper from "../assets/wrapper/Rules";
import { Helmet } from "react-helmet-async";
const Condition = () => {
  return (
    <>
       <Helmet>
        <title>Privacy and Policy</title>
        <meta name="description" content="Privacy Policy"/>
        <link rel="canonical" href="/privacy"/>
      </Helmet>
      <Wrapper>
      <div className="rules">
        <div className="image">
          <h1>privacy policy</h1>
        </div>
        <div className="list">
          <ol>
            <li>Introduction</li>
            <ul>
              <li>
                Welcome to FollowMeBet! This privacy policy explains how we
                collect, use, disclose, and protect your personal information
                when you use our peer-to-peer gaming app. By using FollowMeBet,
                you agree to the terms outlined in this privacy policy.
              </li>
            </ul>
            <li>Information We Collect</li>
            <ol type="a">
              <li>Personal Information</li>
              <ul>
                <li>
                  When you create an account, we may collect your username,
                  email address, and other relevant information.
                </li>
                <li>
                  During gameplay, we may collect information about your in-game
                  activities, achievements, and preferences.
                </li>
              </ul>
              <li>Technical Information</li>
              <ul>
                <li>
                  We may collect technical information such as device
                  information, IP addresses, and logs to ensure a smooth gaming
                  experience.
                </li>
              </ul>
            </ol>
            <li>How We Use Your Information</li>
            <ol type="a">
              <li>Providing and Improving the Service</li>
              <ul>
                <li>
                  We use your information to deliver, maintain, and improve
                  FollowMeBet, including fixing technical issues and optimizing
                  performance.
                </li>
              </ul>
              <li>Communication</li>
              <ul>
                <li>
                  We may use your email address to send important updates,
                  notifications, and announcements related to the app.
                </li>
              </ul>
              <li>Personalization</li>
              <ul>
                <li>
                  We use collected data to personalize your gaming experience,
                  including suggesting games, features, and content based on
                  your preferences.
                </li>
              </ul>
            </ol>
            <li>Sharing Your Information</li>
            <ol type="a">
              <li>With Other Users</li>
              <ul>
                <li>
                  Some features of FollowMeBet involve interaction with other
                  users. In such cases, limited information may be shared to
                  facilitate the gaming experience.
                </li>
              </ul>
              <li>Third-Party Services</li>
              <ul>
                <li>
                  We may use third-party services for analytics, advertising,
                  and other purposes. These services may collect and use
                  information in accordance with their own privacy policies.
                </li>
              </ul>
            </ol>
            <li>Data Security</li>
            <ul>
              <li>
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, and destruction.
              </li>
            </ul>
            <li>Your Choices</li>
            <ol type="a">
              <li>Account Information</li>
              <ul>
                <li>
                  You can review and update your account information through the
                  app settings.
                </li>
              </ul>
              <li>Opt-Out</li>
              <ul>
                <li>
                  You can opt-out of promotional communications by following the
                  instructions provided in the messages or contacting us
                  directly.{" "}
                </li>
              </ul>
            </ol>
            <li>Children's Privacy</li>
            <ul>
              <li>
                FollowMeBet is not intended for individuals under the age of 18.
                If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us to
                request its removal.
              </li>
            </ul>
            <li>Changes to This Privacy Policy</li>
            <ul>
              <li>
                We may update this privacy policy from time to time. Any changes
                will be effective immediately upon posting the revised policy on
                our website or within the app.
              </li>
            </ul>
            <li>Contact Us</li>
            <ul>
              <li>If you have any questions, concerns, or requests regarding this privacy policy, please contact us at <a href="mailto: info@followmebet.com.ng"> info@followmebet.com.ng</a></li>
            </ul>
          </ol>
        </div>
      </div>
    </Wrapper>
    </>
  
  );
};

export default Condition;
