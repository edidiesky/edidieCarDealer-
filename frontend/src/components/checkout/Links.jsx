import React, { useState } from "react";
import styled from "styled-components";
export default function Links({ index, setIndex, type, step1, step2, step3 }) {
  if (type === "Details") {
    return (
      <LinkContainer>
        <div
          onClick={() => setIndex(0)}
          className={
            index === 0 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step1}
        </div>
        <div
          onClick={() => setIndex(1)}
          className={
            index === 1 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step2}
        </div>
        <div
          onClick={() => setIndex(2)}
          className={
            index === 3 ? "nav-link family1 active" : "nav-link family1"
          }
        >
          {step3}
        </div>
      </LinkContainer>
    );
  }
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

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: transparent;

  @media (max-width: 780px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
  }
  @media (max-width: 780px) {
    font-size: 2.4rem;
  }
  .nav-link {
    background: transparent;
    font-size: 2rem;
    font-weight: 400;
    padding: 1.4rem;
    color: var(--blue-2);
    cursor: pointer;
    @media (max-width: 780px) {
      border-bottom: none;
      font-size: 2rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    @media (max-width: 780px) {
      font-size: 2.4rem;
    }
    &.active {
      color: var(--red);
      background-color: #fff;
    }
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  &.details {
    flex-direction: row;
    .nav-link {
      padding: 1.4rem 0;
      border: none;
      outline: none;
      width: 100%;
      text-align: center;
      background: transparent;
      font-size: 1.68rem;
      font-weight: 400;
      color: var(--dark-1);
      cursor: pointer;
      @media (max-width: 780px) {
        border-bottom: none;
        font-size: 2rem;
        flex: 1;
        text-align: center;
        padding: 1rem 0;
      }
      @media (max-width: 780px) {
        font-size: 2.4rem;
      }
      &.active {
        color: var(--red);
      }
    }
  }
  @media (max-width: 780px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
  }
  @media (max-width: 780px) {
    font-size: 2.4rem;
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
      font-size: 2rem;
      flex: 1;
      text-align: center;
      padding: 1rem 0;
    }
    @media (max-width: 780px) {
      font-size: 2.4rem;
    }
    &.active {
      color: var(--red);
    }
  }
`;
