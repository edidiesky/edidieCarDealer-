import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getColor } from "../../../Features";

const filterData = [
  { id: 1, color: "#222222", title: "black" },
  { id: 2, color: "#BD162D", title: "red" },
  { id: 4, color: "#f7f7f7", title: "grey" },
  { id: 3, color: "#23608c", title: "blue" },
  { id: 5, color: "#fff", title: "White" },
];
export default function Filters() {
  const dispatch = useDispatch();
  return (
    <FilterContent>
      {filterData.map((x) => {
        return (
          <div className="filterContentWrapper family1" key={x.id}>
            <div
              className="filterContentLeft"
              onClick={() => dispatch(getColor(x.title))}
            >
              <div className="filterIcon">
                <div
                  className="icon"
                  style={{ background: `${x.color}` }}
                ></div>
              </div>
              <h3>{x.title}</h3>
            </div>
          </div>
        );
      })}
    </FilterContent>
  );
}

const FilterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (max-width: 780px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
  .filterContentWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    cursor: pointer;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
    &:hover {
      .filterContentLeft {
        .filterIcon {
          border: 1.5px solid #000;
        }
      }
    }

    .filterContentRight {
      h4 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--blue-1);
      }
    }

    .filterContentLeft {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h3 {
        font-size: 1.7rem;
        font-weight: 400;
        color: var(--dark-1);
        text-transform: capitalize;
      }
      .filterIcon {
        width: 5rem;
        height: 5rem;
        border: 1px solid #ccc;
        display: grid;
        place-items: center;
        border-radius: 5px;
        transition: all 0.3s;
        .icon {
          width: 85%;
          height: 85%;
          border-radius: 5px;
        }
      }
    }
  }
`;
