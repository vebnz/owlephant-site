import React, { useState } from "react";

import Head from "next/head";
import OwlNavbar from "~/src/components/navbar";
import HeroSection from "~/src/components/HeroSection";
import HowItWorks from "~/src/components/HowItWorksSection";
import PrivacyCommitment from '../src/components/PrivacyCommitment/index';


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => setIsNavOpen(!isOpen);
  return (
    <React.Fragment>
      <Head>
        <title>Owlephant - Shhh....sleeping</title>
      </Head>
      <OwlNavbar />
      <HeroSection />
      <HowItWorks />
      <PrivacyCommitment />
    </React.Fragment>
  );
};

export default Home;
