import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard";
import Message from "../loaders/Message";

export default function CartSidebar() {
  // get the cart content
  const { isLoading, isError, bag } = useSelector((store) => store.bag);
  return (
    <CartSidebarContainer>
      <div className="cartSidebarWrapper">
        <div className="cartSidebarTop">
          <h3>
            Cart <span className="cartSpan">({bag?.length} Item(s))</span>
          </h3>
          <div className="icon">
            <RxCross2 />
          </div>
        </div>
        <div className="cartSidebarCenter">
          {bag?.length === 0 ? (
            <Message alertText="No items in your bag" />
          ) : (
            <>
              {bag?.map((x) => {
                return <SmallCard x={x} key={x?._id} type="sidebar" />;
              })}
            </>
          )}
        </div>
        <div className="cartSidebarBottom">
          <Link to={"/cart"} className={"CartBtn"}>
            View Cart
          </Link>
          <Link to={"/billing"} className={"CartBtn Btn1"}>
            Checkout
          </Link>
        </div>
      </div>
    </CartSidebarContainer>
  );
}

const CartSidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
  z-index: 5000;
  right:-100%;
  @media (max-width:680px) {
    width:300px;
  }
  .cartSidebarWrapper {
    width: 100%;
    padding: 1rem;
    display: flex;
    height: 100%;

    align-items: flex-start;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    .cartSidebarCenter {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-y: auto;
      width: 100%;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background: #f8f8f8;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--grey);
        border-radius: 10px;
        transition: all 0.5s;
        &:hover {
          background: #333;
        }
      }
    }
    .cartSidebarTop {
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--grey-3);
        svg {
          width: 70%;
          height: 70%;
          color: var(--dark-1);
        }
      }
      h3 {
        font-size: 2rem;
        color: var(--dark-1);
        font-weight: 600;
        .cartSpan {
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }

    .cartSidebarBottom {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      position: absolute;
      bottom: 0;
      @media (max-width: 780px) {
        flex-direction: column;
        justify-content: flex-start;
      }
      .CartBtn {
        padding: 1.5rem;
        width: 100%;
        color: var(--dark-1);
        font-weight: 600;
        font-size: 1.6rem;
        border: none;
        background-color: var(--grey-3);
        font-family: "Barlow", sans-serif;
        text-align: center;
        text-transform: uppercase;
        &:hover {
          background-color: var(--blue-2);
          color: #fff;
        }
        &.Btn1 {
          border: none;
          background-color: var(--red);
          color: #fff;
          &:hover {
            background-color: var(--blue-2);
          }
        }
      }
    }
  }
`;
