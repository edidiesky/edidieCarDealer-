import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { calculateBagItem } from "../../Features";
export default function CartHolder() {
  const dispatch = useDispatch();
  const { productDetails } = useSelector((store) => store.product);
  const {
    bag,
    totalPrice,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);

  useEffect(() => {
    dispatch(calculateBagItem());
  }, [productDetails?.quantity, bag]);
  return (
    <CartHolderContainer>
      <h2>Cart Holder</h2>
      <h4 className="subtotal">
        Subtotal <span className="subspan">${totalPrice}</span>
      </h4>
      <h4 className="total">
        Total <span className="subspan span1">${TotalShoppingPrice}</span>
      </h4>
      <div className="btnWrapper">
        <Link to={"/car-dealership/billing"} className="editBtn">
          Proceed to Checkout
        </Link>
      </div>
    </CartHolderContainer>
  );
}

const CartHolderContainer = styled.div`
  padding: 4rem;
  border: 1px solid rgba(0,0,0,.08);
  width: clamp(45%, 220px, 90%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 680px) {
    width: 100%;
  }
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark-1);
  }

  .btnWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .editBtn {
      border: none;
      outline: none;
      padding: 1.5rem 4rem;
      background: var(--red);
      color: #fff;
      font-size: 1.6rem;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      &:hover {
        background: var(--blue-1);
      }
      @media (max-width: 980px) {
        padding: 1.6rem 4rem;
      }
    }
  }

  h4 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;
    color: var(--dark-1);
    padding-top: 1rem;
    font-family: "Barlow", sans-serif;
    &.subtotal {
      border-top: 1px solid rgba(0,0,0,.08);
      border-bottom: 1px solid rgba(0,0,0,.08);
      padding: 2.4rem 0;
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
`;
