import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { BsSlashLg } from "react-icons/bs";

export default function Links({ title, step1, step2, step3 }) {
  return (
    <LinkWrapper>
      {step1 && (
        <>
          <Link className="family1" to={"/"}>
            Home
          </Link>
          /
        </>
      )}
      {step2 && (
        <>
          <Link className="family1" to={`/${step2}`}>
            {step2}
          </Link>
        </>
      )}
      {step3 && (
        <>
          /
          <Link className="family1" to={`/${step3}`}>
            {step3}
          </Link>
        </>
      )}
    </LinkWrapper>
  );
}

const LinkWrapper = Styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.7rem;
    color:#fff;
    z-index:500;
    padding-top:.6rem;
    a {
        font-size:2rem;
        font-weight:400;
        color:#fff;
        z-index:500;
        &:hover {
            color:var(--red);
        }
        @media (max-width:780px) {
            font-size:1.6rem;
        }
    }
`;
