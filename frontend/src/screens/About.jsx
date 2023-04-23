import React from "react";
import AboutIndex from "../components/about";
import { Footer, Newsletter } from "../components/common";

export default function About() {
  return (
    <div>
      <AboutIndex />
      <Newsletter />
      <Footer />
    </div>
  );
}
