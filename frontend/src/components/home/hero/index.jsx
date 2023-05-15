import React from "react";
import styled from "styled-components";

export default function Heroindex() {
  return (
    <HeroContainer>
      <div className="herowrapper">
        <img src="/images/heroImage.jpg" alt="" className="heroImage" />
        <div className="gradient"></div>
        <div className="heroSection">
          <div className="hidden">
            <h1
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="300"
            >
              Dreams Come True
            </h1>
          </div>
          <div className="hidden">
            <h2
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="350"
            >
              Buy Your Dream Car Today <br /> Starting From $2,000
            </h2>
          </div>
          <div className="btnwrapper hidden">
            <div className="hidden">
              <button
                data-aos="fade-in"
                data-aos-duration="1800"
                data-aos-delay="300"
                className="btn"
              >
                Search
              </button>
            </div>
            <div className="hidden">
              <button
                data-aos="fade-in"
                data-aos-duration="1800"
                data-aos-delay="400"
                className="btn btn-1"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 400;
    background-color: linear-gradient(90deg, #081b36 30%,hsla(215,74%,12%,calc(100% - 100%)) 65%);
  }
  .herowrapper {
    width: 100%;
    position: relative;
    min-height: 55rem;
    display: grid;
    place-items: center;
    @media (max-width: 780px) {
      min-height: 70rem;
    }
    .heroImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }

    .heroSection {
      width: 60%;
      max-width: 1100px;
      margin: 0 auto;
      z-index: 12460;
      display: flex;
      justify-content: center;
      padding: 8rem 0;
      flex-direction: column;
      gap: 1.7rem;
      @media (max-width: 1080px) {
        width: 90%;
      }
      @media (max-width: 780px) {
        width: 90%;
      }
      h1 {
        color: #fff;
        font-size: 6.5rem;
        font-weight: 700;
        z-index: 500;
        text-align: start;
      }
      h2 {
        color: #fff;
        font-size: 4rem;
        font-weight: 400;
        z-index: 500;
        line-height: 1.2;
        @media (max-width: 780px) {
          font-size: 3rem;
        }
      }
      .btnwrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 0;
        @media (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .btn {
          width: 200px;
          padding: 2.3rem;
          cursor: pointer;
          font-size: 2rem;
          font-weight: 400;
          color: #fff;
          background: var(--red);
          border: none;
          outline: none;
          z-index: 400;
          text-transform: uppercase;
          transition: all 0.3s;

          &.btn-1 {
            background: #fff;
            color: var(--dark-1);
          }
          &:hover {
            background: var(--blue-1);
            color: #fff;
          }
        }
      }
    }
  }
`;
