import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCircle } from "react-icons/bs";

const LocationList = [
  "Alabama",
  "Maryland",
  "New York",
  "Arizona",
  "Michigan",
  "North Carolina",
  "California",
  "Mississippi",
  "Ohio",
  "Florida",
  "Nevada",
  "Texas",
  "Georgia",
  "Montana",
  "Washington",
  "Hawaii",
  "New Jersey",
  "Louisiana",
  "Louisiana",
];

export default function LocationIndex() {
  return (
    <LocationContainer>
      <div className="LocationWrapper w-90 auto">
        <div className="LocationTop flex item-center gap-2">
          <h1 className="flex-1">
            Dealer Locations
            <span>
              <img
                src="/images/heading-separator.png"
                alt="title-image"
                className="titleIcon"
              />
            </span>
          </h1>
          <p className="family1 fs-20 flex-1 text-light">
            Incididunt labore dolore magna aliqua enim veniam quis nostrud
            tempor tempor adispecing miny exercitation ullamco laboris nisiut
            aliquip.
          </p>
        </div>
        <div className="locationBottom">
          <div className="locationBLeft">
            <h3>
              450+ Dealer Locations Across The USA Locate Your Nearest Dealer
            </h3>
            <ul className="locatinoList">
              {LocationList.map((x, index) => {
                return (
                  <li key={index}>
                    <BsCircle /> {x}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="locationBRight">
            <img
              src="/images/dealers-location-map-2.png"
              alt="map-images"
              className="mapImage"
            />
          </div>
        </div>
      </div>
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  width: 100%;
  .LocationWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 10rem 0;
    .LocationBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .LocationBtn {
        padding: 2rem 4rem;
        border: none;
        outline: none;
        font-size: 1.9rem;
        cursor: pointer;
        font-weight: 600;
        color: var(--blue-2);
        border: 1px solid var(--blue-2);
        background: transparent;
        &:hover {
          background: var(--red);
          color: #fff;
          border: 1px solid var(--red);
        }
      }
    }
    .locationBottom {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      padding-top: 3rem;
      @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-gap: 6rem;
      }
      .locationBLeft {
        .locatinoList {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          padding-top: 2.5rem;
          li {
            font-size: 1.8rem;
            font-family: "Barlow", sans-serif;
            width: 30%;
            display: flex;
            align-items: center;
            gap: 2rem;
            font-weight: 400;
            @media (max-width: 760px) {
              width: 40%;
            }
            svg {
              color: var(--red);
              font-size: 1.7rem;
            }
          }
        }
        h3 {
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--dark-1);
          flex: 1;
          line-height: 1.4;
        }
      }
      .locationBRight {
        .mapImage {
          width: 100%;
        }
      }
    }
    .LocationTop {
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
        flex: 1;
        text-align: start;
        span {
          display: block;
          .titleIcon {
            width: 9rem;
          }
        }
        @media (max-width: 980px) {
          font-size: 5rem;
          width: 100%;
        }
      }
    }
  }
`;
