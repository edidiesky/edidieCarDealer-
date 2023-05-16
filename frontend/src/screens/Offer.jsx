import React, { useEffect } from "react";
import OfferIndex from "../components/offer";
import { Footer, Newsletter } from "../components/common";

export default function Offer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <OfferIndex />
      <Newsletter />
      <Footer />
    </div>
  );
}
