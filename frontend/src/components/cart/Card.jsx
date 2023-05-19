import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
// import { Delete } from "../modals";
import {
  removeBagItem,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
} from "../../Features";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

export default function Card({ x, type }) {
  const dispatch = useDispatch();
  if (type === "payment") {
    return (
      <CardContent2
        key={x?._id}
        className="flex card w-100 item-center justify-space"
      >
        <div className="flex item-center cardTop2 gap-2 ">
          <div className="cartProduct">
            <div className="imageWrapper">
              <img src={x?.image[0]} alt="images" />
            </div>
          </div>
          <div className="title w-100 flex item-center gap-1">
            {x?.title} <RxCross1 fontSize={"12px"} /> {x?.quantity || 1}
          </div>
        </div>

        <div className="price fs-16 family1 text-dark">
          {x?.price * x?.quantity}
        </div>
      </CardContent2>
    );
  }

  return (
    <tr key={x?._id}>
      <td className="svg">
        <div className="iconsWrapper" onClick={() => dispatch(onCartAlert(x))}>
          <RxCross1 />
        </div>
      </td>
      <td>
        <div className="cartProduct">
          <div className="imageWrapper">
            <img src={x?.image[0]} alt="images" />
          </div>
        </div>
      </td>
      <td className="title">{x?.title}</td>
      <td>{x?.price}</td>
      <td>
        <div className="btnWrapper">
          <button
            className="cartBtn"
            disabled={x?.quantity === x?.countInStock}
            onClick={() => dispatch(increaseBagQty(x))}
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            <BiPlus />
          </button>
          <h3>{x?.quantity}</h3>
          <button
            className="cartBtn"
            disabled={x?.quantity === 1}
            onClick={() => dispatch(decreaseBagQty(x))}
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <BiMinus />
          </button>
        </div>
      </td>
      <td className="title">{x?.price * x?.quantity}</td>
    </tr>
  );
}

const CardContent2 = styled.div`
  .cardTop2 {
    @media (max-width: 450px) {
      flex-direction: column;
    }
  }
`;
