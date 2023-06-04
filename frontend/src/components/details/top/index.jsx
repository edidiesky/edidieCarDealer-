import React from "react";
import styled from "styled-components";
import { Banner } from "../../common";
import DetailsTopLeft from "./DetailsTopLeft";
import DetailsTopRight from "./DetailsTopRight";
import { useSelector, useDispatch } from "react-redux";
export default function DeatailsTopindex() {
  const x = { price: "1500", percentage: "5" };
  const { productDetails } = useSelector((store) => store.product);
  return (
    <DetailsTopIndexContainer>
      <Banner
        title={productDetails?.title}
        step1={"Home"}
        step2={productDetails?.title}
      />
      <div className="detailsTopWrapper w-90 auto">
        <DetailsTopLeft />
        <DetailsTopRight />
      </div>
    </DetailsTopIndexContainer>
  );
}

const DetailsTopIndexContainer = styled.div`
  width: 100%;

  .detailsTopWrapper {
    padding: 2rem 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    padding-top: 7rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
