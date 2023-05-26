import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineShoppingCart, HiUsers } from "react-icons/hi";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { offSidebar } from "../../../Features";
export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "statistics",
  },
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
export default function SmallSidebar() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.toggle);
  return (
    <SmallSidebarContent className={sidebar ? "active" : ""}>
      <div className="gradient1" onClick={() => dispatch(offSidebar())}></div>

      <div className="smallSidebarWrapper">
        <div className="barWrapper1">
          <RxCross2 onClick={() => dispatch(offSidebar())} />
        </div>
        <div className="flex column gap-2">
          {sidebarData.map((x) => {
            return (
              <NavLink
                to={`${x.path}`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                key={x.id}
                onClick={() => dispatch(offSidebar())}
              >
                {x.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </SmallSidebarContent>
  );
}


const SmallSidebarContent = styled.div`
  position: fixed;
  left: 0;
  z-index: 2200;
  transition: all 0.6s;
  width: 100%;
  background: var(--white);
  height: 100vh;
  top: 0%;
  left: -100%;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  &.active {
    left: 0;
  }
  @media (min-width: 750px) {
    display: none;
  }
  .gradient1 {
    background-color: #3f3f3fc2;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .barWrapper1 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    @media (min-width: 780px) {
      display: none;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: #222;
    }
  }
  .smallImage {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .smallSidebarWrapper {
    width: 280px;
    display: flex;
    flex-direction: column;
    z-index: 2000;
    gap: 2rem;
    background-color: #fff;
    height: 100vh;
    padding-top: 8rem;
    position: relative;
     @media (max-width: 380px) {
      width: 260px;
    }
    a {
      padding: 12px 18px;
      font-size: 1.5rem;
      text-transform: capitalize;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: 400;
      margin: 0 auto;
      width: 100%;
      color: var(--dark-1);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.4rem;
      z-index: 200;
      &:hover {
        background: #163765f2;
        color: #fff;
      }
      svg {
        font-size: 2rem;
      }
      &.active {
        background: #e8eff9;
        position: relative;

        color: var(--dark-1);
      }
    }
  }
`;
