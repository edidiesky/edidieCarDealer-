import React from 'react'
import Styled from 'styled-components'
import { Banner } from '../common'
import Accordionindex from './accordion'
import ContactFormLeft from './ContactFormLeft'
import ContactFormRight from './ContactFormRight'
export default function Contactindex() {
  return (
    <ContactIndexContainer>
    <Banner title='Contact Us' step1={'home'} step2={'Contact Us'}/>
    <div className="contactWrapper">
      <ContactFormLeft/>
      <ContactFormRight/>
    </div>
    <Accordionindex/>
    </ContactIndexContainer>
  )
}


const ContactIndexContainer = Styled.div`
width:100%;
.contactWrapper {
  width:90%;
  margin:0 auto;
    max-width:1600px;
  display:grid;
  padding-top:10rem;
  grid-template-columns:35vw 1fr;
  @media (max-width:780px) {
    grid-template-columns:repeat(1, 1fr);
  }
}
`