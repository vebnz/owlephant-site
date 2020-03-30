import React from 'react';

import Head from 'next/head'
import UnderConstruction from "react-under-construction";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Owlephant - Shhh....sleeping</title>
    </Head>
    <UnderConstruction
      background={{ color: "#102a3d", textColor: "#fff" }}
      logo={{ src: "/assets/logo.svg" }}
      title={{ text: "owlephant" }}
      description={{ text: "Building the elephant as we speak..." }}
      
      links={[
        {
          url: "https://www.facebook.com/",
          image: "https://image.flaticon.com/icons/svg/220/220200.svg"
        },
        {
          url: "https://www.twitter.com/",
          image: "https://image.flaticon.com/icons/svg/145/145812.svg"
        },
        {
          url: "https://www.linkedin.com/",
          image: "https://image.flaticon.com/icons/svg/145/145807.svg"
        },
        {
          url: "mailto:someone@example.com",
          image: "https://image.flaticon.com/icons/svg/321/321817.svg"
        }
      ]}
    />
  </React.Fragment>
);

export default Home
