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
        src="data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__clip0_75_23031%29%22%20fill%3D%22rgba%2835%2C100%2C196%2C1%29%22%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M839.644%20954C1138.37%20793.549%201337%20508.902%201337%20184.5c0-63.218-7.54-124.926-21.9-184.5H1920v954H839.644zm0%200C676.842%201041.44%20484.311%201092%20278%201092c-584.87%200-1059-406.302-1059-907.5S-306.87-723%20278-723c511.098%200%20937.63%20310.269%201037.1%20723H0v954h839.644z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1011.55%20954C1221.42%20793.95%201353%20564.007%201353%20308.5c0-108.584-23.76-212.552-67.2-308.5H1920v954h-908.45zm0%200c-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567H0v954h1011.55z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0_75_23031%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
        alt=""
        className="image2"
      />
      <img
        src="/images/dark-content-bg-car1.png"
        alt="backimage"
        className="BackImage"
      />
      <div className="ChoiceWrapper w-85 auto">
        <div className="ChoiceTopWrapper">
          <img
            src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/header-icon.png"
            className="sidebarIcon"
            alt="sidebarIcon"
          />
          <h2>Why Choose Us</h2>
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
                <h3 className="text-start">
                  {x.title}
                  <span className="choiceSpan text-start">{x.desc}</span>
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

  background: #081b36;
  position: relative;
  .image2 {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(-1, 1);
    opacity: 0.17;
  }
  .BackImage {
    position: absolute;
    height: 100%;
    left: -12%;
    top: 0;
    width: 100%;
    z-index: 400;
    @media (max-width: 480px) {
      left: -20%;
    }
  }

  .ChoiceWrapper {
    padding: 10rem 0;
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
          text-align: start;

          .choiceSpan {
            display: block;
            padding-top: 1.8rem;
            font-size: 1.8rem;
            font-weight: 400;
            font-family: "Barlow", sans-serif;
            line-height: 30.45px;
            color: rgba(255, 255, 255, 0.75);
          }
        }
      }
    }
  }
`;
