import React, {useState} from 'react'
import styled from 'styled-components'
import Form from './Form'
import Orders from './Orders'
export default function ProfileIndex() {
  return (
    <ProfileIndexContainer>
      <div className='profileIndexWrapper'>
          <Form/>
          <Orders/>
      </div>
    </ProfileIndexContainer>
  )
}

const ProfileIndexContainer = styled.div`
width:100%;

.profileIndexWrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:3rem;
}

`
