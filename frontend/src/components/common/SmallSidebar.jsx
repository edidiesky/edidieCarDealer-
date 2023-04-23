import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {RxCross2} from 'react-icons/rx'

const sidebarData = [
  {id:1, title:'Home', path:''},
  {id:2, title:'Product', path:'/avada/product'},
  {id:3, title:'About Us', path:""},
  {id:4, title:'Latest News', path:"auto-news"},
  {id:5, title:'Contact', path:'avada/contact'},
]
export default function SmallSidebar({side, toggleSidebar}) {


  return (
    <SmallSidebarContent className={side? 'active':""}>
        <div className="barWrapper1">
            <RxCross2 onClick={toggleSidebar}/>
        </div>
        <div className="smallSidebarWrapper">
            {
            sidebarData.map(x=> {
                    return <Link to={`${x.path}`} key={x.id} onClick={toggleSidebar}>
                        {x.title}
                    </Link>
                })
            }
             
        </div>
    </SmallSidebarContent>
  )
}

const SmallSidebarContent = styled.div`
    width: 100vw;
    position: fixed;
    left: 0;
    top: -200%;
    z-index: 290200;
    background-color: #282626;
    transition: all .6s;
    &.active {
        top: 0;
    }
    @media (max-width:350px) {
        top:-120%;
    }
    .barWrapper1 {
        width:100%;
        display:flex;
        align-items:flex-end;
        justify-content:flex-end;
        padding:2rem 3rem;
        cursor:pointer;
        @media (min-width:780px) {
            display:none;
        }
  svg {
    width:3rem;
    height:3rem;
    color:#fff;
  }
  }
    .smallImage {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    .smallSidebarWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 400;
        a {
            width: 90%;
            margin:0 auto;
            padding: 2rem 2rem;
            height:80px;
            display: flex;
            align-items: center;
            justify-content:center;
            gap: 2rem;
            font-size: 2.4rem;
            font-weight: 600;
            color: #fff;
            z-index: 300;
            border-radius: 5px;
            transition: all .3s;
            cursor: pointer;
            
            &.sidebarTop2List {
                justify-content: center;
            }
            &:hover {
                background-color: #1f1d1d51;
                color: var(--blue-1);
            }
            @media (max-width:780px) {
                font-size: 1.8rem;
            }
        }
       }
`