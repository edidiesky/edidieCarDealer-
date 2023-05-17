import React from "react";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Banner, Card } from "../common";
import FilterOptionsindex from "./filteroptions";
import SelectOptions from "./SelectOptions";
import LoaderIndex from "../loaders";
import Message from "../loaders/Message";
import { clearProductAlert } from "../../Features";
export default function Productindex() {
  const { product, isLoading, isError, alertText, alertType } = useSelector(
    (store) => store.product
  );


  return (
    <ProductIndexContainer>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <Message alertText={alertText} alertType={alertType} handleClearAlert={clearProductAlert}/>
      <Banner
        title={"Car Dealership"}
        subtitle="Product"
        step1={"Home"}
        step2={"Products"}
      />
      <div className="productIndexWrapper">
        <FilterOptionsindex />
        <div className="productCardWrapper">
          <SelectOptions />
          <div className="productCardContainer">
            {product?.map((x, index) => {
              return <Card x={x} key={x._id} index={index} />;
            })}
          </div>
        </div>
      </div>
    </ProductIndexContainer>
  );
}

const ProductIndexContainer = Styled.div`
width:100%;
min-height:100vh;
.productIndexWrapper {
  width:90%;
  margin:0 auto;
  max-width:1600px;
  padding:6rem 0;
  display:grid;
  grid-template-columns:25vw 1fr;
  grid-gap:4rem;
  @media (max-width:980px) {
    grid-template-columns:30vw 1fr;
    grid-gap:2rem;
  }
  @media (max-width:580px) {
    grid-template-columns:1fr;
  }
  .productCardWrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2rem;
    .productCardContainer {
   display:grid;
   width:100%;
  grid-template-columns:repeat(auto-fit,minmax(330px, 1fr));
  grid-gap:1.5rem;
  }
}
  }
  
}

`;
