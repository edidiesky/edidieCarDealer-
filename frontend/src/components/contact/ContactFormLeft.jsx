import React from "react";
import styled from "styled-components";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsHourglass } from "react-icons/bs";
const data = [
  {
    id: 1,
    title: "(202) 1155-909",
    desc: "Call our dealer assistants, anytime!",
    icon: <HiOfficeBuilding />,
  },
  {
    id: 2,
    title: "cars@avada-dealers.com",
    desc: "Have any queries? Send us an email",
    icon: <MdEmail />,
  },

  {
    id: 3,
    title: "102 Adetohumbo Road",
    desc: "Grand Pierce, Florida – 34567, USA",
    icon: <BsHourglass />,
  },
];

export default function ContactFormLeft() {
  return (
    <ContactFormLeftContainer>
      <h2>Dealership Info</h2>
      <div className="contactFormWrapper">
        {data.map((x) => {
          return (
            <header key={x.id}>
              <div className="iconImageWrapper">{x.icon}</div>
              <h3>
                {x.title}
                <span className="newsSpan family1">{x.desc}</span>
              </h3>
            </header>
          );
        })}
      </div>
    </ContactFormLeftContainer>
  );
}

const ContactFormLeftContainer = styled.div`
  width: 100%;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark-1);
  }
  .contactFormWrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 8rem 0;
    @media (max-width: 780px) {
      width: 100%;
    }
    header {
      display: flex;
      gap: 2.5rem;
      align-items: center;
      width: 100%;
      padding-bottom: 4rem;
      border-bottom: 1px solid #ccc;
      @media (max-width: 980px) {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
      }
      &:hover {
        .iconImageWrapper {
          background: var(--red);
        }
        h3 {
          color: var(--blue-1);
        }
      }
      .iconImageWrapper {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(0 0 0 / 7%);

        svg {
          width: 60%;
          height: 60%;
          color: var(--blue-2);
        }
      }
      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--dark-1);
        flex: 1;
        text-align: start;
        @media (max-width: 480px) {
          font-size: 2.8rem;
        }
        span {
          font-size: 1.8rem;
          display: block;
          padding: 1rem 0;
          color: var(--grey);
          font-weight: 400;
          line-height: 1.7;
        }
      }
    }
  }
`;
