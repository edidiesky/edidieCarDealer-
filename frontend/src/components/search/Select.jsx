import React from 'react'
import Styled from 'styled-components'
import Options from './Options'

export default function Select() {
  return (
    <SelectOptionsContent>
      <div className="selectWrapper">
        <Options/>
      </div>
    </SelectOptionsContent>
  )
}

const SelectOptionsContent = Styled.div`
width:100%;
`