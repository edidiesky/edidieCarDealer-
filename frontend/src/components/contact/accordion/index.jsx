import React from "react";
import Styled from "styled-components";
import Accordion from "./Accordion";
import { accordiondata } from "../../../data/faq";
export default function Accordionindex() {
  return (
    <AccordionIndexContainer>
      <div className="accordionWrapper">
        <div className="accordionLeft">
          <h2>Read Our FAQ'S</h2>
          <Accordion AccordionData={accordiondata} />
        </div>
        <div className="accordionRight">
          <img
            src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/audi-1-600x483.jpg"
            alt="tesla-images"
            className="accordionImage"
          />
        </div>
      </div>
    </AccordionIndexContainer>
  );
}

const AccordionIndexContainer = Styled.div`
width:100%;
padding:8rem 0;
.accordionWrapper {
    width:90%;
    margin:0 auto;
    max-width:1600px;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    place-items:start;
    @media (max-width:780px) {
    grid-template-columns:repeat(1, 1fr);
  }
    .accordionLeft {
        padding:6rem 4rem;
        background:rgb(0 0 0 / 7%);
        min-height:50rem;
        width:100%;
        gap:4rem;
        display:flex;
        flex-direction:column;
       h2 {
        font-size:3rem;
        font-weight:700;
        color:var(--dark-1);
       }
    }
    .accordionRight {
        position:relative;
        min-height:50rem;
        width:100%;
        .accordionImage {
            width:100%;
            position:absolute;
            top:0;
            left:0;
            height:100%;
            object-fit:cover;
        }
    }
}
`;
