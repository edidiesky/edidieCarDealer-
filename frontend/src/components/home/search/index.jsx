import React from "react";
import styled from "styled-components";
export default function SearchIndex() {
  return (
    <SearchContainer>
      <div className="searchWrapper">
        <h2 className="searchText">Search Vehicle Inventory</h2>
        <div className="searchinputcontainer">
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="search"
          />
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="search"
          />
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="search"
          />
          <button className="btn">Search</button>
        </div>
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: clamp(60%, 90%, 85%);
  margin: 0 auto;
  z-index: 3451000;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 0;
  .searchWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background: var(--white);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
    padding: 4rem 0;
    transform: translateY(-40px);
    position: relative;

    h2 {
      font-size: 4rem;
      font-weight: 700;
      padding: 0 2rem;
      color: var(--dark-1);
      @media (max-width: 480px) {
        padding: 0 5rem;
        text-align: center;
        font-size: 3.4rem;
      }
    }
    .searchinputcontainer {
      width: 90%;
      padding: 1rem 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;
      @media (max-width: 480px) {
        width: 75%;
        margin: 0 auto;
      }
      .search {
        height: 5.5rem;
        border-radius: 6px;
        background:var(--white);
        padding: 0 2.4rem;
        width: 100%;
        font-family:"Barlow", sans-serif;
        

        &::placeholder {
          font-size:1.5rem;
          font-family:"Barlow", sans-serif;
        }
        &:focus {
            border: 1.7px solid #222;
        }
        &.inputError {
          border: 2px solid var(--red);
        }
        &:invalid[focused='true'] ~ span {
          display:block;
        }
        &:invalid[focused='true']{
          border-bottom: 2px solid var(--red);
        }
        &:valid[focused='true']{
          border-left: 3px solid var(--green);
        }
      }
      .btn {
        height: 5.5rem;
        @media (max-width: 480px) {
          padding: 1.8rem 2.3rem;
        }
        cursor: pointer;
        font-size: 2rem;
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
