import React, { useState } from "react";
import styled from "styled-components";
export default function Links({ index, setIndex }) {
  return (
    <LinksContainer>
      <div
        onClick={() => setIndex(0)}
        className={index === 0 ? "nav-link family1 active" : "nav-link family1"}
      >
        Billing Details
      </div>
      <div
        onClick={() => setIndex(1)}
        className={index === 1 ? "nav-link family1 active" : "nav-link family1"}
      >
        Review Payment
      </div>
    </LinksContainer>
  );
}

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  @media (max-width: 780px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
  }
  .nav-link {
    padding: 1.4rem 0;
    border: none;
    outline: none;
    width: 100%;
    text-align: start;
    border-bottom: 1px solid var(--grey-2);
    background: transparent;
    font-size: 1.68rem;
    font-weight: 400;
    color: var(--dark-1);
    cursor: pointer;
    @media (max-width: 780px) {
      border-bottom: none;
      font-size: 1.6rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    @media (max-width: 480px) {
      border-bottom: none;
      font-size: 1.24rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    &.active {
      color: var(--red);
    }
  }
`;
