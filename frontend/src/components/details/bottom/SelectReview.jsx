import React, {useState} from 'react'
import Styled from 'styled-components'
import {BsStar, BsStarFill} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import {getRating, createReviewProduct} from '../../../Features'
export default function SelectReview() {
   const {rating} = useSelector(store=> store.product)
   const dispatch = useDispatch()
  return (
     <SelectReviewContainer>
        <div className='selectReviewWrapper'>
           <div className={rating >= 1? 'selectContent active':"selectContent"} onClick={()=> dispatch(getRating(1))}>
              <span className='selectSpan'>
                 {rating >= 1?<><BsStarFill/></>:<><BsStar/></>}
              </span>
              1
           </div>
           <div className={rating >=2? 'selectContent active':"selectContent"} onClick={()=> dispatch(getRating(2))}>
              <span className='selectSpan'>
                 {rating >= 2?<><BsStarFill/><BsStarFill/></>:<><BsStar/><BsStar/></>}
              </span>
              2
           </div>
           <div className={rating >=3? 'selectContent active':"selectContent"} onClick={()=> dispatch(getRating(3))}>
              <span className='selectSpan'>
                 {rating >= 3?<><BsStarFill/><BsStarFill/><BsStarFill/></>:<><BsStar/><BsStar/><BsStar/></>}
              </span>
              3
           </div>
           <div className={rating >=4? 'selectContent active':"selectContent"} onClick={()=> dispatch(getRating(4))}>
              <span className='selectSpan'>
                 {rating >= 4?<><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></>:<><BsStar/><BsStar/><BsStar/><BsStar/></>}
              </span>
              4
           </div>
           <div className={rating >=5? 'selectContent active':"selectContent"} onClick={()=> dispatch(getRating(5))}>
              <span className='selectSpan'>
                 {rating >= 5?<><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></>:<><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></>}
              </span>
              5
           </div>
        </div>
     </SelectReviewContainer>
  )
}

const SelectReviewContainer = Styled.div`
  width:100%;
  .selectReviewWrapper {
   width:100%;
   padding:1rem 0;
   display:flex;
   align-items:center;
   gap:1rem;
   flex-wrap:wrap;
   .selectContent {
      padding:1rem 1.5rem;
      border:1px solid var(--grey-2);
      display:flex;
      align-items:center;
      font-size:1.5rem;
      font-weight:600;
      color:var(--dark-1);
      transition:all .2s;
      gap:1rem;
      border-radius:6px;
      &.active {
         border:1px solid #e1cf1b;
         color:#e1cf1b;
         .selectSpan {
            svg {
               color:#e1cf1b;
            }
         }
      }
      .selectSpan {
      display:flex;
      align-items:center;
      font-size:1.5rem;
      gap:.3rem;
      font-weight:600;

      svg {
         color:#e1cf1b;
         font-size:1.7rem;
         transition:all .2s;
      }
      }
   }
  }
`
