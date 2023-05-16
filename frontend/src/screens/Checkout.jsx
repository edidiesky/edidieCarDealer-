import React, { useState } from "react";
import styled from "styled-components";
import {
  Footer,
  Newsletter,
  Banner,
  Meta,
} from "../components/common";
import { Billingindex, Links, PaymentIndex } from "../components/checkout";
export default function Billing() {
  const [index, setIndex] = useState(0);
  
  return (
    <>
      <Meta title="Checkout" />
      <BillingContainer className="flex gap-2 column">
        <Banner title="My Checkout" step1 step2="Billing" />
        <div className="BillingWrapperTop">
          <p className="fs-20 family1">Hello</p>
          <p className="fs-20 family1">
            Need Assistance? Call customer service at 888-555-5555.
          </p>
          <p className="fs-20 family1">E-mail them at info@yourshop.com</p>
        </div>
        <div className="BillingWrapperCenter">
          <Links index={index} setIndex={setIndex} />
          {index === 0 && <Billingindex />}
          {index === 1 && <PaymentIndex />}
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
    width: 95%;
    display: grid;
    grid-template-columns: 14vw 1fr;
    margin: 0 auto;
    padding: 2rem 0;
    grid-gap: 3rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
