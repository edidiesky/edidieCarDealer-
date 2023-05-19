import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Banner, Meta } from "../components/common";
import { Billingindex, Links, PaymentIndex } from "../components/checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../Features";
export default function Billing() {
  const [index, setIndex] = useState(0);
  const { addressData, userInfo } = useSelector((store) => store.user);
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    country: "",
    address: "",
    city: "",
    phone: "",
    postalCode: "",
  });

  useEffect(() => {
    // get the main users data once the profile page mounts
    if (addressData) {
      const {
        firstname,
        lastname,
        email,
        phone,
        city,
        address,
        postalCode,
      } = addressData;

      setFormData({
        firstname,
        lastname,
        email,
        phone,
        city,
        address,
        postalCode,
      });
    }
  }, [setFormData, addressData]);

  useEffect(() => {
    // get the main users data once the profile page mounts
    if (userInfo) {
      const {
        firstname,
        lastname,
        email,
        city,
        address,
        postalCode,
        phone,
        country,
      } = userInfo;
      setFormData({
        firstname,
        lastname,
        email,
        city,
        address,
        postalCode,
        phone,
        country,
      });
    }
  }, [setFormData, userInfo]);

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddressDetails = (e, type) => {
    console.log(type);
    e.preventDefault();
    dispatch(saveShippingAddress(formdata));
    if (type === "payment") {
      setIndex(1);
    }
  };

  return (
    <>
      <Meta title="Checkout" />
      <Banner title="My Checkout" step1 step2="Billing" />
      <BillingContainer className="flex w-90 auto gap-2 column">
        <div className="BillingWrapperTop">
          <p className="fs-18 family1">Hello</p>
          <p className="fs-18 family1">
            Need Assistance? Call customer service at 888-555-5555.
          </p>
          <p className="fs-18 family1">E-mail them at info@yourshop.com</p>
        </div>
        <div className="BillingWrapperCenter">
          <Links
            index={index}
            setIndex={setIndex}
            handleAddressDetails={handleAddressDetails}
          />
          {index === 0 && (
            <Billingindex
              onChange={onChange}
              formdata={formdata}
              handleAddressDetails={handleAddressDetails}
            />
          )}
          {index === 1 && (
            <PaymentIndex handleAddressDetails={handleAddressDetails} />
          )}
        </div>
      </BillingContainer>
    </>
  );
}

const BillingContainer = styled.div`
  width: 100%;
  .BillingWrapperTop {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-top: 1px solid var(--grey-2);
    border-bottom: 1px solid var(--grey-2);
    @media (max-width: 780px) {
      flex-direction: column;
    }
    p {
      padding: 2rem;
      border-right: 1px solid var(--grey-2);
      @media (max-width: 780px) {
        border-bottom: 1px solid var(--grey-2);
        border-right: none;
        width: 100%;
        padding: 2rem 1rem;
      }
    }
  }
  .BillingWrapperCenter {
    width: 95%;
    display: grid;
    grid-template-columns: 14vw 1fr;
    margin: 0 auto;
    padding: 2rem 0;
    grid-gap: 3rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
