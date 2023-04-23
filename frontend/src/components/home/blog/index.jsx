import React from "react";
import styled from "styled-components/macro";
import BlogCard from "./Card";
const blogData = [
  {
    id: 1,
    title: "How Latest Consumer Trends Impact Car Buying & Sales",
    tags: ["Buy Sell Guide", "Car", "Fuel"],
    description:
      "Incididunt labs dolore mags aliqua enim veniam quis noste miniys exc eation ullamco laboris.",
    image: "../images/buying-awd-hybrid-cars.jpg",
  },
  {
    id: 2,
    title: "Ultimate AWD Hybrid Vehicle Buying Guide For 2024",
    tags: ["Buy Sell Guide", "Electric Car", "Fuel"],
    description:
      "Incididunt labs dolore mags aliqua enim veniam quis noste miniys exc eation ullamco laboris.",
    image: "../images/compact-suvs-rank.jpg",
  },
];
export default function Blogindex() {
  return (
    <BlogContainer>
      <div className="blogWrapper w-90 auto">
        <div className="blogTopWrapper">
          <div className="hidden flex-1">
            <h1
              data-aos="fade-right"
              data-aos-duration="1200"
              className="flex-1"
            >
              Auto World News
              <span>
                <img
                  src="/images/heading-separator.png"
                  alt="title-image"
                  className="titleIcon"
                />
              </span>
            </h1>
          </div>
          <div className="hidden flex-1">
            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="fs-20 family1 flex-1"
            >
              Incididunt labore dolore magna aliqua enim veniam quis nostrud
              tempor tempor adispecing miny exercitation ullamco laboris nisiut
              aliquip.
            </p>
          </div>
        </div>
        <div className="blogCardWrapper">
          {blogData.map((x) => {
            return <BlogCard x={x} />;
          })}
        </div>
      </div>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
  .blogWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .blogCardWrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      @media (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .blogTopWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      @media (max-width: 780px) {
        flex-direction: column;
        gap: 4rem;
      }
      h1 {
        font-size: 5rem;
        font-weight: 700;
        color: var(--dark-1);
        width: 100%;
        span {
          display: block;
          .titleIcon {
            width: 9rem;
          }
        }
        @media (max-width: 980px) {
          font-size: 5rem;
        }
      }
    }
  }
`;
