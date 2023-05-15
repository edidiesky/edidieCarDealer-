import React, { useEffect } from "react";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../../common";

export default function CollectionIndex() {
  const { product } = useSelector((store) => store.product);

  return (
    <CollectionContainer>
      {product?.map((x, index) => {
        return <Card x={x} key={x.id} index={index}/>;
      })}
    </CollectionContainer>
  );

}

const CollectionContainer = Styled.div`
width:100%;
padding:2rem 0;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(350px,1fr));
grid-row-gap:1rem;
grid-column-gap:4rem;
@media (min-width:1600px) {
  grid-template-columns:repeat(auto-fit, minmax(400px,1fr));
}
@media (max-width:780px) {
  grid-template-columns:repeat(auto-fit, minmax(270px,1fr));
}
`;
