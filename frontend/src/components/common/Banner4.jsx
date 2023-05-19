import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const data = [
  {
    id: 1,
    title: "Request A 24 Hour Test Drive",
    image: "../images/car-service-banner.jpg",
    desc: "Fair & Instant Cash Offer In Minutes.",
    btntext: "Apply Now",
  },
  {
    id: 2,
    title: "Car Workshop Services",
    image: "../images/buying-awd-hybrid-cars.jpg",
    desc: "All Garage Services Under One Roof",
    btntext: "Book Inspection",
  },
  {
    id: 3,
    title: "Get Instant Cash For Trade-Ins",
    image: "../images/engine.jpeg",
    desc: "All Garage Services Under One Roof",
    btntext: "Book Inspection",
  },
];
export default function Banner4() {
  return (
    <Banner4Container>
      <div className="banner4Wrapper">
        {data.map((x) => {
          return (
            <header key={x.id}>
              <img src={x.image} alt="images" className="image" />
              <div className="banner4Gradient"></div>
              <div className="headerContent">
                <img
                  src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2021/12/header-icon.png"
                  className="sidebarIcon"
                  alt="sidebarIcon"
                />
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
                <Link to={"/car-dealership/workshop-services"} className="btn">
                  {x.btntext}
                </Link>
              </div>
            </header>
          );
        })}
      </div>
    </Banner4Container>
  );
}

const Banner4Container = styled.div`
  width: 100%;
  .imageWrap {
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    transform: scale(-1, 1);
    width: 100%;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
    z-index: 30000;
  }
  .banner4Wrapper {
    width: 100%;
    margin: 0 auto;
    z-index: 1000;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
    header {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      width: 100%;
      height: 47rem;
      position: relative;

      .image {
        width: 100%;
        position: absolute;
        height: 100%;
        object-fit: cover;
      }
      .banner4Gradient {
        z-index: 400;
        background: linear-gradient(to right, #062e742d, #0b1f41e3);
        position: absolute;
        top: 0px;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .headerContent {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        z-index: 4000;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 1.7rem;
        .sidebarIcon {
          width: 8rem;
          z-index: 300;
        }
        .sidebarIcon {
          width: 6rem;
          z-index: 300;
        }
        .btn {
          border: none;
          outline: none;
          padding: 1.4rem 3rem;
          font-size: 1.8rem;
          color: #fff;
          margin: 2rem 0;
          border: 1px solid #fff;
          background: transparent;
          &:hover {
            background: #fff;
            color: var(--dark-1);
          }
        }
        p {
          font-size: 2rem;
          font-weight: 400;
          font-family: "Barlow", sans-serif;
          line-height: 1.5;
          width: 80%;
          color: #f7f7f7;
          z-index: 60;
          @media (max-width: 480px) {
            font-size: 1.8rem;
          }
        }
        h2 {
          font-size: 3.8rem;
          font-weight: 700;
          color: #fff;
          padding-right: 5rem;
          z-index: 60;

          @media (max-width: 980px) {
            font-size: 4rem;
            width: 100%;
            padding-right: 3rem;
          }
        }
      }
    }
  }
`;
