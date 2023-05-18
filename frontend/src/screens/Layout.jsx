import React from "react";
import { Outlet } from "react-router-dom";
import Styled from "styled-components";
import { CopyRight, Footer, Newsletter } from "../components/common";
import { Delete, AlertModal } from "../components/modals";
import { clearProductAlert } from "../Features";
import HeaderIndex from "../components/home/header";
import { SearchModal } from "../components/modals";

export default function Layout() {
  return (
    <LayoutContainer>
      <SearchModal />
      <HeaderIndex />
      <AlertModal />
      <Delete />
      <Outlet />
      <Newsletter />
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = Styled.div`
width:100%;
overflow:hidden;
background:var(--white);
`;
