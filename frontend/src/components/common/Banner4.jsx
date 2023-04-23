import React from "react";
import Styled from "styled-components";

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
              <img src={x.image} alt="images" />
              <div className="banner4Gradient"></div>
              <div className="headerContent">
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
                <button className="btn">{x.btntext}</button>
              </div>
            </header>
          );
        })}
      </div>
    </Banner4Container>
  );
}

const Banner4Container = Styled.div`
width:100%;
 .banner4Wrapper {
    width:100%;
    margin:0 auto;
    z-index:1000;
    max-width:1600px;  
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
    @media (max-width:760px) {
        grid-template-columns:1fr;
        grid-gap:2rem;
    }
    header {
        display:flex;
       flex-direction:column;
        gap:1.8rem;
        width:100%;
        height:47rem;
        position:relative;
            img {
                width:100%; 
                position:absolute;
                height:100%;
                object-fit:cover;
            }
            .banner4Gradient {
                position:absolute;
                height:100%;
                width:100%;
                background:linear-gradient(120deg,var(--gradient1) 0,#000000b3 50%,#000000ab 50%);
                z-index:40;
            }
        .headerContent {
            width:80%;
            height:100%;
            margin:0 auto;
            z-index:80;
            display:flex;
            justify-content:center;
            align-items:flex-start;
            flex-direction:column;
            gap:1.7rem;
            .btn {
                border:none;
                outline:none;
                padding:2rem 3rem;
                font-size:1.8rem;
                color:#fff;
                margin:2rem 0;
                border:1px solid #fff;
                background:transparent;
                &:hover {
                    background:#fff;
                    color:var(--dark-1);
                }
            }
            p {
            font-size:2.4rem;
            font-weight:400;
            font-family:'Barlow', sans-serif;
            line-height:1.5;
            width:80%;
            color:#f7f7f7;
            z-index:60;
             @media (max-width:480px) {
                font-size:1.8rem;
            }
        }
        h2 {
            font-size:3.5rem;
            font-weight:700;
            color:#fff;
            padding-right:5rem;
            z-index:60;
            
            @media (max-width:980px) {
                font-size:4rem;
                width:100%;
                padding-right:3rem;
            }
        }
        }
    }
}
 }
`;
