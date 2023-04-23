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

export default function Card({ x }) {
  const [deletemodal, setDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const offDeleteModal = () => setDeleteModal(false);
  const handleRemoveBagItem = () => {
    dispatch(removeBagItem(x));
    setDeleteModal(false);
  };
  const increaseQty = (item) => {
    dispatch(increaseBagQty({ item }));
  };
  const decreaseQty = (item) => {
    dispatch(decreaseBagQty({ item }));
  };
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
            <img src={x?.image[0].image} alt="images" />
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
          >
            <BiPlus />
          </button>
          <h3>{x?.quantity}</h3>
          <button
            className="cartBtn"
            disabled={x?.quantity === 1}
            onClick={() => dispatch(decreaseBagQty(x))}
          >
            <BiMinus />
          </button>
        </div>
      </td>
      <td className="title">{x?.price * x?.quantity}</td>
    </tr>
  );
}
