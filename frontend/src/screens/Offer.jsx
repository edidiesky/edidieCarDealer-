import React, { useEffect } from "react";
import OfferIndex from "../components/offer";

export default function Offer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <OfferIndex />
    </div>
  );
}
