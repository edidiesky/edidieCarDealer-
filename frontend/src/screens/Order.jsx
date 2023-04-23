import React, {useState} from 'react'
import styled from 'styled-components'
import { Banner3, Footer, Newsletter, Banner2, Meta } from '../components/common'
import {Orderindex} from '../components/checkout'
import {CopyRight} from '../components/common'
export default function Order() {
  return (
    <>
    <Meta title='My Order'/>
    <OrderContainer>
      <Banner2 title='My Order' step1 step2='Order'/>
      <div className='OrderCenter'>
      <Orderindex/>
      </div>
      <CopyRight/>
    </OrderContainer>
    </>
  )
}

const OrderContainer = styled.div`
width:100%;

.OrderCenter {
    width:90%;
    margin:0 auto;
    max-width:1600px;
    padding:2rem 0;
    grid-gap:3rem;
    @media (max-width:980px){
        grid-template-columns: 1fr;
    }
}
`
