import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export default function Newsletter() {
  const data = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { id: 2, title: "ipsum dolor sit amet dolor sit amet, elit." },
    { id: 3, title: "Phasellus in risus erat sed vel vestibulum turpis." },
    { id: 4, title: " Orci varius natoque penatibus et." },
    { id: 5, title: "Integer condimentum nisi ac volutpat posuere." },
  ];
  return (
    <NewsletterContent>
      <div className="newsletterWrapper w-90 auto">
        <div
          className="newsletterLeft"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h2>
            Trusted Buying Experience
            <span>Incididunt labore magna aliqua veniams</span>
          </h2>

          <button className="startBtn family1">Get Started</button>
        </div>
        <ul
          className="newsLetterRight"
          data-aos="fade-left"
          data-aos-duration="600"
        >
          {data.map((x) => {
            return (
              <li key={x.id}>
                <BiCheck /> {x.title}
              </li>
            );
          })}
        </ul>
      </div>
    </NewsletterContent>
  );
}

const NewsletterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  z-index: 50;
  position: relative;
  transform: translateY(50px);
  .newsletterWrapper {
    background: var(--blue-2);
    padding: 10rem;
    display: grid;
    z-index: 50;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    grid-row-gap: 5rem;
    @media (max-width: 1080px) {
      padding: 5rem;
    }
    @media (max-width: 1080px) {
     width: 100%;
    }
    .newsletterLeft {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start;
      h2 {
        font-size: 3.5rem;
        font-weight: 700;
        color: #fff;

        span {
          display: block;
          font-size: 2rem;
          padding: 2rem 0;
          font-family: "Barlow", sans-serif;
          letter-spacing: 1px;
          font-weight: 400;
        }
      }
      .startBtn {
        border: none;
        outline: none;
        padding: 2rem 3.5rem;
        font-size: 1.6rem;
        color: #fff;
        background: var(--red);
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .newsLetterRight {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      @media (max-width: 1080px) {
        gap: 0.3rem;
      }
      li {
        color: #fff;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 30px;
        width: 100%;
        text-align: start;
        font-family: "Barlow", sans-serif;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
`;
