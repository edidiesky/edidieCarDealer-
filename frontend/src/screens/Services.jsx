import React, { useEffect } from "react";
import ServicesIndex from "../components/services";
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ServicesIndex />
    </div>
  );
};

export default Services;
