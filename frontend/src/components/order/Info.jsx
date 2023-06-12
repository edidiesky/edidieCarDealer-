import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Info() {
  const { bag } = useSelector((store) => store.bag);
  const { order } = useSelector((store) => store.order);
  return (
    <div className=" w-90 auto py-3">
      <h2
        className="py-2 family1 text-bold text-dark"
        style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
      >
        Order details
      </h2>
      <RightWrapper className="py-2 w-90 auto">
        <div className="top flex column w-100 gap-4">
          <div className="w-100 flex column gap-4">
            {/* head of the table */}
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-18 family1 text-bold text-dark">Product</h4>
              <h4 className="fs-18 family1 text-bold text-dark">Sub Total</h4>
            </div>
            {/* order content */}
            {bag?.map((x) => {
              return (
                <div className="w-100 flex item-center gap-3">
                  {/* order image */}
                  <div className="w-100 flex item-center product gap-1">
                    <img src={x?.image[0]} alt="" style={{ height: "15rem" }} />
                    <div className="flex column gap-1">
                      <h6 className="fs-16 text-bold family1 text-dark">
                        {x?.title} × {x?.quantity}
                      </h6>
                      <h6 className="fs-16 text-bold family1 text-dark">
                        Colors: Blue Grey
                      </h6>
                    </div>
                  </div>
                  {/* total qty price */}
                  <h5 className="fs-20 text-light family1 text-dark py-3">
                    ${x?.price}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex summary center py-2">
          {/* order summary */}
          <div className="w-50 flex gap-2 column">
            <h5 className="text-bold family1 fs-18 text-dark w-100 flex item-center justify-space">
            EstimatedTax
              <span className="text-light">${order?.estimatedTax}</span>
            </h5>

            <h5 className="text-bold family1 fs-18 text-dark w-100 flex item-center justify-space">
              Payment method
              <span className="text-light">{order?.paymentMethod}</span>
            </h5>
            <h5 className="text-bold family1 fs-18 text-dark w-100 flex gap-2 item-center justify-space">
              Total
              <span className="text-light">${order?.TotalShoppingPrice}</span>
            </h5>
          </div>
        </div>
      </RightWrapper>
    </div>
  );
}

const RightWrapper = styled.div`
  .w-50 {
    width: clamp(30%, 280px, 70%);
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  .w-90 {
    @media (max-width: 480px) {
      width: 100% !important;
    }
  }
  .summary {
    justify-content: flex-end;
  }
  .product {
    gap: 1.5rem;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
