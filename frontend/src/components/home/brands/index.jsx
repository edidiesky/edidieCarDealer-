import React from "react";
import styled from "styled-components/macro";

const data = [
  { id: 1, icon: "../images/logo-brand-1.png" },
  { id: 2, icon: "../images/logo-brand-2.png" },
  { id: 3, icon: "../images/logo-brand-3.png" },
  { id: 4, icon: "../images/logo-brand-4.png" },
  { id: 5, icon: "../images/logo-brand-5.png" },
  { id: 6, icon: "../images/logo-brand-6.png" },
  { id: 7, icon: "../images/logo-brand-7.png" },
  { id: 8, icon: "../images/logo-brand-8.png" },
];
export default function Brandindex() {
  return (
    <BrandContainer>
      <div className="brandWrapper w-100 auto">
        <div className="brandTopWrapper">
          <img
            src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/header-icon.png"
            className="sidebarIcon"
            alt="sidebarIcon"
          />
          <div className="hidden">
            <h2 data-aos="fade-up" data-aos-duration="800">
              Explore Popular Brands
            </h2>
          </div>
          <p data-aos="fade" data-aos-duration="1000" className="fs-20 family1">
            Incididunt labore dolore magna aliqua enim veniam quis nostrud
            tempor tempor adispecing miny exercitation ullamco laboris nisiut
            aliquip.
          </p>
        </div>
        <div className="brandIconWrapper w-85 auto">
          {data.map((x, index) => {
            return (
              <div className="w-100 hidden">
                <div
                  className="iconwrapper"
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                  key={x.id}
                >
                  <img
                    src={x.icon}
                    className="iconWrapperimage"
                    alt="Brand-icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BrandContainer>
  );
}

const BrandContainer = styled.div`
  width: 100%;
  padding: 16rem 0;
  background: #081b36;
  @media (max-width: 580px) {
    padding: 8rem 0;
  }
  .brandWrapper {
    display: flex;
    flex-direction: column;
    gap: 7rem;
    .brandTopWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      gap: 2rem;
      @media (max-width: 580px) {
        gap: 1rem;
      }
      justify-content: center;
      .sidebarIcon {
        width: 10rem;
      }
      h2 {
        font-size: 5rem;
        font-weight: 700;
        color: var(--white);
        width: 100%;
        text-align: center;
      }
      p {
        color: var(--grey-1);
        font-weight: 400;
        line-height: 1.6;
        width: 60%;
        margin: 0 auto;
        font-family: "Barlow", sans-serif;
        text-align: center;
        @media (max-width: 780px) {
          width: 95%;
        }
      }
    }
    .brandIconWrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      @media (max-width: 980px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        width: 90%;
      }
      @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        width: 90%;
      }
      .iconwrapper {
        border: 1px solid rgba(255, 255, 255, 0.1);
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 480px) {
          height: 15rem;
        }
        &:hover {
          .iconWrapperimage {
            filter: brightness(100%);
          }
        }
        .iconWrapperimage {
          width: 10rem;
          color: #333;
          transition: all 0.4s ease;
          filter: brightness(40%);
          @media (max-width: 480px) {
            width: 7rem;
          }
        }
      }
    }
  }
`;
