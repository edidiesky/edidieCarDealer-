import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

const sidebarData = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Product", path: "/car-dealership/inventory" },
  { id: 3, title: "About Us", path: "/car-dealership/about" },
  { id: 4, title: "Latest Offer", path: "/car-dealership/latest-offers" },
  { id: 5, title: "Contact", path: "/car-dealership/contact" },
];
export default function SmallSidebar({ side, toggleSidebar }) {
  return (
    <SmallSidebarContent className={side ? "active" : ""}>
      <div className="barWrapper1">
        <RxCross2 onClick={toggleSidebar} />
      </div>
      <div className="gradient3" onClick={toggleSidebar}></div>
      <div className="smallSidebarWrapper family1">
        {sidebarData.map((x) => {
          return (
            <Link to={`${x.path}`} key={x.id} onClick={toggleSidebar}>
              {x.title}
            </Link>
          );
        })}
      </div>
    </SmallSidebarContent>
  );
}

const SmallSidebarContent = styled.div`
  width: 100vw;
  position: fixed;
  left: 0;
  top: -200%;

  z-index: 123290200;
  background-color: #282626;
  transition: all 0.6s;
  &.active {
    top: 0;
  }
  @media (max-width: 350px) {
    top: -120%;
  }
  .barWrapper1 {
    width: 100%;
    position: absolute;
    top: -1%;
    right: 1%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2rem 3rem;
    cursor: pointer;
    @media (min-width: 780px) {
      display: none;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: #fff;
    }
  }
  .smallImage {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .gradient3 {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .smallSidebarWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 400;
    padding-top: 6rem;
    a {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 2rem;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      font-size: 2.4rem;
      font-weight: 400;
      color: #fff;
      z-index: 300;
      border-radius: 5px;
      transition: all 0.3s;
      cursor: pointer;

      &.sidebarTop2List {
        justify-content: center;
      }
      &:hover {
        background-color: #1f1d1d51;
        color: var(--blue-1);
      }
      @media (max-width: 780px) {
        font-size: 1.8rem;
      }
    }
  }
`;
