import React, {useEffect} from 'react'
import Styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { useLocation, useParams} from 'react-router-dom'

import {clearSearchAlert, calculateBagItem, clearCartAlert, getAllProduct} from '../Features'
import LoaderIndex from '../components/loaders'
import Message from '../components/loaders/Message'
import {CopyRight, Card} from '../components/common'


const SearchListContainer = Styled.div`
width:100%;
padding:8rem 0;
min-height:100vh;
.SearchListWrapper {
	width:95%;
	margin:0 auto;
	max-width:1100px;
	gap:6rem;
	h2 {
		font-size:2.5rem;
		font-weight:600;
		color:#222;
		.searchSpan {
			font-weight:400;
			color:var(--grey1);
		}
	}
	.cardWrapper {
		width:100%;
		padding:5rem 0;
		display:grid;
		grid-template-columns:repeat(3, 1fr);
		grid-gap:1.6rem;
		grid-row-gap:4rem;
		@media (max-width:780px) {
			grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
		}
	}
	
}



` 
export default function Search(argument) {
	// body...
	const location = useLocation()
	useEffect(()=> {
		window.scroll({top:0, left:0, behavior:'smooth'})
	}, [])
	const {search} = useSelector(store=> store.product)

	const dispatch = useDispatch()

	useEffect(()=> {
		if (search) {}
      dispatch(getAllProduct())
    }, [search])
	const { 
	isError, 
	isSuccess, 
	SearchDetails, 
	bag, 
	isLoading,
	product,
	alertText
} = useSelector(store=> store.product)


	return (
		<>
		{/*<Meta title='Caras Collection'/>*/}
		<SearchListContainer>
		  <div className='SearchListWrapper'>
		 {isLoading && <LoaderIndex loading={isLoading}/>}
          {isError? <Message alertText={alertText}/> :
          <>
           {product?.length === 0? <h2>No Results for <span className='searchSpan'>{search}</span></h2>:
           	<h2>Search Results for <span className='searchSpan'>{search}</span></h2>
           }
		   <div className='cardWrapper'>
		   {product?.map((x, index)=> {
		   	return <Card key={x._id} x={x}/>
		   })}
		   </div>
		   </>
           }
		  </div>
		  
		</SearchListContainer>
		<CopyRight/>
		</>
		)
}




