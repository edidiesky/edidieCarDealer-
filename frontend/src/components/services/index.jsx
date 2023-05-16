import React from "react";
import { Banner } from "../common";
import { offerData } from "../../data/services";

export default function ServicesIndex() {
  return (
    <div className="w-100 flex column gap-2">
      <Banner
        title={"Workshop Services"}
        step1={"Home"}
        step2={"Workshop Services"}
      />
      <div className="py-6 w-90 auto flex column gap-4">
        {offerData.map((x, index) => {
          return (
            <div
              className="w-100 grid grid-2 item-center gap-4 py-2 justify-space"
              key={index}
            >
              <div className="w-100">
                <img src={x.image} alt="" className="w-100" />
              </div>
              <div className="w-100 flex column gap-2">
                <div className="w-100 flex gap-2 column">
                  <h4 className="fs-18 family1 text-light text-red">
                    {x.subInfo}
                  </h4>
                  <h2 className="fs-35 text-extra-bold text-dark">
                    {x.subInfo}
                  </h2>
                </div>
                <div className="w-100 flex gap-2 column">
                  <h3 className="fs-18" style={{ fontWeight: "500" }}>
                    {x.terms}
                  </h3>
                  <p className="fs-18 text-light family1 text-dark">
                    {x.description}
                  </p>
                  <div className="w-100">
                    <button className="fs-18 text-white text-bold red py-2 px-2">
                      Get a free quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
