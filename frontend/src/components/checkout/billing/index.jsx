import React from "react";
import styled from "styled-components";
import { Input } from "../../forms";

import { inputData } from "../../../data/billingData";

export default function Billingindex({
  handleAddressDetails,
  onChange,
  formdata,
}) {
  return (
    <BillingIndexContainer className="flex gap-2 column">
      <h2>Billing Details</h2>
      <form className="formWrapper" onSubmit={handleAddressDetails}>
        <div className="inputWrapper">
          {inputData.slice(0, 2).map((input, index) => {
            return (
              <Input
                id={input.text}
                onChange={onChange}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata[input.name]}
                input={input}
                key={index}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
        </div>
        <div className="inputWrapper">
          {inputData.slice(2, 8).map((input, index) => {
            return (
              <Input
                id={input.text}
                onChange={onChange}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata[input.name]}
                input={input}
                key={index}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
        </div>
        <div className="btnWrapper">
          <button type="submit"  className="btn">
            Continue
          </button>
        </div>
      </form>
    </BillingIndexContainer>
  );
}

const BillingIndexContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark-1);
    text-align: center;
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    padding: 1.4rem 0;
    width: 100%;
    text-align: start;
    @media (max-width: 480px) {
      font-size: 2.6rem;
    }
  }

  .formWrapper {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    .btnWrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .btn {
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
    .inputWrapper {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
