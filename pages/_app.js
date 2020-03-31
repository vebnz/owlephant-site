import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../public/assets/styles.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}