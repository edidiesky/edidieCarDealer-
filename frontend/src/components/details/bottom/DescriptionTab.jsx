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
          Introducing the revolutionary {productDetails?.title} Car, a groundbreaking fusion of
          cutting-edge technology and sustainable transportation. Designed to
          redefine the concept of driving, the {productDetails?.title} Car offers an unparalleled
          driving experience that combines exhilarating performance,
          state-of-the-art features, and an unwavering commitment to
          environmental responsibility. With its sleek and futuristic design,
          the {productDetails?.title} Car captivates onlookers and commands attention on the road.
          The aerodynamic contours and seamless curves not only enhance its
          aesthetic appeal but also contribute to its exceptional efficiency.
          Every aspect of the {productDetails?.title} Car's design, from the streamlined body to
          the advanced materials used, is optimized for maximum performance and
          energy efficiency.
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
