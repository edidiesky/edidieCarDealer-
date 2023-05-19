import React from "react";
import styled from "styled-components";

export default function HeaderNews() {
  return (
    <HeaderNewsContent>
      <div className="w-90 auto flex item-center">
        <h5 className="fs-16 family1 text-light text-white">
          <span className="text-extra-bold family1">Mar 1:</span> How Latest
          Consumer Trends Impact Car Buying & Sales
        </h5>
      </div>
    </HeaderNewsContent>
  );
}

const HeaderNewsContent = styled.div`
  padding: 1.5rem 0;
  background-color: var(--dark-blue);
`;
