import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from './Header'
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HomeIndex() {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lineElement = lineRef.current;
    const spanElements = lineElement.querySelectorAll(".span");
    // gsap.set(lineElement, { width: "100%" })
    spanElements.forEach((spanElement) => {
      gsap.to(spanElement, {
        width: "0%",
        duration: 1.3,
        scrollTrigger: {
          trigger: lineElement,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <HomeIndexContent>
      <Header/>
      <div className="line" ref={lineRef}>
        <h2 id="text" className="w-85 auto">
          I am a selectively skilled product designer with a strong focus on
          <div className="span"></div>
        </h2>
      </div>
    </HomeIndexContent>
  );
}

const HomeIndexContent = styled.div`
  min-height: 100vh;
  padding: 10rem 0;
  padding-top: 20rem;
  h1 {
    position: relative;
  }
  h1,
  h2 {
    font-size: 79px;
    /* font-weight: 400; */
    width: 50%;
    padding: 0 4rem;
    color: #fff;
    @media (max-width: 780px) {
      width: 90%;
      font-size: 60px;
    }
  }
`;
