import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "./Form";
import SelectReview from "./SelectReview";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
// import LoaderIndex from '../../loaders'
// import Message from '../../loaders/Message'

export default function ReviewTab({ tabIndex }) {
  const {
    productDetails,
    reviewError,
    reviewSuccess,
    reviewLoading,
    alertText,
    alertType,
  } = useSelector((store) => store.product);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <motion.div transition={{ duration: 0.2 }}
    animate={{
      height: tabIndex === 1 ? "100%" : 0,
      opacity: tabIndex === 1 ? 1 : 0,
      display: tabIndex === 1 ? "flex" : "none",
    }}>
    <ReviewTabContainer
    >
      <div className="reviewBottomWrapper">
        <div className="detailsBottomFormWrapper">
          <h2>Reviews</h2>
          {/* select options category */}
          {/* form section */}
          <div className="reviewContent">
            {productDetails?.reviews?.map((x) => {
              return <ReviewCard key={x?._id} x={x} />;
            })}
          </div>

          {productDetails?.reviews?.length === 0 ? (
            <div className="noReviewsInfo">
              <h4 className="fs-18 family1">There are no reviews yet</h4>
              <div className="reviewStatement">
                <h4 className="fs-18 family1">
                  Your email will not be published. Required fields are marked
                </h4>
              </div>
            </div>
          ) : (
            <div className="noReviewsInfo">
              <h4 className="fs-18 family1">
                Leave a review on '{productDetails?.title}'
              </h4>
              <div className="reviewStatement">
                <h4 className="fs-18 family1">
                  Your email will not be published. Required fields are marked
                </h4>
              </div>
            </div>
          )}
          {/*Check if the user is in the data base in order to leave a review*/}
          {userInfo ? (
            <>
              <SelectReview />
              <Form />
            </>
          ) : (
            <span className={`alert family1 fs-20`}>
              <Link to={"/auth/signin"}> Sign up</Link> to{" "}
              {productDetails?.reviews?.length === 0 && "be the first to"} leave
              a review on '{productDetails?.title}'
            </span>
          )}
        </div>
      </div>
    </ReviewTabContainer>
    </motion.div>
  );
}

const ReviewTabContainer = styled.div`
  width: 100%;
  background: var(--white);
  width: 100%;
  .reviewBottomWrapper {
    width: 100%;
    .reviewInfo {
      width: 100%;
      padding: 1.8rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 780px) {
        padding: 2rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
      }

      h3 {
        font-size: 2rem;
        font-weight: 200;
        color: var(--blue-1);
      }
      .reviewBtn {
        border: none;
        outline: none;
        padding: 2rem 4rem;
        background: var(--red);
        color: var(--white);
        font-size: 1.9rem;
        cursor: pointer;
        &:hover {
          background: var(--blue-1);
        }
        @media (max-width: 980px) {
          padding: 1.6rem 4rem;
        }
      }
    }
    .detailsBottomFormWrapper {
      padding: 6rem 4rem;
      background: var(--white);
      width: 100%;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      @media (max-width: 780px) {
        padding: 6rem 4rem;
      }
      .alert {
        width: 100%;
        padding: 2rem 2.4rem;
        font-size: 1.6rem;
        color: var(--dark-grey);
        font-weight: 600;
        border-radius: 6px;
        background-color: #ffebe9;
        color: rgb(0 84 210 / 93%);
        border: 1.5px solid #ffc0c0;

        a {
          font-size: 1.6rem;
          color: var(--grey);
          font-weight: 500;
          text-decoration: underline;
        }
      }
      .reviewContent {
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        grid-row-gap: 3rem;
      }

      h2 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--dark-1);
      }

      .noReviewsInfo {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        h4 {
          font-weight: normal;
          color: var(--blue-2);
        }

        .reviewStatement {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }
`;
