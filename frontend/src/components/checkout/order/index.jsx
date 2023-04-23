import React from 'react'
import styled from 'styled-components/macro'  
import {useDispatch, useSelector} from 'react-redux'  
import OrderLeft from './OrderLeft'
import OrderRight from './OrderRight'

export default function Orderindex() {
  return (
    <OrderIndexContainer>
      <OrderLeft/>
      <OrderRight/>
    </OrderIndexContainer>
  )
}

const OrderIndexContainer = styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 35vw;
grid-gap:2rem;
place-items:start;
max-width:1600px;
margin:0 auto;

@media (max-width:840px){
        grid-template-columns: 1fr;
}
`
