import React from "react";
import styled from "styled-components";
import { Banner } from "../common";
import BlogCard from "../home/blog/Card";
// import { blogData } from '../../dummy'
import Services from "./Services";

export default function Newsindex() {
  return (
    <NewsContainer>
      <Banner title="Auto News" step1={"Home"} step2={"Auto-news  "} />
      <Services />
      <div className="blogCardContainer w-90 auto">
        {/* {blogData.map(x=> {
          return <BlogCard x={x} key={x.id}/>
        })} */}
      </div>
    </NewsContainer>
  );
}

const NewsContainer = styled.div`
  width: 100%;
  .blogCardContainer {
    padding: 8rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 3rem;
  }
  .headerWrapper {
    padding: 8rem 0;
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    header {
      display: flex;
      gap: 2rem;
      width: 100%;
      align-items: center;
      @media (max-width: 980px) {
        width: 100%;
      }
      &:hover {
        .iconImageWrapper {
          background: var(--red);
        }
        h2 {
          color: var(--blue-1);
        }
      }
      .iconImageWrapper {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--blue-1);

        svg {
          width: 50%;
          height: 50%;
          color: #fff;
        }
      }
      h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--text-color);
        text-align: start;
        width: 100%;
        @media (max-width: 480px) {
          font-size: 2.5rem;
        }
        span {
          font-size: 1.6rem;
          display: block;
          padding: 1.7rem 0;
          color: var(--dark-1);
          font-weight: 400;
          line-height: 1.5;
          width: 100%;
        }
      }
    }
  }
`;
