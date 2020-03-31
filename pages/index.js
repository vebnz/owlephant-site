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
  const HeroBlock = React.forwardRef((props, ref) => {
    return <HeroSection innerRef={ref} {...props} />;
  });

  const HowItWorksBlock = React.forwardRef((props, ref) => {
    return <HowItWorks innerRef={ref} {...props} />;
  });
  const PrivacyBlock = React.forwardRef((props, ref) => {
    return <PrivacyCommitment innerRef={ref} {...props} />;
  });

  return (
    <React.Fragment>
      <Head>
        <title>Owlephant - Shhh....sleeping</title>
      </Head>
      <div className="">
        <OwlNavbar dark={headerDark} />

        <Waypoint
          topOffset={"5%"}
          bottomOffset={"100%"}
          onEnter={() => {
            console.log("bottom enter hero");
            setHeaderDark(true);
          }}
          onLeave={() => {
            console.log("bottom left hero");
            setHeaderDark(false);
          }}
        >
          <HeroBlock />
        </Waypoint>

        <Waypoint
          topOffset={"5%"}
          bottomOffset={"100%"}
          onEnter={() => {
            console.log("bottom enter howitworks");
            setHeaderDark(false);
          }}
          onLeave={() => {
            console.log("bottom left howitworks");
            setHeaderDark(true);
          }}
        >
          <HowItWorksBlock />
        </Waypoint>

        <Waypoint
          topOffset={"5%"}
          bottomOffset={"100%"}
          onEnter={() => {
            console.log("bottom onenter privacy");
            setHeaderDark(true);
          }}
          onLeave={() => {
            console.log("bottom left privacy");
            setHeaderDark(false);
          }}
        >
          <PrivacyBlock />
        </Waypoint>

        <Waypoint
          topOffset={"5%"}
          bottomOffset={"100%"}
          onEnter={() => {
            console.log("bottom onenter howitworks2");
          }}
          onLeave={() => {
            console.log("bottom left howitworks2");
          }}
        >
          <HowItWorks />
        </Waypoint>
      </div>
    </React.Fragment>
  );
};

export default Home;
