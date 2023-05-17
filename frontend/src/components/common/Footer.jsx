import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { SiFlickr } from "react-icons/si";
const iconsListData = [
  { id: 1, icon: <ImFacebook /> },
  { id: 2, icon: <BsTwitter /> },
  { id: 3, icon: <BsInstagram /> },
  { id: 4, icon: <AiFillYoutube /> },
  { id: 4, icon: <SiFlickr /> },
];

const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Latest Offers", path: "/product" },
  { id: 3, title: "Car Buying Guide", path: "" },
  { id: 4, title: "Workshop Services", path: "auto-news" },
  { id: 5, title: "Auto News", path: "avada/contact" },
  { id: 6, title: "Investor relations", path: "avada/contact" },
  { id: 7, title: "Contact", path: "avada/contact" },
];

export default function Footer() {
  return (
    <FooterContainer>
      <img
        src="data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__clip0_75_23031%29%22%20fill%3D%22rgba%2835%2C100%2C196%2C1%29%22%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M839.644%20954C1138.37%20793.549%201337%20508.902%201337%20184.5c0-63.218-7.54-124.926-21.9-184.5H1920v954H839.644zm0%200C676.842%201041.44%20484.311%201092%20278%201092c-584.87%200-1059-406.302-1059-907.5S-306.87-723%20278-723c511.098%200%20937.63%20310.269%201037.1%20723H0v954h839.644z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1011.55%20954C1221.42%20793.95%201353%20564.007%201353%20308.5c0-108.584-23.76-212.552-67.2-308.5H1920v954h-908.45zm0%200c-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567H0v954h1011.55z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0_75_23031%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
        alt=""
        className="image2"
      />
      <div className="footerWrapper w-90 auto">
        <div className="footerTop flex item-center gap-2">
          <button className="callBtn flex gap-2 item-center">
            <FaPhoneAlt fontSize={"25px"} />
            Call (202) 1155-909
          </button>
          <img src="../images/car-dealer-footer-logo-2x.png" alt="images" />
          <ul className="socialListWrapper flex item-center">
            {iconsListData.map((x) => {
              return (
                <li
                  className="icons"
                  key={x.id}
                  data-aos="slide-up"
                  data-aos-duration="700"
                >
                  {x.icon}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="footerCenter">
          <div className="footerCenterWrapper">
            {data.map((x) => {
              return <li key={x.id}>{x.title}</li>;
            })}
          </div>
        </ul>
        <div className="footerBottom"></div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  background: #081b36;
  z-index: 70;
  position: relative;
  .image2 {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(-1, 1);
    opacity: 0.17;
  }
  .footerWrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 3000;
    .footerCenter {
      width: 100%;
      padding: 6rem 0;
      border-bottom: 0.7px solid rgba(255, 255, 255, 0.1);
      .footerCenterWrapper {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        @media (max-width: 780px) {
          width: 95%;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 6rem;
        }
        li {
          font-size: 2rem;
          font-weight: 400;
          color: #fff;
          width: 100%;
          text-align: center;
          font-family: "Barlow", sans-serif;
        }
      }
    }
    .footerTop {
      padding: 6rem 0;
      border-bottom: 0.7px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      padding-top: 15rem;
      @media (max-width: 780px) {
        width: 95%;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5rem;
        place-items: center;
        padding-bottom: 4rem;
        padding-top: 18rem;
      }

      .callBtn {
        border: none;
        outline: none;
        border-radius: 40px;
        background: transparent;
        font-size: 2.7rem;
        font-weight: 700;
        color: #fff;
        transition: all 0.5s;
        cursor: pointer;
        text-align: start;
        font-family: inherit;
        justify-content: center;
      }
      .socialListWrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: flex-end;
        @media (max-width: 1080px) {
          justify-content: flex-start;
        }
        .icons {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          background: var(--blue-2);
          font-size: 2.7rem;
          @media (max-width: 780px) {
            width: 4rem;
            height: 4rem;
          }
          &:nth-child(2) {
            background: #55acee;
          }
          &:nth-child(3) {
            background: #3f729b;
          }
          &:nth-child(4) {
            background: var(--red);
            svg {
              color: #fff;
            }
          }
          svg {
            color: #fff;
            width: 50%;
            height: 50%;
          }
          &::child(1) {
            background: #fff;
          }
        }
      }
      img {
        width: 16rem;
        margin: 0 auto;
        @media (max-width: 980px) {
          width: 12rem;
        }
      }
    }
  }
`;
