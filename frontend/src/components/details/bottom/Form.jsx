import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRating, createReviewProduct } from "../../../Features";

export default function Form() {
  const dispatch = useDispatch();

  const { productDetails, rating } = useSelector((store) => store.product);
  const { userInfo } = useSelector((store) => store.user);

  const firstname = userInfo?.firstname;
  const lastname = userInfo?.lastname;

  const [formdata, setFormData] = useState({
    comment: "",
    email: userInfo?.email,
    name: firstname,
  });
  const { comment } = formdata;
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const Reviewdata = { firstname, lastname, userrating: rating, comment };
  const id = productDetails?._id;

  // handling review submission
  const handleReview = (e) => {
    e.preventDefault();
    dispatch(createReviewProduct({ Reviewdata, id }));
  };

  return (
    <FormContainer onSubmit={handleReview}>
      <label className="textLabel" htmlFor="textarea">
        Your Review*
        {""}
        <textarea
          id="textarea"
          className="textarea"
          name="comment"
          value={formdata.comment}
          onChange={onChange}
          required="true"
        />
      </label>
      <label className="textLabel" htmlFor="name">
        Your Name*
        {""}
        <input
          className="input"
          id="name"
          name="name"
          value={formdata.name}
          onChange={onChange}
        />
      </label>
      <label className="textLabel" htmlFor="email">
        Your Email*
        {""}
        <input
          className="input"
          id="email"
          name="email"
          required="true"
          value={formdata.email}
          onChange={onChange}
        />
      </label>
      <div className="w-100 flex">
        <button type="submit" className="submitReviewBtn fs-18">
          Submit
        </button>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  .textarea {
    height: 8.7rem;
  }

  .submitReviewBtn {
    border: none;
    outline: none;
    padding: 1.2rem 3rem;
    background: var(--red);
    color: #fff;
    width: 250px;
    margin-top: 2rem;
    font-size: 1.6rem;
    border-radius: 40px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: var(--blue-1);
    }
  }
`;
