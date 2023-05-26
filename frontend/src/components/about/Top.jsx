import React from "react";
import styled from "styled-components";
const Top = () => {
  return (
    <div
      className="w-90 auto grid grid-2 item-center gap-4 py-2 justify-space"
      style={{ gridGap: "7rem" }}
    >
      <div className="w-100">
        <img
          src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/about-avada-car-dealer-3-700x700.jpg"
          alt=""
          className="w-100"
        />
      </div>
      <div className="w-100 flex column gap-4">
        <div className="w-100 flex gap-3 column">
          <h2
            className="fs-36 text-extra-bold text-dark"
            style={{ fontSize: "36px" }}
          >
            Building A Trusted Vehicle Marketplace
          </h2>
          <h4 className="fs-24 family1 text-light text-dark">
            Trusted Dealer Network – Buy With Confidence
          </h4>
          <h4
            className="fs-18 text-light w-90 family1 text-dark"
            style={{ lineHeight: "1.6" }}
          >
            Turpis egestas tempus urna. Ipsum nunc aliquet biben dum enims
            facilisis auctor urna nunc id cursus metus. Sed id semper risus in
            hendrerit gravida. Sagittis purus sit amet volutpat sed consequat.
          </h4>
        </div>
        <div className="w-100 flex gap-2 column">
          <div className="w-100">
            <button className="fs-18 text-white text-bold red py-2 px-2">
              Latext Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
