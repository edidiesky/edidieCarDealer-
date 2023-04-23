import React from "react";
import styled from "styled-components";
import CollectionIndex from "./collection";
import { Link } from "react-router-dom";

export default function InventoryIndex() {
  return (
    <InventoryContainer>
      <div className="inventoryWrapper">
        <div className="inventoryTop flex item-center gap-2">
          <h1 data-aos="fade-right " className="flex-1">
            Latest Inventory
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
        <CollectionIndex />
        <div
          className="inventoryBtnWrapper"
          data-aos="slide-up"
          data-aos-duration="700"
        >
          <Link to={"/avada/product"} className="inventoryBtn family1">
            Search for all Cars
          </Link>
        </div>
      </div>
    </InventoryContainer>
  );
}

const InventoryContainer = styled.div`
  width: 100%;
  .inventoryWrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 6rem 0;
    .inventoryBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .inventoryBtn {
        padding: 2rem 4rem;
        border: none;
        outline: none;
        font-size: 2.2rem;
        cursor: pointer;
        font-weight: 400;
        color: var(--dark-1);
        border: 1px solid var(--dark-1);
        background: transparent;
        &:hover {
          background: var(--blue-1);
          color: #fff;
          border: 1px solid var(--blue-1);
        }
      }
    }
    .inventoryTop {
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
