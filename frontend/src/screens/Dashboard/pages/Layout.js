import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Smallsidebar, Message } from "../components";
import Sidebar from "./Sidebar";
const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: var(--grey-3);
  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      width: 100%;
      padding-bottom: 3.5rem;
    }
  }
  h2 {
    @media (max-width:480px) {
      font-size: 2rem;
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
