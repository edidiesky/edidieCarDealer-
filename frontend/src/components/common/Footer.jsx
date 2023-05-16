import React from "react";
import styled from "styled-components";
import {
  FaPhoneAlt,
} from "react-icons/fa";
import {ImFacebook} from 'react-icons/im'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {SiFlickr} from 'react-icons/si'
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
  padding-top: 12rem;
  .footerWrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
      @media (max-width: 780px) {
        width: 95%;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5rem;
        place-items: center;
        padding-bottom: 4rem;
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
          width: 3.5rem;
          height: 3.5rem;
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
