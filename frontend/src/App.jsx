import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
  Search,
  Success,
  About,
  Blog,
  Offer,
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
} from "./screens/Dashboard/pages";
import Billing from "./screens/Checkout";

export default function App() {
  useEffect(() => {
    AOS.init({
      once:true
    });
  }, []);
  const [height, setHeight] = useState(0);
  const initialOptions = {
    "client-id":
      "AZwhvDm_lNhSOcDkza_6-5Yzi8diCZA-FKB4kbmDq8QyZofI84RMZ5Ao3aXcdao09k6NOl0OMOUfPyNp",
    currency: "USD",
    intent: "capture",
  };
  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/car-dealership"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="latest-offers" element={<Offer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="billing" element={<Billing />} />
          <Route path="cars/:id" element={<Details />} />
        </Route>
        <Route path={"/car-dealership/dashboard"} element={<LayoutList />}>
          <Route index element={<Home />} />
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
  );
}
