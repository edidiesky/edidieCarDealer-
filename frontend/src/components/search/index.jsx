import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Banner, Card } from "../common";
import Select from "./Select";
import LoaderIndex from "../loaders";
import Message from "../loaders/Message";
import { clearProductAlert, getAllProduct } from "../../Features";
import { BsTag } from "react-icons/bs";
import { getCategory, getTag } from "../../Features/product/productSlice";
export default function Productindex() {
  let [searchParams, setSearchParams] = useSearchParams();
  const product_cat = searchParams.get("product_cat");
  const product_tag = searchParams.get("product_tag");
  const dispatch = useDispatch();
  const {
    product,
    isLoading,
    tag,
    alertText,
    category,
    alertType,
  } = useSelector((store) => store.product);
  useEffect(() => {
    if (!category || !tag) {
      dispatch(getCategory(product_cat));
      dispatch(getTag(product_tag));
      dispatch(getAllProduct());
    }
  }, [category, tag]);
  return (
    <ProductIndexContainer>
      {isLoading && <LoaderIndex loading={isLoading} />}
      <Message
        alertText={alertText}
        alertType={alertType}
        handleClearAlert={clearProductAlert}
      />
      <Banner
        title={"Search:– Page 1"}
        subtitle="Product"
        step1={"Home"}
        step2={"Inventory"}
        step3={"Search"}
      />
      <div className="productIndexWrapper w-90 auto">
        {product?.length === 0 ? (
          <div className="flex column gap-2">
            <Select />
            <h2>Nothing Found</h2>
          </div>
        ) : (
          <div className="productCardWrapper">
            <Select />
            <div className="productCardContainer">
              {product?.map((x, index) => {
                return <Card x={x} key={x._id} index={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </ProductIndexContainer>
  );
}

const ProductIndexContainer = styled.div`
  width: 100%;
  h2 {
    font-size: 35px;
    font-weight: 700;
    @media (max-width: 580px) {
      font-size: 30px;
    }
  }
  .productIndexWrapper {
    padding: 6rem 0;
    .productCardWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .productCardContainer {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media (max-width: 980px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 580px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
