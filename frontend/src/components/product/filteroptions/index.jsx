import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Price from './Price'
export default function FilterOptionsindex() {
  return (
    <FilterOptionsContainer>
      <h2>Filter By Options</h2>
      <Filters/>
      <Price/>
    </FilterOptionsContainer>
  )
}

const FilterOptionsContainer = styled.div`
width:100%;
margin:0 auto;
display:flex;
flex-direction:column;
gap:4rem;
position:sticky;
top:0%;
height:100vh;
@media (max-width:760px) {
  position: relative;
  height: 50rem;
}
 h2 {
  font-size:2rem;
  font-weight:700;
  color:var(--dark-1);
  text-transform:uppercase;
 }
`