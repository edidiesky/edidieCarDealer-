import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import styled from "styled-components/macro";
import HeaderNews from "./HeaderNews";

function HeaderIndex() {
  return (
    <HeaderIndexContainer>
      <HeaderNews/>
      <HeaderBottom />
      <HeaderTop />
    </HeaderIndexContainer>
  );
}
const HeaderIndexContainer = styled.div`
  width: 100%;
`;
export default HeaderIndex;
