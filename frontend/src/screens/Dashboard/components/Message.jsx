import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiFillWarning } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  return (
    <AlertModalContainer
      className={
        showAlert ? "active" : alertType === "danger" ? "active danger" : ""
      }
    >
      <div className={showAlert ? "alertWrapper active" : "alertWrapper"}>
        <div className="cross" onClick={() => dispatch(handleClearAlert())}>
          <RxCross2 />
        </div>
        <h4 className={alertType === "danger"?'active':''}>
          <span className="deleteSpan">
            {alertType === "danger" ? "Warning" : "Success"}
          </span>
          {alertText}
        </h4>
      </div>
    </AlertModalContainer>
  );
}

const AlertModalContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1300;
  width: 100%;
  display: flex;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    visibility: visible;
    opacity: 1;
  }

  .alertWrapper {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    z-index: 1300;
    background: #101c3a;
    padding: 1.6rem 3rem;
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 450px;
    position: relative;
    transform: scale(0.68);
    visibility: hidden;
    transition: all 0.5s;
    opacity: 0;
    &.active {
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    }
    .cross {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-2);
      }
    }
    svg {
      font-size: 2rem;
      color: #fff;
    }
    h4 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
      line-height: 2;
      &.active {
        color:var(--red);
      }
      .deleteSpan {
        font-weight: 400;
        display: block;
        font-size: 1.3rem;
        padding-bottom: 1rem;
      }
    }
  }
`;
