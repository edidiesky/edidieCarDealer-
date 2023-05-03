import React from "react";
import styled from "styled-components";
import { Rating } from "../../common";
import moment from "moment";
export default function ReviewCard({ x }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");
  return (
    <ReviewCardContainer>
      <div className="rCardWrapper">
        <div className="rCardLeft">
          <div className="rCardLeftTop">
            <div className="reviewAuthor" alt="images">
              {x?.firstname[0]}
            </div>
            <h3 className="reviewAName">{x?.firstname}</h3>
          </div>
          <div className="rCardLeftCenter">
            <div className="ratingWrapper">
              <Rating value={x?.userrating} type="review" />
              <h4 className="rating">({x?.userrating})</h4>
            </div>
            <p>{x?.comment}</p>
          </div>
        </div>
        <h4 className="rCardRight">{createddate}</h4>
      </div>
    </ReviewCardContainer>
  );
}

const ReviewCardContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--grey-3);
  padding-bottom: 2rem;

  .rCardWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 1.4rem;
    }

    width: 100%;
    .rCardRight {
      width: 100%;
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--text-color);
      text-align: end;
    }
    .rCardLeft {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      .rCardLeftCenter {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        .ratingWrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          .rating {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.8;
            color: var(--dark-1);
          }
        }
        p {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 1.8;
          color: rgb(34, 34, 34);
        }
      }

      .rCardLeftTop {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        .reviewAuthor {
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;
          align-items: center;
          display: flex;
          justify-content: center;
          font-size: 2rem;
          justify-content: center;
          font-weight: 600;
          background: var(--text-color);
          color: #fff;
        }
        .reviewAName {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-color);
        }
      }
    }
  }
`;
