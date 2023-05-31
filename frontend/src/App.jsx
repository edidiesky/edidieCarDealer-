import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import process from "process";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Home,
  Layout,
  ProductList,
  Details,
  Cart,
  News,
  Contact,
  Register,
  Login,
  ProtectRoute,
  ProtectAdmin,
  Profile,
  Success,
  About,
  Blog,
  Offer,
  Services,
  Order,
} from "./screens";

import {
  LayoutList,
  AdminProductList,
  OrderList,
  ProfileList,
  Customers,
  EditUser,
  EditProductIndex,
  CreateProductIndex,
  Statistics
} from "./screens/Dashboard/pages";
import Billing from "./screens/Checkout";
import { handlePaypalKey } from "./Features";
import { useDispatch, useSelector } from "react-redux";
import LoaderIndex from "./components/loaders";

export default function App() {
  const dispatch = useDispatch();
  const { keys, isloadingPayalKey } = useSelector((store) => store.order);

  useEffect(() => {
    dispatch(handlePaypalKey());
    AOS.init({
      once: true,
    });

    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  const [height, setHeight] = useState(0);

  const initialOptions = {
    "client-id": keys,
    currency: "USD",
    intent: "capture",
  };
  return (
    <>
      {isloadingPayalKey ? (
        <LoaderIndex />
      ) : (
        <PayPalScriptProvider options={initialOptions}>
          <div className="based" style={{ height }}>
            <Routes>
              <Route path={"/"} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="car-dealership/auto-news" element={<News />} />
                <Route path="car-dealership/about" element={<About />} />
                <Route
                  path="car-dealership/inventory"
                  element={<ProductList />}
                />
                <Route
                  path="car-dealership/auth/register"
                  element={<Register />}
                />
                <Route path="car-dealership/auth/login" element={<Login />} />
                <Route path="car-dealership/blog" element={<Blog />} />
                <Route
                  path="car-dealership/latest-offers"
                  element={<Offer />}
                />
                <Route path="car-dealership/contact" element={<Contact />} />
                <Route path="car-dealership/cart" element={<Cart />} />
                <Route
                  path="car-dealership/workshop-services"
                  element={<Services />}
                />
                <Route path="car-dealership/cart/:id" element={<Cart />} />
                <Route
                  path="car-dealership/billing"
                  element={
                    <ProtectRoute>
                      {" "}
                      <Billing />
                    </ProtectRoute>
                  }
                />
                <Route
                  path="car-dealership/order-success"
                  element={
                    <ProtectRoute>
                      {" "}
                      <Order />
                    </ProtectRoute>
                  }
                />
                <Route path="car-dealership/cars/:id" element={<Details />} />
              </Route>
              <Route
                path={"/car-dealership/dashboard"}
                element={<LayoutList />}
              >
                <Route index element={<Statistics />} />
                <Route path="product" element={<AdminProductList />} />
                <Route path="create-product" element={<CreateProductIndex />} />
                <Route path="product/:id" element={<EditProductIndex />} />
                <Route path="order" element={<OrderList />} />
                <Route path="customer" element={<Customers />} />
                <Route path="profile" element={<ProfileList />} />
                <Route path="customer/:id" element={<EditUser />} />
              </Route>
            </Routes>
          </div>
        </PayPalScriptProvider>
      )}
    </>
  );
}
