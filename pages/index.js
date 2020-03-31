import React, { useState } from "react";

import Head from "next/head";
import OwlNavbar from "~/src/components/navbar";
import HeroSection from "~/src/components/HeroSection";
import HowItWorks from "~/src/components/HowItWorksSection";
import PrivacyCommitment from "../src/components/PrivacyCommitment/index";
import { Waypoint } from "react-waypoint";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [headerDark, setHeaderDark] = useState(true);

  const navToggle = () => setIsNavOpen(!isOpen);
  return (
    <React.Fragment>
      <Head>
        <title>Owlephant - Shhh....sleeping</title>
      </Head>
      <div className="">
        <OwlNavbar dark={headerDark}/>
        <Waypoint topOffset={70} onLeave={()=> setHeaderDark(true)}/>
          <HeroSection />
        
        <Waypoint topOffset={70} onLeave={()=> setHeaderDark(false)}/>
          <HowItWorks />
        
        <Waypoint topOffset={70} onLeave={()=> setHeaderDark(true)}/>
          <PrivacyCommitment />
        
      </div>
    </React.Fragment>
  );
};

export default Home;
