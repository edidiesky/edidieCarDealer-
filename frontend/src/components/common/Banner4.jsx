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
              <img
                src="data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__clip0_75_23031%29%22%20fill%3D%22rgba%288%2C27%2C54%2C1%29%22%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M839.644%20954C1138.37%20793.549%201337%20508.902%201337%20184.5c0-63.218-7.54-124.926-21.9-184.5H1920v954H839.644zm0%200C676.842%201041.44%20484.311%201092%20278%201092c-584.87%200-1059-406.302-1059-907.5S-306.87-723%20278-723c511.098%200%20937.63%20310.269%201037.1%20723H0v954h839.644z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1011.55%20954C1221.42%20793.95%201353%20564.007%201353%20308.5c0-108.584-23.76-212.552-67.2-308.5H1920v954h-908.45zm0%200c-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567H0v954h1011.55z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0_75_23031%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                alt=""
                className="imageWrap"
              />
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
      /* .banner4Gradient {
        z-index: 400;
        background-image: linear-gradient(
          90deg,
          rgb(4 25 54 / 78%) 30%,
          rgba(8, 27, 53, 0) 65%
        );
        position: absolute;
        top: 0px;
        left: 0;
        height: 100%;
        width: 100%;
      } */
      .headerContent {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        z-index: 80;
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
