import React from 'react'
import styled from 'styled-components/macro'
import {BiSearch} from 'react-icons/bi'

function HeaderCenter() {
  return (
    <HeaderCenterContainer>
      <form className='headerForm'>
        <BiSearch/>
        <input 
          type='text'
          placeholder='Search for Car product'
        />
      </form>
    </HeaderCenterContainer>
  )
}
const HeaderCenterContainer = styled.div`
min-height:5rem;
padding:1.4rem 0;
background:var(--white);
`
export default HeaderCenter