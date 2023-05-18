import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import { HiOutlineShoppingCart } from "react-icons/hi";

import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const SidebarWrapper = styled.div`
  width: 247px;
  background: var(--white);
  height: 100vh;
  top: 0%;
  position: sticky;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 780px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 2rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &.List1 {
        padding-top: 2rem;
        padding-bottom: 0;
        border-top: 1px solid #ccc;
        border-bottom: none;
      }
      h3 {
        color: #777;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem 0;
        text-align: start;
      }
      .nav-link {
        padding: 8px 16px;
        font-size: 1.5rem;
        height: 4.2rem;
        border-radius: 30px;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--dark-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.4rem;
        font-family: "Barlow", sans-serif;

        &:hover {
          background: var(--blue-2);
          color: #fff;
        }
        svg {
          font-size: 2rem;
        }
        &.active {
          background: rgb(232 239 249 / 77%);
          position: relative;
          color: var(--blue-2);
        }
      }
    }
  }
`;

export const sidebarData = [
  // {
  //   id: 1,
  //   icon1: <MdDashboard />,
  //   title: "Dashboard",
  //   path: "statistics",
  // },
  {
    id: 2,
    icon1: <HiOutlineShoppingCart />,
    title: "Products",
    path: "product",
  },
  {
    id: 3,
    icon1: <MdAddBusiness />,
    title: "Add Products",
    path: "create-product",
  },
  { id: 4, icon1: <BsCollection />, title: "Orders", path: "order" },
  { id: 5, icon1: <HiUsers />, title: "Customers", path: "customer" },
  { id: 6, icon1: <CgProfile />, title: "Profile", path: "profile" },
];

export const sidebarData2 = [
  { id: 2, icon1: <FiLogOut />, title: "Log Out", path: "" },
];
export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <NavLink to={"/"} className="imageWrapper">
          <img
            src="/images/dealer1.png"
            className="sidebarIcon"
            alt="sidebarIcon"
          />
        </NavLink>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={`${x.path}`}
                key={x.id}
              >
                {x.icon1}
                {x.title}
              </NavLink>
            );
          })}
        </div>

        <div className="list List1">
          {sidebarData2.map((x) => {
            return (
              <div className="nav-link" key={x.id}>
                {x.icon1} {x.title}
              </div>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}
