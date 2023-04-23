import React from "react";
import styled from "styled-components";
export default function ContactFormRight() {
  return (
    <ContactFormRightContainer>
      <h2>Send us a Message</h2>
      <div className="contactFormRightWrapper">
        <div className="contactForm">
          <label htmlFor="firstname" className="searchLabel">
            First Name
            <input
              placeholder="First Name"
              type="text"
              className="search"
              id="firstname"
            />
          </label>
          <label htmlFor="lastname" className="searchLabel">
            Last name
            <input
              placeholder="Last Name"
              type="text"
              className="search"
              id="lastname"
            />
          </label>
        </div>
        <label htmlFor="inquiry" className="searchLabel">
          Inquiry
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="search"
            id="inquiry"
          />
        </label>
        <label htmlFor="address" className="searchLabel">
          Inquiry
          <input
            placeholder="Car Make / keyword /Model"
            type="text"
            className="search"
            id="address"
          />
        </label>
        <div className="contactForm">
          <label htmlFor="state" className="searchLabel">
            State
            <input
              placeholder="State"
              type="text"
              className="search"
              id="state"
            />
          </label>
          <label htmlFor="City" className="searchLabel">
            City
            <input
              placeholder="City"
              type="text"
              className="search"
              id="city"
            />
          </label>
        </div>
        <label htmlFor="address" className="searchLabel">
          Inquiry
          <textarea
            placeholder="Car Make / keyword /Model"
            type="text"
            className="searchArea"
            id="address"
          />
        </label>
        <button className="btn">Send Message</button>
      </div>
    </ContactFormRightContainer>
  );
}

const ContactFormRightContainer = styled.div`
  width: 100%;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark-1);
  }
  .contactFormRightWrapper {
    width: 100%;
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @media (max-width: 780px) {
      width: 100%;
    }
    .contactForm {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;
    }
    .searchLabel {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--dark-1);
      .searchArea {
        height: 15rem;
        border: none;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 2.4rem 3rem;
        font-size: 1.6rem;
        transition: all 0.2s;
        font-family: inherit;
        &:focus {
          border: 1.5px solid rgba(0, 0, 0, 0.6);
        }
      }
      .search {
        border: none;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 2.4rem 3rem;
        font-size: 1.6rem;
        transition: all 0.2s;
        &:focus {
          border: 1.5px solid rgba(0, 0, 0, 0.6);
        }
      }
    }
    .btn {
      padding: 2.3rem;
      @media (max-width: 480px) {
        padding: 1.8rem 2.3rem;
      }
      cursor: pointer;
      font-size: 2rem;
      font-weight: 400;
      color: var(--white);
      background: var(--red);
      border: none;
      outline: none;
      z-index: 400;
      text-transform: uppercase;
      transition: all 0.3s;
      &.btn-1 {
        background: #fff;
        color: var(--dark-1);
      }
      &:hover {
        background: var(--blue-1);
        color: #fff;
      }
    }
  }
`;
