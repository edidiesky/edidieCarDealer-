import React, { useState } from "react";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Extensive Inventory",
    desc:
      "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 2,
    title: "Secure Car Financing",
    desc:
      "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
  {
    id: 3,
    title: "Extensive Dealer Network",
    desc:
      "Incididunt labore dolore magna aliqua enim veniam quis nostrud ad miniys exercitation ullamco laboris nisiut aliquip.",
  },
];
export default function ServicesIndex() {
  const [tag, setTag] = useState([])
  const handleKeyDown = (e)=> {
    if (e.key !== "Enter") return
    const value = e.target.value
    if (!value.trim()) return
    setTag([...tag, value])
  }
  // <input onKeyDown={handleKeyDown} type='text'/>
  return (
    <ServicesContainer>
      <div className="serviceWrapper">
        {data.map((x, index) => {
          return (
            <div className="w-100 hidden">
              <header
                key={x.id}
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay={index * 300}
              >
                <div className="iconImage">
                  <FaCar />
                </div>
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
              </header>
            </div>
          );
        })}
      </div>
    </ServicesContainer>
  );
}

const ServicesContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  z-index: 1000;
  padding: 4rem 0;
  padding-bottom: 8rem;
  max-width: 1600px;
  margin: 0 auto;
  .serviceWrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 4rem;
    }
    header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .iconImage {
        width: 15rem;
        height: 16rem;
        margin: 0 auto;
        svg {
          width: 90%;
          height: 90%;
          color: var(--blue-2);
        }
      }
      p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 1.8;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: rgb(34, 34, 34);
        font-family: "Barlow", sans-serif;
        @media (max-width: 480px) {
          font-size: 1.8rem;
          width: 80%;
        }
      }
      h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--dark-1);
        text-align: center;
        @media (max-width: 480px) {
          font-size: 2.8rem;
        }
      }
    }
  }
`;
