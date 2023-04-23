import React from 'react'
import styled from 'styled-components'

export default function Bar({toggle, type}) {
  if (type === 'cross') {
  return  <BarContent onClick={toggle} className='crosses'>
        <div className="cross cross1"></div>
        <div className="cross cross2"></div>
        <div className="cross cross3"></div>
    </BarContent>
  }
  return (
    <BarContent className='bars' onClick={toggle}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
    </BarContent>
  )
}

const BarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  width: 3rem;
  transition: all .6s;
  cursor: pointer;
  &.bars {
  @media (min-width:980px) {
    display: none;
  }
  }
  &.crosses:hover .cross{
    &.cross1 {
      transform:translateY(3px) rotate(-135deg);
    }
    &.cross2 {
      transform:translateY(-3px) rotate(135deg);
    }
    }
  
  &:hover .cross, .bar {
      background-color: var(--blue-1);

  }
  &:hover{
    .bar1{
      transform: translateY(-2px);
    }
    .bar3 {
      transform: translateY(2px);
    }
  }
  .cross {
    width: 3.2rem;
    cursor: pointer;
    height:.3rem;
    background-color: #e2dcdc;
    transition: all .3s;
    z-index: 400;
    
    &.cross1 {
      transform:translateY(3.px) rotate(-45deg);
    }
     &.cross2 {
      transform:translateY(-3.px) rotate(45deg);
    }
    &.cross3{
      display: none;
    }
  }
  .bar {
    width: 5rem;
    height: .5rem;
    background-color: #333;
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s;
  }
`
