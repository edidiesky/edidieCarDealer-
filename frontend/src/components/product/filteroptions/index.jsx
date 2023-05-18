import React from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Price from "./Price";
export default function FilterOptionsindex() {
  return (
    <FilterOptionsContainer>
      <div className="w-100 filterWrapper flex column gap-2">
        <h2>Filter By Options</h2>
        <Filters />
        <Price />
      </div>
    </FilterOptionsContainer>
  );
}

const FilterOptionsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 760px) {
    position: relative;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-1);
    text-transform: uppercase;
  }
`;
