import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
export default function DescriptionTab({ tabIndex }) {
  const { productDetails } = useSelector((store) => store.product);
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      animate={{
        height: tabIndex === 0 ? "100%" : 0,
        opacity: tabIndex === 0 ? 1 : 0,
        display: tabIndex === 0 ? "flex" : "none",
      }}
    >
      <DescriptionTabContainer>
        <h2>Description</h2>
        <p>
          {productDetails?.description.substring(0, 300)}... Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Odio ut enim blandit
          volutpat maecenas. Nascetur ridiculus mus mauris vitae ultricies leo.
          Est lorem ipsum dolor sit amet. Fames ac turpis egestas integer eget
          aliquet. Accumsan sit amet nulla facilisi morbi. Ut diam quam nulla
          porttitor massa id neque aliquam vestibulum.
        </p>
      </DescriptionTabContainer>
    </motion.div>
  );
}

const DescriptionTabContainer = styled.div`
  background: var(--white);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  display: flex;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
  }
  p {
    font-size: 1.8rem;
    color: rgb(34, 34, 34);
    line-height: 1.7;
    font-family: "Barlow", sans-serif;
    @media (max-width: 680px) {
      font-size: 1.8rem;
    }
  }
`;
