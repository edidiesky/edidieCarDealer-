import { PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomersOrder,
  updateCustomersOrderToPaid,
} from "../../../Features";

export default function PapmentButton() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const paymentId = searchParams.get("paymentId");
  // // console.log(paymentId);
  // const amount = "2";
  // const currency = "USD";
  const {
    bag,
    totalPrice,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);
  const [payment, setPayment] = useState("Paypal");
  const { addressData } = useSelector((store) => store.user);
  const { successPay, order } = useSelector((store) => store.order);

  const orderData = {
    orderItems: bag,
    estimatedTax,

    shippingAddress: addressData,
    TotalShoppingPrice,
    paymentMethod: payment,
    shippingPrice,
  };
  const dispatch = useDispatch();
  const handleApprove = (details) => {
    console.log(details);
    // Call backend function to fulfill order
    dispatch(updateCustomersOrderToPaid({ details }));
    // Refresh user's account or subscription status
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  useEffect(() => {
    if (successPay) {
      // Display success message, modal or redirect user to success page
      navigate(`/car-dealership/order-success?orderId=${order?._id}`);
    }
  }, [successPay,navigate]);

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
        label: "buynow",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: TotalShoppingPrice,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          handleApprove(details);
        });
      }}
    />
  );
}
