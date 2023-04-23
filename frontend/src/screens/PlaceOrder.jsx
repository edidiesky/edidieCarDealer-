import React, {useState} from 'react'
import styled from 'styled-components'
import { Banner3, Footer, Newsletter, Banner2, CopyRight } from '../components/common'
import {Placeorderindex, Links} from '../components/checkout'
export default function PlaceOrder() {
  return (
    <PlaceOrderContainer>
      <Banner2 title='My PlaceOrder' step1 step2='PlaceOrder'/>
      
      <div className='placeOrderWrapperCenter'>
      <Links step1={'billing'} step2={'payment'} step3={'placeorder'}/>
      <Placeorderindex/>
      </div>
      <CopyRight/>
    </PlaceOrderContainer>
  )
}

const PlaceOrderContainer = styled.div`
width:100%;
.placeOrderWrapperTop {
    width: 90%;
    margin: 0 auto;
    max-width:1600px;
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
    margin: 0 auto;
    max-width:1600px;
    grid-gap:3rem;
    @media (max-width:980px){
        grid-template-columns: 1fr;
    }
}
`
