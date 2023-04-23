import React from 'react'
import styled from 'styled-components'
import {BiCopyright} from 'react-icons/bi'

export default function CopyRight() {
  return (
    <CopyRightContent>
      <p>Copyright <BiCopyright/> Edidiong Essien</p>
    </CopyRightContent>
  )
}

const CopyRightContent = styled.div`
  width:100%;
  padding:2rem 0;
  background:#F7F9FA;
  p {
    width:100%;
    text-align:center;
    font-size:1.3rem;
    color:var(--grey);
    font-weight:600;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.5rem; 
  }
`
