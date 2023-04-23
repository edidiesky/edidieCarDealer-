import React, { useState } from "react";
import styled from "styled-components";
import {
  Banner3,
  Footer,
  Newsletter,
  Banner,
  CopyRight,
  Meta,
} from "../components/common";
import { Billingindex, Links } from "../components/checkout";
export default function Billing() {
  return (
    <>
      <Meta title="Checkout" />
      <BillingContainer>
        <Banner title="My Checkout" step1 step2="Billing" />
        <div className="BillingWrapperTop">
          <p>Hello</p>
          <p>Need Assistance? Call customer service at 888-555-5555.</p>
          <p>E-mail them at info@yourshop.com</p>
        </div>
        <div className="BillingWrapperCenter">
          <Links step1={"billing"} />
          <Billingindex />
        </div>
        <Newsletter />
        <Footer />
      </BillingContainer>
    </>
  );
}

const BillingContainer = styled.div`
  width: 100%;
  .BillingWrapperTop {
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-top: 1px solid var(--grey-2);
    border-bottom: 1px solid var(--grey-2);
    @media (max-width: 780px) {
      flex-direction: column;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--grey);
      padding: 2.5rem;
      border-right: 1px solid var(--grey-2);
      @media (max-width: 780px) {
        border-bottom: 1px solid var(--grey-2);
        border-right: none;
        width: 100%;
      }
    }
  }
  .BillingWrapperCenter {
    width: 90%;
    display: grid;
    grid-template-columns: 16vw 1fr;
    margin: 0 auto;
    padding: 2rem 0;
    grid-gap: 3rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
