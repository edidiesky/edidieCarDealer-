import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PapmentButton() {
  const amount = "2";
  const currency = "USD";
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
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
                },
              },
            ],
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      onApprove={async function(data, actions) {
        await actions.order.capture();
      }}
    />
  );
}
