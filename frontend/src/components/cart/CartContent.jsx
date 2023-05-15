import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Message from "../loaders/Message";
import Card from "./Card";
export default function CartContent() {
  // get the cart content
  const { bag } = useSelector((store) => store.bag);

  return (
    <CartContentContainer>
      {bag?.length === 0 ? (
        <Message alertText="No items in your bag" alertType={"danger"} />
      ) : (
        <>
          <h2>You have {bag?.length} items in your cart</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {bag?.map((x) => {
                return <Card key={x.id} x={x} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </CartContentContainer>
  );
}

const CartContentContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0,0,0,.08);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 780px) {
    display: none;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    border-bottom: 1px solid rgba(0,0,0,.08);
    padding: 2rem 0;
    text-transform: uppercase;
  }

  table {
    width: 100%;
    padding: 2rem 0;
    border-collapse: collapse;
    table-layout: fixed;
    thead {
      width: 100%;
      tr {
        width: 100%;
        padding: 2rem 0;
        th {
          width: 100%;
          font-size: 1.8rem;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0,0,0,.08);
          font-weight: 600;
          color: var(--dark-1);
          font-family: "Barlow", sans-serif;
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        width: 100%;
        td {
          text-align: center;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0,0,0,.08);
          font-size: 1.7rem;
          font-weight: 400;
          font-family: "Barlow", sans-serif;
          color: var(--grey);
          .iconsWrapper {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 2rem;
            justify-content: center;
            cursor: pointer;
            &:hover {
              background: rgba(0,0,0,.08);
            }

            svg {
              font-size: 2rem;
            }
          }

          &.title {
            font-size: 1.7rem;
            font-weight: 400;
            color: var(--blue-1);
          }
          .cartProduct {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 2rem;
            justify-content: center;

            .imageWrapper {
              img {
                width: 18rem;
                position: relative;
                border-radius: 5px;
                object-fit: cover;
              }
            }
          }
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5) {
            width: auto;
          }
          .btnWrapper {
            width: 100px;
            display: flex;
            align-items: center;
            height: 4rem;
            justify-content: center;
            margin: 0 auto;
            h3 {
              font-size: 1.7rem;
              font-weight: 600;
              color: #333;
              flex: 1;
              font-family: "Barlow", sans-serif;
              border-bottom: 1px solid rgba(0,0,0,.08);
              border-top: 1px solid rgba(0,0,0,.08);
              height: 100%;
              display: grid;
              place-items: center;
            }
            .cartBtn {
              border: none;
              outline: none;
              flex: 1;
              height: 100%;
              background: rgb(0 0 0 / 8%);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              &:hover {
                background: rgb(0 0 0 / 13%);
                svg {
                  color: var(--dark-1);
                }
              }
              svg {
                width: 1.4rem;
                height: 1.4rem;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
`;
