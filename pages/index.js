import React, { useState } from "react";

import Head from "next/head";
import HeroSection from "~/src/components/HeroSection";
import HowItWorks from "~/src/components/HowItWorksSection";
import PrivacyCommitment from "../src/components/PrivacyCommitment/index";
import { Waypoint } from "react-waypoint";
import Accessibility from "../src/components/Accessibility";
import WhyIs from "../src/components/WhyIs";
import Footer from "../src/components/footer";

const Home = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
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

      <Waypoint
        topOffset={"5%"}
        bottomOffset={"100%"}
        onEnter={() => {
          console.log("bottom enter hero");
          props.setHeaderDark(true);
        }}
        onLeave={() => {
          console.log("bottom left hero");
          props.setHeaderDark(false);
        }}
      >
        <HeroBlock />
      </Waypoint>

      <Waypoint
        topOffset={"5%"}
        bottomOffset={"100%"}
        onEnter={() => {
          console.log("bottom enter howitworks");
          props.setHeaderDark(false);
        }}
        onLeave={() => {
          console.log("bottom left howitworks");
          props.setHeaderDark(true);
        }}
      >
        <HowItWorksBlock />
      </Waypoint>

      <Waypoint
        topOffset={"5%"}
        bottomOffset={"100%"}
        onEnter={() => {
          console.log("bottom onenter privacy");
          props.setHeaderDark(true);
        }}
        onLeave={() => {
          console.log("bottom left privacy");
          props.setHeaderDark(false);
        }}
      >
        <WhyIs />
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
        <Accessibility />
      </Waypoint>

      <Waypoint
        topOffset={"5%"}
        bottomOffset={"100%"}
        onEnter={() => {
          console.log("bottom onenter privacy");
          props.setHeaderDark(true);
        }}
        onLeave={() => {
          console.log("bottom left privacy");
          props.setHeaderDark(false);
        }}
      >
        <PrivacyBlock />
      </Waypoint>
    </React.Fragment>
  );
};

export default Home;
