import React, { useState } from "react";
import "../public/assets/styles.css";
import OwlNavbar from "~/src/components/navbar";
import Footer from "../src/components/footer";

const MyApp = ({ Component, pageProps }) => {
  const [headerDark, setHeaderDark] = useState(true);

  return (
    <div>
      <OwlNavbar dark={headerDark} />
      <Component {...pageProps} setHeaderDark={dark => setHeaderDark(dark)} />
      <Footer />
    </div>
  );
};

export default MyApp;
