import React, {useEffect } from "react";
import styled from "styled-components";
import { ToggleSidebar } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
const HeaderWrapper = styled.div`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 96px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  .icon {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
  }

  .headerContainer {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media (max-width: 380px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      gap: 2rem;
    }

    .headerLeft {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex: 1;
      justify-content: flex-end;
      @media (max-width: 380px) {
        justify-content: space-between;
        width: 100%;
      }

      .Icon {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 780px) {
          display: none;
        }
        svg {
          font-size: 3.4rem;
        }
      }
      .imageIcon {
        width: auto;
        height: 5rem;
      }
    }
    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--dark-1);
      flex: 1;
      text-align: start;
      padding: 0 1rem;
      .span1 {
        display: block;
        color: var(--grey-2);
        font-size: 1.3rem;
        font-weight: 500;
        padding-top: 1rem;
        font-family: "Barlow", sans-serif;
      }
    }
  }
`;

export default function Header({ text, subtext }) {
  const { thememode } = useSelector((store) => store.toggle);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = thememode;
    localStorage.setItem("theme", thememode);
  }, [thememode]);
  return (
    <HeaderWrapper>
      <div className="headerContainer">
        <h3>
          {text}
          <span className="span1">{subtext}</span>
        </h3>

        <div className="headerLeft">
          <div className="flex item-center gap-1">
            <h4 className="fs-14 family1">essien@gmail.com</h4>
            <div className="icon flex item-center justify-center">
              <BiUser fontSize={"26px"} color="var(--dark-1)" />
            </div>
          </div>
          <div className="Icon" onClick={() => dispatch(ToggleSidebar())}>
            <CgMenuRight />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
