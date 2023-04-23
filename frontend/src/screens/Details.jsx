import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'

import DeatailsTopindex from '../components/details/top'
import DetailsBottomindex from '../components/details/bottom'
import RecentProductindex from '../components/details/recent'
import {CopyRight} from '../components/common'
import { Footer, Newsletter, Meta } from '../components/common'
import LoaderIndex from '../components/loaders'
import Message from '../components/loaders/Message'
import {
  getSingleProductDetails,
  getAllProduct,
  clearReviewAction
} from '../Features'

export default function Details() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])

  const {id} = useParams()

  const dispatch = useDispatch()

  const { 
    isLoading, 
    isError, 
    size, 
    alertText,  
    alertType,
    reviewSuccess,
    productDetails
  } = useSelector(store=> store.product)


  useEffect(()=> {
    if (reviewSuccess) {
      dispatch(clearReviewAction())
      dispatch(getSingleProductDetails(id))
    }
    // dispatch(clearPage())
    dispatch(getSingleProductDetails(id))
    dispatch(getAllProduct())
  }, [id, reviewSuccess])

  return (
    <>
    <Meta title={`${productDetails?.title}`}/>
    <DetailsContainer>
    {
         isLoading?<LoaderIndex loading={isLoading}/>
         :
          isError? <Message alertText={alertText} alertType={alertType}/> :
          <>
      <DeatailsTopindex/>
      <DetailsBottomindex/>
      <RecentProductindex/>
      <CopyRight/>
       </>
    }
    </DetailsContainer>
    </>
  )

  // return (
  //   <>
  //   <Meta title={`${productDetails?.title}`}/>
  //   <DetailsContainer>
  //     <DeatailsTopindex/>
  //     <DetailsBottomindex/>
  //     <RecentProductindex/>
  //     <CopyRight/>
  //   </DetailsContainer>
  //   </>
  // )

}

const DetailsContainer = styled.div`
width:100%;
background:var(--white);
display:flex;
flex-direction:column;
gap:5rem;
`