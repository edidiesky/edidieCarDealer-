import React from "react";
import styled from "styled-components";
import { FaStar} from "react-icons/fa";

export default function Banner3() {
  return (
    <Banner3Container>
        
      <div className="serviceWrapper">
      <img className='imageIcon' src='/images/dealer1.png' alt='images' />
      <h3>Based On 4,500+ Reviews</h3>
      <div className="Banner3Left">
        <span className="ratingSpan">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </span>
        (Trusted Score 4.8 / 5.0)
      </div>
      </div>
    </Banner3Container>
  );
}

const Banner3Container = styled.div`
width:100%;
background-color: #fff;
box-shadow: 0 1rem 4rem rgba(0,0,0,.1);
 .serviceWrapper {
    width:90%;
    margin:0 auto;
    z-index:1000;
    padding:4.5rem 0;
    max-width:1600px;  
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    grid-gap:1rem;
    place-items: center;
    .Banner3Left {
        display: flex;
        align-items: center;
        gap: 1rem;  
        font-size:2rem;
        font-weight:400;
        font-family: "Barlow", sans-serif;
        color:var(--grey);
        .ratingSpan {
            display: flex;
            align-items: center;
            gap:1rem;
            
            svg {
                font-size: 2.5rem;
                color: rgb(255, 187, 0);
            }
        }
    }
    .imageIcon {
        width: 14rem;
    }
    h3 {
        font-size:2.7rem;
        font-weight:700;
        color:var(--dark-1);
    }
     @media (max-width:780px){
        grid-template-columns:repeat(1,1fr);
        grid-row-gap:4rem;
    }
}
 
`;
