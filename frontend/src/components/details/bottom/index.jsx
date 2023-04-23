import React, {useState} from 'react'
import Styled from 'styled-components'
import {useSelector} from 'react-redux'
// import DescriptionTab from './DescriptionTab'
// import Form from './Form'
// import InfoTab from './InfoTab'
// import ReviewTab from './ReviewTab'

export default function DetailsBottomindex() {
  const {productDetails} = useSelector(store=> store.product)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <DetailsBottomContainer>
   
      <div className="detailsBottomWrapper">
        <div className="tabContent">
      
        </div>
      </div>
      
    </DetailsBottomContainer>
  )
}


const DetailsBottomContainer = Styled.div`
width:100%;
padding:9rem 0;
background:rgb(0 0 0 / 7%);
 .detailsBottomWrapper {
  width:75%;
  margin:0 auto;
  max-width:1600px;
  position:relative;
  height: 100%;
  @media (max-width:680px) {
    width:95%;
  }
  .tabContent {
    position:relative;
    min-height:20rem;
    width:100%;
    padding:2rem;
    background:var(--white);
  }
  .detailsTabBtnWrapper {
    width:100%;

    display:flex;
    aling-items:center;
    .tabBtn {
      background:transparent;
      font-size:1.8rem;
      color:var(--blue-1);
      font-weight:400;
      border:none;
      outline:none;
      padding:1.5rem 1rem;
      transition:all .2s;
      cursor:pointer;
      &.active {
        background:var(--white);
      }
      &:hover {
        background:var(--blue-1);
        color:var(--white);
      }
    }
  }
 }

`