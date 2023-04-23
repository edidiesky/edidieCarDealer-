import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Links({step1, step2, step3}) {
    const [index, setIndex] = useState(0)
  return (
    <LinksContainer>
          {step1?
                 <NavLink to={`/${step1}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }>
                  Billing Details
                 </NavLink>
                 :
                 <NavLink to={`/${step1}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    } style={{display:"none", color:"#ccc"}}>
                     {step1}
                 </NavLink>
                 }
                 {step2?
                 <NavLink to={`/${step2}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }>
                     Payment Method
                 </NavLink>
                 :
                 <NavLink to={`/${step2}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    } style={{display:"none", color:"#ccc"}}>
                     {step2}
                 </NavLink>
                 }
                 {step3?
                 <NavLink to={`/${step3}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }>
                     Place Order
                 </NavLink>
                 :
                 <NavLink to={`/${step3}`} 
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    } style={{display:"none", color:"#ccc"}}>
                     {step3}
                 </NavLink>
                 }
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
width:100%;
        display:flex;
        flex-direction:column;
        gap:1rem;
        align-items:flex-start;
        @media (max-width:780px) {
         flex-direction:row;
         gap:0;
         align-items:center;
        }
        a {
            padding:1.8rem 0;
            border:none;
            outline:none;
            width:100%;
            text-align:start;
            border-bottom:1px solid var(--grey-2);
            background:transparent;
            font-size:1.7rem;
            font-weight:400;
            color:var(--grey-2);
            cursor: pointer;
            @media (max-width:780px) {
           border-bottom:none;
           font-size:1.6rem;
           flex:1;
           text-align:center;
           padding:1rem 0;
        }
        @media (max-width:480px) {
           border-bottom:none;
           font-size:1.24rem;
           flex:1;
           text-align:center;
           padding:1rem 0;
        }
            &.active {
            color:var(--blue-1);
            font-weight:600;
        }
            
        }
    
`
