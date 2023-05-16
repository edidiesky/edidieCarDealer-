import React from "react";
import styled from "styled-components";
import Links from "./Links";
export default function Banner({ title, subtitle, type, step1, step2, step3 }) {
  return (
    <ProductBannerContainer>
      <div className="productBannerWrapper">
        <img src="/images/car-bg-stats.jpg" alt="" className="heroImage" />
        <div className="gradient"></div>
        <div className="productSectionTitle">
          <h2>{title}</h2>
          <Links step1={step1} step2={step2} step3={step3} />
        </div>
      </div>
    </ProductBannerContainer>
  );
}

const ProductBannerContainer = styled.div`
  width: 100%;
  .productBannerWrapper {
    width: 100%;
    position: relative;
    min-height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 780px) {
      min-height: 35rem;
    }
    .heroImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }
    .herogradient {
      background: linear-gradient(to right, #081b36, #4b172f);
      position: absolute;
      top: 0;
      opacity: 0.8;
      width: 100%;
      height: 100%;
      z-index: 50;
    }
    .productSectionTitle {
      width: 80%;
      max-width: 1100px;
      margin: 0 auto;
      z-index: 60;
      display: flex;
      justify-content: center;
      padding: 10rem 0;
      height: 100%;
      align-items: center;
      flex-direction: column;
      gap: 1.7rem;
      z-index: 30000;
      @media (max-width: 1080px) {
        width: 90%;
      }
      @media (max-width: 780px) {
        width: 90%;
      }
      h2 {
        color: #fff;
        font-size: 4.4rem;
        font-weight: 700;
        z-index: 500;
        line-height: 1.2;
        text-align: center;

        @media (max-width: 780px) {
          font-size: 5rem;
        }
      }
    }
  }
`;
