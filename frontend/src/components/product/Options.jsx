import React, { useEffect } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getSort, getAllProduct, getLimit } from "../../Features";
export default function Options() {
  const dispatch = useDispatch();

  const optionContent1data = [
    { id: 1, title: "price" },
    { id: 2, title: "Name" },
    { id: 3, title: "latest" },
    { id: 4, title: "oldest" },
    { id: 5, title: "rating" },
  ];
  const optionContent2data = [
    { id: 1, title: "10" },
    { id: 2, title: "6" },
    { id: 3, title: "8" },
  ];

  return (
    <OptionsContent>
      <div className="optionContent1">
        <div className="optionContent1Top family1">
          <h4>
            Sort By <span>Price</span>
          </h4>
          <div className="icon">
            <BiChevronDown />
          </div>
        </div>
        <ul className="option1List family1">
          {optionContent1data.map((x) => {
            return (
              <li key={x.id} onClick={() => dispatch(getSort(x.title))}>
                {x.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="optionContent2 family1">
        <div className="optionContent2Top">
          <h4>
            Show <span>8 products</span>
          </h4>
          <div className="icon">
            <BiChevronDown />
          </div>
        </div>
        <ul className="option2List list1">
          {optionContent2data.map((x) => {
            return (
              <li key={x.id} onClick={() => dispatch(getLimit(x.title))}>
                {x.title}
              </li>
            );
          })}
        </ul>
      </div>
    </OptionsContent>
  );
}
const OptionsContent = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  .option1List {
    bottom: -450%;
    position: absolute;
  }
  .option2List {
    bottom: -270%;
    position: absolute;
  }

  .optionContent1,
  .optionContent2 {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 4rem;
    &:hover .option1List {
      display: block;
    }
    &:hover .option2List {
      display: block;
    }
    .option1List,
    .option2List {
      width: 24rem;
      position: absolute;
      background: var(--white);
      z-index: 400;
      display: none;
      li {
        width: 100%;
        padding: 1rem 2.4rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 1.2rem;
        color: var(--dark-1);
        &:hover {
          background: rgba(0 0 0 /5%);
        }
      }
    }
    .optionContent1Top,
    .optionContent2Top {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      h4 {
        width: 20rem;
        border: 1px solid var(--grey-2);
        padding: 0 2.4rem;
        height: 100%;
        font-size: 1.4rem;
        color: var(--grey);
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          color: var(--dark-1);
          font-weight: 600;
        }
      }
      .icon {
        height: 100%;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--grey-2);
        svg {
          color: var(--grey);
          font-size: 1.7rem;
        }
      }
    }
  }
`;
