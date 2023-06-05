import React, { useEffect } from "react";
import styled from "styled-components";
import { Meta } from "../components/common";
import Productindex from "../components/search";
export default function SearchPage() {

  return (
    <>
      <Meta title="Inventories - Car Collection" />
      <SearchPageContainer>
        <Productindex />
      </SearchPageContainer>
    </>
  );
}
const SearchPageContainer = styled.div`
  width: 100%;
`;
