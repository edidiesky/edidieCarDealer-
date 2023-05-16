import React, { useState } from "react";
import styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";

export default function Input({ id, onChange, errorMessage, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <LabelContainer htmlFor={id} className="family1">
      {id}
      <input
        {...props}
        onBlur={handleTouch}
        onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
        focused={touched.toString()}
        onChange={onChange}
      />
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.8rem;
  color: var(--dark-1);
  font-weight: 600;
  text-transform: capitalize;

  input {
    height: 6rem;
    border-radius: 6px;
    background: var(--white);
    padding: 0 2.4rem;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.09);
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Barlow", sans-serif;

    &::placeholder {
      font-size: 1.6rem;
      font-family: "Barlow", sans-serif;
    }
    &:focus {
      border: 1.7px solid #222;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: flex;
    }
    &:invalid[focused="true"] {
      border-bottom: 2px solid var(--red);
    }
    &:valid[focused="true"] {
      border-left: 3px solid var(--green);
    }
  }

  span {
    font-size: 1.2rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
`;
