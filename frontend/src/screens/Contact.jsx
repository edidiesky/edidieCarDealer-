import React, { useEffect } from 'react'
import Styled from 'styled-components'
import { Banner3, Banner4, Footer, Newsletter } from '../components/common'
import Contactindex from '../components/contact'
export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <ContactContainer>
      <Contactindex />
      <Banner3 />
      <Banner4 />
      <Newsletter />
      <Footer />
    </ContactContainer>
  )
}

const ContactContainer = Styled.div`
width:100%;
`
