import React, { useState, useEffect } from "react";
import "../public/assets/styles.css";
import OwlNavbar from "~/src/components/navbar";
import Footer from "../src/components/footer";

import {
  initGoogleAnalytics,
  registerPageView
} from "~/src/components/Analytics";

const MyApp = ({ Component, pageProps }) => {
  const [headerDark, setHeaderDark] = useState(true);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
    registerPageView();
  });
  
  return (
    <div>
      <OwlNavbar dark={headerDark} />
      <Component {...pageProps} setHeaderDark={dark => setHeaderDark(dark)} />
      <Footer />
    </div>
  );
};

export default MyApp;
