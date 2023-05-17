import React from "react";
import styled from "styled-components";
import CollectionIndex from "./collection";
import { Link } from "react-router-dom";


export default function InventoryIndex() {
  return (
    <InventoryContainer>
      <div className="inventoryWrapper w-90 auto">
        <div className="inventoryTop flex item-center gap-2">
          <h1 data-aos="fade-right " className="flex-1">
            Latest Inventory
            <span>
              <img
                src="/images/heading-separator.png"
                alt="title-images"
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
          <Link to={"/car-dealership/inventory"} className="inventoryBtn family1">
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
        padding: 1.7rem 4rem;
        border: none;
        outline: none;
        font-size: 2rem;
        cursor: pointer;
        font-weight: 500;
        color: rgb(83, 83, 83);
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
