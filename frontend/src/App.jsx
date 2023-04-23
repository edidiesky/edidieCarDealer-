import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

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
  Checkout,
  Register,
  Login,
  PlaceOrder,
  ProtectRoute,
  ProtectAdmin,
  Profile,
  Payment,
  Order,
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
  CreateProductIndex
} from "./screens/Dashboard/pages";
import Billing from "./screens/Checkout";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
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
        <Route path={"/dashboard"} element={<LayoutList />}>
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
  );
}
