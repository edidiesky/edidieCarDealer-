import React from "react";
import styled from "styled-components";
import { Card } from "../../common";
import { useSelector } from "react-redux";

export default function RecentProductindex() {
  const { product } = useSelector((store) => store.product);
  return (
    <RecentProductindexContainer>
      <div className="recentProductWrapper">
        <h2 className="recentTitle">Recently Added Cars</h2>

        <div className="recentProductCardWrapper">
          {product?.slice(0, 3).map((x, index) => {
            return <Card x={x} key={x._id} index={index} />;
          })}
        </div>
      </div>
    </RecentProductindexContainer>
  );
}

const RecentProductindexContainer = styled.div`
  width: 100%;
  .recentProductWrapper {
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    .recentTitle {
      font-size: 3.5rem;
      color: var(--text-color);
      font-weight: 700;
      width: 100%;
      text-align: center;
    }
    .recentProductCardWrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      @media (max-width: 580px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
