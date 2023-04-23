import React, { useEffect } from "react";
import Styled from "styled-components";

import Cartindex from "../components/cart";
import { useSelector, useDispatch } from "react-redux";
import { addProductToBag, calculateBagItem, getSize } from "../Features";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import LoaderIndex from "../components/loaders";
import Message from "../components/loaders/Message";

import { Footer, Newsletter, Meta } from "../components/common";
import { CopyRight } from "../components/common";
export default function Cart() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const {
    isLoading,
    isError,
    alertType,
    alertText,
    bag,
    isSuccess,
  } = useSelector((store) => store.bag);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // initialize parameters
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // get the quantity of cars
  const quantity = location.search.split("&")[0].split("=")[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addProductToBag({ id, quantity: quantity }));
  }, [id]);

  return (
    <>
      <Meta title={"My Cart"} />
      <CartContainer>
        {isLoading ? (
          <LoaderIndex loading={isLoading} />
        ) : isError ? (
          <Message alertText={alertText} alertType={alertType} />
        ) : (
          <>
            <Cartindex />
            <Newsletter />
            <Footer />
          </>
        )}
      </CartContainer>
    </>
  );
}

const CartContainer = Styled.div`
width:100%;
`;
