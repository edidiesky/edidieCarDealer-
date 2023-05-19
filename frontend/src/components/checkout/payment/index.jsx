import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { calculateBagItem, savePaymentType } from "../../../Features";
import { useDispatch, useSelector } from "react-redux";
import PapmentButton from "../paypal";
import CartSummary from "./summary";

export default function PaymentIndex() {
  const {
    bag,
    totalPrice,
    totalQuantity,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBagItem());
  }, []);

  return (
    <PaymentIndexContainer>
      <h2>Payment Method</h2>
      <div className="w-100 paymentWrapper flex item-end column gap-3">
        <CartSummary />
        <div className="flex payment column">
          <h4 className="subtotal">
            Subtotal <span className="subspan">${totalPrice}</span>
          </h4>
          <h4 className="subtotal">
            shippingPrice <span className="subspan">${shippingPrice}</span>
          </h4>
          <h4 className="subtotal">
            Tax <span className="subspan">${estimatedTax}</span>
          </h4>
          <h4 className="subtotal">
            Total <span className="subspan span1">${TotalShoppingPrice}</span>
          </h4>
        </div>
        <div className="payment">
          <PapmentButton />
        </div>
      </div>
    </PaymentIndexContainer>
  );
}

const PaymentIndexContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  .payment {
    width: 40%;
    @media (max-width: 680px) {
      width: 70%;
    }
  }
  .paymentWrapper {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .subtotal {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--dark-1);
    font-family: "Barlow", sans-serif;
    @media (max-width: 780px) {
      font-size: 1.8rem;
    }
    &.subtotal {
      padding: 1.4rem 0;
      font-weight: 600;
    }

    .subspan {
      font-weight: 400;
      color: var(--grey);
      &.span1 {
        color: var(--blue-2);
        font-weight: 600;
      }
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark-1);
    text-align: center;
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    width: 100%;
    text-align: start;
    @media (max-width: 380px) {
      font-size: 2.6rem;
    }
  }
`;
