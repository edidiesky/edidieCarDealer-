import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
export default function SearchIndex() {
  const carOptions = ["All Cars", "New Cars", "Used Cars"];
  const [cartype, setCarType] = useState("");
  return (
    <SearchContainer>
      <div className="searchWrapper w-90 auto">
        <div className="flex item-center justify-center gap-1 top">
          <BsSearch fontSize={"40px"} color={"var(--red)"} />
          <h2 className="searchText">Search For Your Dream Car</h2>
        </div>
        <div className="searchinputcontainer">
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="input family1"
          />
          <select
            value={cartype}
            className="select"
            placeholder="Choose one"
            onChange={(e) => setCarType(e.target.value)}
          >
            {carOptions.map((x, index) => {
              return (
                <option value={x} key={index}>
                  {x}
                </option>
              );
            })}
          </select>
          <select
            value={cartype}
            className="select"
            placeholder="Choose one"
            onChange={(e) => setCarType(e.target.value)}
          >
            {carOptions.map((x, index) => {
              return (
                <option value={x} key={index}>
                  {x}
                </option>
              );
            })}
          </select>
          <button className="btn">Search</button>
        </div>
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  .top {
    @media (max-width: 780px) {
      flex-direction: column;
      h2 {
        font-size: 25px;
      }
    }
  }
  .searchWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background: var(--white);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
    padding: 4rem 0;
    transform: translateY(-60px);
    position: relative;
    z-index: 3000;
    .input {
      height: 6rem;
    }
    h2 {
      font-size: 2.7rem;
      font-weight: 700;
      padding: 0 2rem;
      color: var(--dark-1);
      @media (max-width: 480px) {
        text-align: center;
      }
      @media (max-width: 480px) {
        font-size: 3rem !important;
      }
    }
    .searchinputcontainer {
      width: 95%;
      padding: 1rem 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;
      @media (max-width: 480px) {
        width: 75%;
        margin: 0 auto;
      }

      .btn {
        height: 6rem;
        @media (max-width: 480px) {
          padding: 1.8rem 2.3rem;
        }
        cursor: pointer;
        font-size: 1.7rem;
        font-weight: 400;
        color: var(--white);
        background: var(--red);
        border: none;
        outline: none;
        z-index: 400;
        text-transform: uppercase;
        transition: all 0.3s;
        &.btn-1 {
          background: var(--white);
          color: var(--dark-1);
        }
        &:hover {
          background: var(--blue-1);
          color: var(--white);
        }
      }
    }
  }
`;
