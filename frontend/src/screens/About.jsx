import React from "react";
import AboutIndex from "../components/about";
import LocationIndex from "../components/home/location";
import { Banner4 } from "../components/common";
import ChoiceIndex from "../components/home/choice";

export default function About() {
  return (
    <div className="flex column">
      <AboutIndex />
      <div className="w-100 flex column gap-2" style={{ paddingTop: "3rem" }}>
        <ChoiceIndex />
        <Banner4 />
        <LocationIndex />
      </div>
    </div>
  );
}
