import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : alertType === "danger"
          ? "gap-1 flex item-center danger justify-space"
          : "gap-1 flex item-center justify-space"
      }
    >
      <div className="flex w-100 item-center gap-1">
        {alertType === "danger" && <CgDanger className="fs-24" />}
        <h4 className="flex">{alertText}</h4>
      </div>
      <div className="flex-1">
        <div
          className="icon1 flex item-center justify-center"
          onClick={() => dispatch(handleClearAlert())}
        >
          <RxCross1 />
        </div>
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  width: 550px;
  padding: 1rem 2rem;
  min-height: 6rem;
  background-color: #222;
  position: fixed;
  z-index: 100000;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition: all 0.6s;
  /* transform: translate3d(0, -100px, 0); */
  top: -100%;
  &.active {
    top: 20px;
  }
  &.danger {
    background-color: var(--red);
    color: #fff;
    top: 20px;
  }
  @media (max-width: 780px) {
    width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
  .icon1 {
    cursor: pointer;
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 50%;
    transition: all 0.4s;
    &:hover {
      background-color: #f7f7f7;
      svg {
        color: #222;
      }
    }
    svg {
      font-size: 20px;
      color: var(--grey-2);
    }
  }
`;
