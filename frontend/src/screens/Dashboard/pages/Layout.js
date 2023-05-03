import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route, Outlet } from "react-router-dom";
import { Header, Smallsidebar, Message } from "../components";
import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  background: var(--grey-4);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  /* display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width:780px) {
    grid-template-columns: 1fr;
  } */
  .LayoutContainer {
    flex: 1;
    .OutletWrapper {
      width: 100%;
      padding-bottom: 3.5rem;
    }
  }
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Smallsidebar />
      <div className="LayoutContainer">
        <div className="OutletWrapper">
          <Outlet />
        </div>
      </div>
    </LayoutWrapper>
  );
}
