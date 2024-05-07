import React from "react";
import { AboutUs, Features1, Features2, Hero } from "../components";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <>
      <Helmet>
        <title>FollowMeBet - unique gamming PlatForm</title>
        <meta name="description" content="FollowMeBet is a unique peer-to-peer Betting In
    Naija Way."/>
        <link rel="canonical" href="/"/>
      </Helmet>
    <div>
      
      <Hero />
      {/* <Features1 /> */}
      <Features2 />
      <AboutUs />
    </div>
    </>
    
  );
};

export default HomeLayout;
