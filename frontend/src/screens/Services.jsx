import React, { useEffect } from "react";
import ServicesIndex from "../components/services";
import { Footer, Newsletter } from "../components/common";
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ServicesIndex />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Services;
