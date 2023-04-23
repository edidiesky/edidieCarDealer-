import React, {useState} from 'react'
import styled from 'styled-components'
import { Banner3, Footer, Newsletter, Banner2, CopyRight, Meta } from '../components/common'
import {PaymentIndex, Links} from '../components/checkout'
export default function PlaceOrder() {
  return (
    <>
    <Meta title='Payment Method'/>
    <PlaceOrderContainer>
      <Banner2 title='Payment' step1 step2='payment'/>
      <div className="placeOrderWrapperTop">
            <p>Hello</p>
            <p>Need Assistance? Call customer service at 888-555-5555.</p>
            <p>E-mail them at info@yourshop.com</p>
        </div>
      <div className='placeOrderWrapperCenter'>
      <Links step1={'billing'} step2={'payment'}/>
      <PaymentIndex/>

      </div>
      <CopyRight/>
    </PlaceOrderContainer>
    </>
  )
}

const PlaceOrderContainer = styled.div`
width:100%;
.placeOrderWrapperTop {
    width: 90%;
    max-width:1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background:var(--white);
    border-top: 1px solid var(--grey-2);
    border-bottom: 1px solid var(--grey-2);
    @media (max-width:780px) {
        flex-direction: column;
    }
    p {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--grey);
        padding: 2.5rem;
        border-right: 1px solid var(--grey-2); 
        @media (max-width:780px) {
        border-bottom: 1px solid var(--grey-2);
        border-right: none;
        width: 100%;
       }
    }
}
.placeOrderWrapperCenter {
    width:90%;
    display:grid;
    grid-template-columns:16vw 1fr;
    margin:0 auto;
    padding:2rem 0;
    grid-gap:3rem;
    @media (max-width:980px){
        grid-template-columns: 1fr;
    }
}
`
