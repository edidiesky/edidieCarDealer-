import React, {useState} from 'react'
import styled from 'styled-components'
import { Banner3, Footer, Newsletter, Banner2, CopyRight } from '../components/common'
import ProfileIndex from '../components/profile'
import Cartindex from '../components/cart'
export default function Profile() {
  return (
    <ProfileContainer>
      <Banner2 title='My Profile' step1 step2='Profile'/>
      <div className='ProfileWrapperCenter'>
        <ProfileIndex/>
      </div>
      <CopyRight/>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
width:100%;
.ProfileWrapperTop {
    width: 90%;
    margin: 0 auto;
    max-width:1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:var(--white);
    border-top: 1px solid var(--grey-2);
    border-bottom: 1px solid var(--grey-2);
    @media (max-width:780px) {
        flex-direction: column;
    }
    p {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--grey);
        padding: 2.5rem;
        border-right: 1px solid var(--grey-2); 
        @media (max-width:780px) {
        border-bottom: 1px solid var(--grey-2);
        border-right: none;
        width: 100%;
       }
    }
}
.ProfileWrapperCenter {
    width:90%;
    padding:2rem 0;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:3rem;
}
`
