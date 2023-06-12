import React from 'react'
import Styled from 'styled-components'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useState } from 'react'
export default function AccordionCard({x}) {
  const [toggle, setToggle] = useState(false)
  return (
    <AccordionCardWrapper>
      <div className="accordionCardTop"  onClick={()=> setToggle(!toggle)}>
        <div className="toggleBtn">
          {toggle?<BiMinus/>:<BiPlus/>}
        </div>
        <h3>{x.head}</h3>
      </div>
      <div className={toggle?"accordionBottom active":"accordionBottom"}>
        <p className='family1'>{x.text}</p>
      </div>
    </AccordionCardWrapper>
  )
}

const AccordionCardWrapper = Styled.div`
width:100%;
padding:.6rem 1.7rem;
background:#fff;
display:flex;
flex-direction:column;
gap:1rem;
overflow:hidden;
&:hover {
  background:transparent;
  cursor:pointer;
  .accordionCardTop {
  .toggleBtn {
    background:var(--blue-1);
  }
}
}

.accordionBottom {
  max-height:0;
  width:100%;
  transition:all .3s;
  &.active {
  padding:2rem 0;
  max-height:28rem;
  }
  p {
    font-size:1.8rem;
    line-height:1.4;
    color:var(--grey);
    font-weight:400;
    width:80%;

  }
}
.accordionCardTop {
  width:100%;
  display:flex;
  align-items:center;
  gap:2rem;
  .toggleBtn {
    width:4rem;
    height:4rem;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--red);
    &:hover {
      background:var(--blue-1);
    }
    svg {
      width:70%;
      height:70%;
      color:#fff;
    }
  }
  h3 {
    font-size:1.6rem;
    width:100%;
    font-weight:700;
    color:var(--blue-1);
  }
}
`
