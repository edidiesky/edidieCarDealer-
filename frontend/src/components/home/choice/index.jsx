import React from "react";
import styled from "styled-components/macro";
import { FaCar } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaCar />,
    title: "30+ Years in Business",
    desc:
      "Incididunt labore dolore magn aliqua enim veniam nostrud exercitation miniys quise ullamco.",
  },
  {
    id: 2,
    icon: <FaCar />,
    title: "Locate Your Dream Car",
    desc:
      "Incididunt iqua enim veniam nostrud exercitation miniys quise ullamco.",
  },
  {
    id: 3,
    icon: <FaCar />,
    title: "All Vehicles Are Quality Assured",
    desc:
      "Incididunt labore dolore magn aliqua enim veniam nostrud exercitation miniys quise ullamco.",
  },
  {
    id: 4,
    icon: <FaCar />,
    title: "Low Prices & Big Savings",
    desc: "Enim veniam nostrud exercitation miniys quise ullamco.",
  },
];
export default function ChoiceIndex() {
  return (
    <ChoiceContainer>
      <img
        src="/images/dark-content-bg-car1.png"
        alt="backimage"
        className="BackImage"
      />
      <div className="ChoiceWrapper">
        <div className="ChoiceTopWrapper">
          <img
            src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/header-icon.png"
            className="sidebarIcon"
            alt="sidebarIcon"
          />
          <h2 data-aos="fade-up">Why Choose Us</h2>
          <p>
            Incididunt labore dolore magna aliqua enim veniam quis nostrud
            tempor tempor adispecing miny exercitation ullamco laboris nisiut
            aliquip.
          </p>
        </div>
        <div className="ChoiceIconWrapper">
          {data.map((x) => {
            return (
              <div className="iconwrapper" key={x.id}>
                <div className="iconContent">{x.icon}</div>
                <h3>
                  {x.title}
                  <span className="choiceSpan">{x.desc}</span>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </ChoiceContainer>
  );
}

const ChoiceContainer = styled.div`
  width: 100%;
  padding: 10rem 0;
  background: #081b36;
  position: relative;
  .BackImage {
    position: absolute;
    height: 100%;
    left: -10%;
    top: 0;
    width: 100%;
    z-index: 400;
    @media (max-width: 480px) {
      left: -20%;
    }
  }

  .ChoiceWrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    .ChoiceTopWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      gap: 2rem;
      justify-content: center;
      .sidebarIcon {
        width: 8rem;
      }
      h2 {
        font-size: 5rem;
        font-weight: 700;
        color: var(--white);
        width: 100%;
        text-align: center;
        z-index: 5900;
      }

      p {
        font-size: 2rem;
        color: var(--grey-1);
        font-weight: 400;
        line-height: 1.6;
        width: 60%;
        margin: 0 auto;
        font-family: "Barlow", sans-serif;
        text-align: center;
        @media (max-width: 780px) {
          line-height: 1.7;
          width: 95%;
        }
      }
    }
    .ChoiceIconWrapper {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 6rem;
      @media (max-width: 980px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .iconwrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
        @media (max-width: 380px) {
          flex-direction: column;
          justify-content: center;
        }
        .iconContent {
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          background-color: var(--red);
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            width: 60%;
            height: 60%;
            color: #fff;
          }
        }
        h3 {
          font-size: 2.4rem;
          font-weight: 700;
          color: #fff;
          flex: 1;
          text-align: center;

          .choiceSpan {
            display: block;
            padding-top: 1.8rem;
            font-size: 1.8rem;
            font-weight: 400;
            text-align: center;
            font-family: "Barlow", sans-serif;
            line-height: 30.45px;
            color: rgba(255, 255, 255, 0.75);
          }
        }
      }
    }
  }
`;
