import React, { useEffect } from 'react'
import Newsindex from '../components/news'
import Styled from 'styled-components'
import { Banner3, Banner4, Meta } from '../components/common'
export default function News() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  return (
    <>
    <Meta title='News'/>
    <NewsContainer>
      <Newsindex/>
      <Banner3/>
      <Banner4/>
    </NewsContainer>
    </>
  )
}


const NewsContainer = Styled.div`
width:100%;
`