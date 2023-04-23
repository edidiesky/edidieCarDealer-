import React from 'react'
import Styled from 'styled-components'
import Options from './Options'

export default function SelectOptions() {
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