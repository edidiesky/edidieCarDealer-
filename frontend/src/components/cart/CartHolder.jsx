import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { calculateBagItem, createCustomersOrder } from "../../Features";
export default function CartHolder() {
  const { productDetails } = useSelector((store) => store.product);
  const { order } = useSelector((store) => store.order);
  const {
    bag,
    totalPrice,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);
  const [payment, setPayment] = useState("Paypal");
  const { addressData } = useSelector((store) => store.user);

  const orderData = {
    orderItems: bag,
    estimatedTax,
    shippingAddress: addressData,
    TotalShoppingPrice,
    paymentMethod: payment,
    shippingPrice,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    // Call backend function to fulfill order
    dispatch(createCustomersOrder(orderData));
  };
  useEffect(() => {
    dispatch(calculateBagItem());
  }, [productDetails?.quantity, bag]);

  useEffect(() => {
    if (order?._id) {
      navigate(`/car-dealership/billing?paymentId=${order?._id}`);
    }
  }, [order?._id, navigate]);
  return (
    <CartHolderContainer>
      <h2>Cart Holder</h2>
      <h4 className="subtotal">
        Subtotal <span className="subspan">${totalPrice}</span>
      </h4>
      <h4 className="subtotal">
        Tax <span className="subspan">${estimatedTax}</span>
      </h4>
      <h4 className="subtotal">
        Total <span className="subspan span1">${TotalShoppingPrice}</span>
      </h4>
      <div className="btnWrapper">
        <button onClick={handleCreateOrder} className="editBtn">
          Place Order
        </button>
      </div>
    </CartHolderContainer>
  );
}

const CartHolderContainer = styled.div`
  padding: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: clamp(55%, 200px, 90%);
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
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      padding: 2rem 0;
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
