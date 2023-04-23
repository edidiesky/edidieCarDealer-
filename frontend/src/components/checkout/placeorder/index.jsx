import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import PlaceOrderLeft from './PlaceOrderLeft'
import PlaceOrderRight from './PlaceOrderRight'
import {useDispatch, useSelector} from 'react-redux'

export default function Placeorderindex() {
    // get the cart content
    const {isLoading,isError, bag, TotalShoppingPrice, totalPrice} = useSelector(store=> store.bag)

    const {
  addressData,
  userDetails,
  paymentData
} = useSelector(store=> store.user)

  return (

    <PlaceorderIndexContainer>
      <PlaceOrderLeft/>
      <PlaceOrderRight/>
    </PlaceorderIndexContainer>
  )
}

const PlaceorderIndexContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:3rem;
align-items:flex-end;
`
