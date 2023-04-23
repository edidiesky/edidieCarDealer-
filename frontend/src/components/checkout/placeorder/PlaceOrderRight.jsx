import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  createCustomersOrder,
  handleStripeCheckout,
  handleStripeKey,
} from "../../../Features";

import Message from "../../loaders/Message";
import LoaderIndex from "../../loaders";

export default function PlaceOrderRight() {
  const { addressData, userDetails, paymentData } = useSelector(
    (store) => store.user
  );

  const {
    bag: orderItems,
    totalPrice,
    totalQuantity,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);

  const { order, isLoading, isSuccess, isError, alertText, alertType } =
    useSelector((store) => store.order);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && order) {
      navigate(`/order/${order?._id}`);
    }
    if (paymentData === "Stripe") {
      dispatch(handleStripeKey());
    }
  }, [order, isSuccess, navigate, paymentData]);

  const { address, country, city, street, phone, postalCode } = addressData;

  const shippingAddress = { address, country, city, street, phone, postalCode };
  const orderData = {
    paymentMethod: paymentData,
    shippingAddress,
    orderItems,
    estimatedTax,
    TotalShoppingPrice,
    shippingPrice,
  };

  // console.log(orderData)
  // handle customer Place order
  const handlePlaceOrder = () => {
    dispatch(createCustomersOrder(orderData));
  };

  // handle customer Place order
  const handleStripeOrder = () => {
    dispatch(handleStripeCheckout(orderItems));
  };

  return (
    <PlaceOrderRightContainer>
      {/*Loading state*/}
      {isLoading && <LoaderIndex loading={isLoading} />}
      {isError && <Message alertText={alertText} alertType={alertType} />}
      {/*Order Summary*/}
      <div className="PlaceOrderRightBottomTop">
        <h3>My Order Summary</h3>
        <div className="PlaceOrderRightBottom">
          <h4>
            Items <span className="subspan">${totalPrice}</span>
          </h4>
          <h4>
            Shipping <span className="subspan span1">$0</span>
          </h4>
          <h4>
            Tax <span className="subspan">$1637</span>
          </h4>
          <h4>
            Total <span className="subspan span1">${TotalShoppingPrice}</span>
          </h4>
        </div>
      </div>
      <div className="PlaceOrderRightBottom1">
        <div className="placeBtnWrapper">
          {paymentData === "Stripe" ? (
            <button className="placeBtn" onClick={handleStripeOrder}>
              Checkout
            </button>
          ) : (
            <button className="placeBtn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          )}
        </div>
      </div>
    </PlaceOrderRightContainer>
  );
}

const PlaceOrderRightContainer = styled.div`
  width: 500px;
  border: 1px solid var(--grey-2);
  padding-top: 1rem;
  @media (max-width: 580px) {
    width: 100%;
  }
  .PlaceOrderRightBottom1 {
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid var(--grey-2);
    .placeBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .placeBtn {
        padding: 2rem 3rem;
        background-color: var(--blue-1);
        font-size: 1.6rem;
        color: #fff;
        font-weight: 600;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
          background-color: var(--red);
        }
      }
    }
  }
  .PlaceOrderRightBottomTop {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 3rem 0;
    gap: 2rem;
    h3 {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 1.8rem;
      font-size: 3rem;
      color: var(--dark-1);
    }
    .PlaceOrderRightBottom {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      gap: 2rem;
      h4 {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--grey-2);
        padding: 1.4rem 3.5rem;
        font-size: 1.8rem;
        color: var(--dark-1);
        justify-content: space-between;
        @media (max-width: 780px) {
          width: 100%;
        }
        @media (max-width: 380px) {
          padding: 1.4rem 2rem;
        }
        .subspan {
          font-weight: 300;
          &.span1 {
            color: var(--blue-1);
            font-weight: 600;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
