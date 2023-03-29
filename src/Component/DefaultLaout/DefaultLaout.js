import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLaout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
