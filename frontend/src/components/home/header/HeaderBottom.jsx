import React from "react";
import styled from "styled-components/macro";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

import { RiTimeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const data = [
  { id: 1, title: "32 Stimple Rd, Grand Pierce, FL", icons: <ImLocation /> },
  { id: 2, title: "cars@avada-dealers.com", icons: <MdEmail /> },
];
const iconsListData = [
  { id: 1, icon: <FaFacebook /> },
  { id: 2, icon: <FaInstagram /> },
  { id: 3, icon: <FaYoutube /> },
  { id: 4, icon: <FaPinterest /> },
];

export default function HeaderBottom() {
  return (
    <HeaderBottomContainer>
      <div className="HeaderBottomWrapper w-90 auto">
        <ul className="locationListWrapper">
          {data.map((x) => {
            return (
              <li key={x.id}>
                {x.icons} {x.title}
              </li>
            );
          })}
          <li>
            <RiTimeFill /> Monday-Friday: 8am to 9pm
          </li>
        </ul>
        <ul className="socialListWrapper">
          {iconsListData.map((x) => {
            return (
              <li className="icons" key={x.id}>
                {x.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </HeaderBottomContainer>
  );
}

const HeaderBottomContainer = styled.div`
  width: 100%;
  padding: 1.6rem 0;

  display: flex;
  align-items: center;
  background: var(--white);
  @media (max-width: 780px) {
    width: 90%;
  }
  .HeaderBottomWrapper {
    display: flex;
    align-items: center;
    background: var(--white);
    justify-content: space-between;
    @media (max-width: 480px) {
      width: 100%;
      flex-direction: column;
      padding: 3rem 2.4rem;
      gap: 2rem;
      align-items: flex-start;
    }
    .socialListWrapper {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      .icons {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        background: var(--blue-2);
        &:nth-child(2) {
          background: #55acee;
        }
        &:nth-child(3) {
          background: #3f729b;
        }
        &:nth-child(4) {
          background: var(--red);
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
    .locationListWrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem;
      @media (max-width: 480px) {
        margin: 0;
        text-align: start;
      }
      li {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--dark-1);
        transition: all 0.5s;
        text-align: start;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-family: "Barlow", sans-serif;
        svg {
          font-size: 1.8rem;
        }
        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;
