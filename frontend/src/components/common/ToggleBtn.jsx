
import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {FaSun, FaMoon} from 'react-icons/fa'
import {toggleStorageTheme} from '../../Features'
export default function ToggleBtn() {
  const dispatch = useDispatch()
  const {touched} = useSelector(store=> store.toggle)
  const toggleTouched = ()=> {
      dispatch(toggleStorageTheme())
  }
  return (
    <ToggleBtnContainer onClick={toggleTouched}>
        <div className={touched?'toggleSpan active':'toggleSpan'}>
        {touched? <FaSun/>:<FaMoon/>}
        </div>

    </ToggleBtnContainer>
    
  )
}

const ToggleBtnContainer = styled.div`
    width: 80px;
    height:3rem;
    position:relative;
    border-radius:40px;
    background:var(--grey-2);
    transition:all 1s;
    .toggleSpan {
        position:absolute;
        transform:translateX(10%);
        width:40%;
        top:7%;
        transition:all 1s;
        height:85%;
        border-radius:30px;
        background:var(--text-color);
        display:flex;
        align-items:center;
        justify-content:center;
        svg {
          color:var(--white);
          font-size:1.6rem;
        }
        &.active {
         transform:translateX(150%);
        }
    }
`
