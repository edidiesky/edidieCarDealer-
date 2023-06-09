import React from "react";
import styled from "styled-components";
import CartContent from "./CartContent";
import CartHolder from "./CartHolder";
import { Banner } from "../common";
import SmallCartCard from "./SmallCartCard";
export default function Cartindex() {
  return (
    <CartContainer className="flex gap-2 column">
      <Banner title="My Cart" step1 step2="Cart" />
      <div className="cartHolderWrapper w-90 auto">
        <CartContent />
        <SmallCartCard />
        <CartHolder />
      </div>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 100%;

  .cartHolderWrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-end;
    padding-top: 4rem;
  }
`;
