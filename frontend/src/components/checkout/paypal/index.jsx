import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PapmentButton() {
  const initialOptions = {
    "client-id":
      "AZwhvDm_lNhSOcDkza_6-5Yzi8diCZA-FKB4kbmDq8QyZofI84RMZ5Ao3aXcdao09k6NOl0OMOUfPyNp",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };
  const buttonStyle = {
    color: "silver",
    layout: "horizontal",
    height: 48,
    tagline: false,
    shape: "pill",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={buttonStyle}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.99",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
