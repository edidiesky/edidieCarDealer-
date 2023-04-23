import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useSelector, useDispatch } from "react-redux";

import Message from "../../loaders/Message";
import LoaderIndex from "../../loaders";

import {
  updateCustomersOrderToPaid,
  updateCustomersOrderToIsDelivered,
} from "../../../Features";

import {
  getCustomerOrderById,
  orderPayReset,
  orderDelieveredReset,
} from "../../../Features";

export default function OrderRight() {
  // getting the state from the slice
  const { id } = useParams();

  //  bag state
  const { TotalShoppingPrice, totalPrice } = useSelector((store) => store.bag);

  // user state
  const { addressData, userDetails, paymentData, userInfo } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();
  // get the users order
  const {
    order,
    isLoading,
    isError,
    isSuccess,
    alertType,
    alertText,
    successdelivered,
    loadingdelivered,
  } = useSelector((store) => store.order);

  //  sdk state
  const [sdkReady, setSdkReady] = useState(false);
  const [modal, setModal] = useState(false);

  // get the order based on conditions
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });

    //  get the order if the payment is success or delivered
    if (isSuccess || successdelivered) {
      dispatch(orderDelieveredReset());
      dispatch(orderPayReset());
      dispatch(getCustomerOrderById(id));
    } else {
      dispatch(getCustomerOrderById(id));
    }
  }, [id, isSuccess, successdelivered]);

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:3000/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    // check if the order has not being paid and paypal has not been added to the window
    if (!paymentData === "Stripe" && !order?.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [order?.isPaid, paymentData]);

  // Handling updating order to paid
  const successPaymentHandler = (paymentResult) => {
    dispatch(updateCustomersOrderToPaid(paymentResult));
  };

  // Handling updating order to delivered
  const handleOrderToDeliver = () => {
    dispatch(updateCustomersOrderToIsDelivered());
  };

  return (
    <OrderRightContainer>
      {/*Order Summary*/}
      <div className="OrderRightBottomTop">
        <h3>Order Summary</h3>
        <div className="OrderRightBottom">
          <h4>
            Items <span className="subspan">${totalPrice}</span>
          </h4>
          <h4>
            Shipping <span className="subspan span1">$0</span>
          </h4>
          <h4>
            Tax <span className="subspan">$1637</span>
          </h4>
          <h4>
            Total <span className="subspan span1">${TotalShoppingPrice}</span>
          </h4>
        </div>
      </div>
      <div className="OrderRightBottom1">
        <div className="placeBtnWrapper">
          {isLoading && <LoaderIndex type="small" />}
          {/*show the paypal button if it has not yet being paid*/}
          {!paymentData === "Stripe" && !order?.isPaid && (
            // show loader if the sdk has not been loaded
            <>
              {!sdkReady ? (
                <LoaderIndex type="small" />
              ) : (
                // show the paypal btn
                <PayPalButton
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: order?.TotalShoppingPrice,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    // Capture the funds from the transaction
                    return actions.order.capture().then(function (details) {
                      // Show a success message to your buyer
                      setModal(true);
                      return dispatch(updateCustomersOrderToPaid(details));
                    });
                  }}
                />
              )}
            </>
          )}
          {/*show the update button
                    1. User is an Admin
                    2. transaction has not been Delivered
                    3. transaction has been paid
                */}
          {userInfo.isAdmin && order?.isPaid && !order?.isDelivered && (
            <>
              <button className="placeBtn" onClick={handleOrderToDeliver}>
                Update to Delivered
              </button>
              {loadingdelivered && <LoaderIndex type="small" />}
            </>
          )}
        </div>
      </div>
    </OrderRightContainer>
  );
}

const OrderRightContainer = styled.div`
  width: 100%;
  border: 1px solid var(--grey-2);
  .OrderRightBottom1 {
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid var(--grey-2);
    .placeBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .placeBtn {
        padding: 1.7rem 3rem;
        background-color: var(--blue-1);
        font-size: 1.6rem;
        color: #fff;
        font-weight: 600;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
          background-color: var(--red);
        }
      }
    }
  }
  .OrderRightBottomTop {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 3rem 0;
    gap: 2rem;
    h3 {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 1.8rem;
      font-size: 3rem;
      color: var(--dark-1);
    }
    .OrderRightBottom {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      gap: 2rem;
      h4 {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--grey-2);
        padding: 1.4rem 3.5rem;
        font-size: 1.8rem;
        color: var(--dark-1);
        justify-content: space-between;

        @media (max-width: 780px) {
          width: 100%;
        }
        @media (max-width: 380px) {
          padding: 1.4rem 2rem;
        }
        .subspan {
          font-weight: 300;
          &.span1 {
            color: var(--blue-1);
            font-weight: 600;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
