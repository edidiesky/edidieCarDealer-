import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DescriptionTab from "./DescriptionTab";
import Form from "./Form";
import InfoTab from "./InfoTab";
import ReviewTab from "./ReviewTab";
import { Links } from "../../checkout";
export default function DetailsBottomindex() {
  const { productDetails } = useSelector((store) => store.product);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <DetailsBottomContainer>
      <div className="detailsBottomWrapper w-85 auto">
        <div className="tabContent">
          <Links
            type={"Details"}
            step1={"Description"}
            step2={"Reviews"}
            index={tabIndex}
            setIndex={setTabIndex}
          />
        </div>
        <DescriptionTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <ReviewTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </div>
    </DetailsBottomContainer>
  );
}

const DetailsBottomContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  background: rgb(0 0 0 / 7%);
  .detailsBottomWrapper {
    max-width: 1600px;
    position: relative;
    height: 100%;
    @media (max-width: 680px) {
      width: 95%;
    }
    .tabContent {
      position: relative;
      width: 100%;
    }
    .detailsTabBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      .tabBtn {
        background: transparent;
        font-size: 1.8rem;
        color: var(--blue-1);
        font-weight: 400;
        border: none;
        outline: none;
        padding: 1.5rem 1rem;
        transition: all 0.2s;
        cursor: pointer;
        &.active {
          background: var(--white);
        }
        &:hover {
          background: var(--blue-1);
          color: var(--white);
        }
      }
    }
  }
`;
