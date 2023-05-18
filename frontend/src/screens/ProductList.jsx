import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Meta } from "../components/common";
import {
  getAllProduct,
  clearProductAlert,
  clearProductDetails,
} from "../Features";
import Productindex from "../components/product";
import { CopyRight } from "../components/common";
import LoaderIndex from "../components/loaders";
export default function ProductList() {
  const dispatch = useDispatch();
  const { sort, color, page, limit } = useSelector((store) => store.product);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(clearProductDetails());
    dispatch(clearProductAlert());
    dispatch(getAllProduct());
  }, [sort, color, page, limit]);

  return (
    <>
      <Meta title="Inventories - Car Collection" />
      <ProductListContainer>
        <Productindex />
      </ProductListContainer>
    </>
  );
}
const ProductListContainer = styled.div`
  width: 100%;
`;
