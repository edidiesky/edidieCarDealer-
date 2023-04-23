import React from 'react'
import Styled from 'styled-components'
import {useSelector} from 'react-redux'
export default function DescriptionTab({tabIndex}) {
   const { 
    productDetails,
  } = useSelector(store=> store.product)
  return (
     <DescriptionTabContainer className={tabIndex === 0? 'active':""}>
        <h2>Description</h2>
        <p>{
         productDetails?.description.substring(0, 300)
        }...
        </p>
     </DescriptionTabContainer>
  )
}

const DescriptionTabContainer = Styled.div`
background:var(--white);
padding:6rem 4rem;
display:flex;
flex-direction:column;
gap:3rem;
display:none;
&.active {
    display:flex;
}
 h2 {
    font-size:3.8rem;
    font-weight:700;
    color:var(--text-color);
   }
 p {
    font-size:2rem;
    color:rgb(34, 34, 34);
    line-height:1.7;
    font-family:"Barlow", sans-serif;
    @media (max-width:680px) {
      font-size:1.8rem;
  }
 }
`
