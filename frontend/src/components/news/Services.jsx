import React from 'react'
import { FaCar } from 'react-icons/fa'
import Styled from 'styled-components'

const data = [
    {
        id:1,
        title:'Global Car Brands', 
        desc:'Incididunt labore dolorIncidid untlabore dolore Incididunt labore dolore'
    },
    {
        id:2,
        title:'Financing Guide', 
        desc:'Incididunt labore dolore magna Incid iduntlab ore dolore Incididunt labore dolore'
    },
    {
        id:3,
        title:'Honest Car Reviews', 
        desc:'Incididunt labore dolore magnIncididunt labore dolore'
    }
]

export default function Services() {
  return (
    <ServicesContainer>
        <h2>Car Reviews, Special Offers, Dealer News And More
            <span className="newstitle">
                Incididunt labore dolore magna aliqua
                 enim veniam quis nostrud tempor tempor 
                 adispecing
            </span>
        </h2>
        <div className="headerWrapper">
        {data.map(x=> {
            return <header key={x.id}>
                <div className="iconImageWrapper">
                  <FaCar/>
                </div>
                <h2>{x.title}
                <span className="newsSpan">{x.desc}</span>
                </h2>
            </header>
        })}
        </div>
    </ServicesContainer>
  )
}

const ServicesContainer = Styled.div`
width:100%;
padding:3rem 0;
 h2 {
    font-size:3rem;
    font-weight:600;
    color:var(--text-color);
    width:80%;
    margin:0 auto;
    text-align:center;
    .newstitle {
        color:var(--grey);
        font-weight:400;
        display:block;
        font-size:2rem;
        padding:1.2rem 0;
    }
 }
`
