import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Range from "./Range";
import {
  getMaxPrice,
  getMinPrice,
} from "../../../Features/product/productSlice";

export default function FilterPrices() {
  const [minValue, setMinValue] = useState(23900);
  const [maxValue, setMaxValue] = useState(80322.75);

  const dispatch = useDispatch();
  const handlePrice = () => {
    dispatch(getMaxPrice(parseInt(maxValue)));
    dispatch(getMinPrice(parseInt(minValue)));
  };
  return (
    <FilterPriceContent>
      <h2>Filter By Price</h2>
      <Range
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        minValue={minValue}
        setMinValue={setMinValue}
      />
      <div className="priceWrapper">
        <button className="filterPriceBtn" onClick={handlePrice}>
          Filter
        </button>
        <p>
          Price: ${minValue} - ${maxValue}{" "}
        </p>
      </div>
    </FilterPriceContent>
  );
}

const FilterPriceContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--dark-1);
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  .priceWrapper {
    width: 100%;
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    gsp: 1.5rem;
    p {
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--grey);
    }
    .filterPriceBtn {
      padding: 1.2rem 2rem;
      border: none;
      outline: none;
      background: var(--red);
      color: #fff;
      font-size: 1.8rem;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: var(--blue-3);
      }
    }
  }
`;
