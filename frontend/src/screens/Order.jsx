import React from "react";
import { Meta } from "../components/common";
import OrderIndex from "../components/order";
import Info from "../components/order/Info";
import styled from "styled-components";

export default function Order() {
  return (
    <>
      <Meta title={"My Orders"} />
      {/* <Banner1/> */}
      <OrderWrapper
        className="py-2 w-90 auto flex column"
        style={{ border: "1px solid rgba(0,0,0,.1)", margin: "2rem auto" }}
      >
        <OrderIndex />
        <Info />
      </OrderWrapper>
    </>
  );
}

const OrderWrapper = styled.div`
  .py-3 {
    padding: 2rem 1.2rem;
    @media (max-width: 480px) {
      padding: 2rem 1rem;
    }
  }
  h2 {
    font-size: 35px;
    @media (max-width: 680px) {
      font-size: 2.8rem !important;
    }
  }
`;
