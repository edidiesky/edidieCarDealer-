import React, { useEffect } from 'react'
import Styled from 'styled-components'
import { Banner3, Banner4 } from '../components/common'
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
    </ContactContainer>
  )
}

const ContactContainer = Styled.div`
width:100%;
`
