import React, {useEffect} from 'react'
import Styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { useLocation, useParams, Link} from 'react-router-dom'

import LoaderIndex from '../components/loaders'
import Message from '../components/loaders/Message'
import {CopyRight, Card, Meta} from '../components/common'


const SuccessListContainer = Styled.div`
width:100%;
padding:8rem 0;
min-height:100vh;
.SuccessListWrapper {
	width:85%;
	margin:0 auto;
	max-width:1100px;
	display:flex;
	flex-direction:column;
	gap:4rem;
	align-items:center;
	justify-content:center;
	h2 {
		font-size:4rem;
		font-weight:600;
		color:#333;
	}
	.successImage {
		width:100%;
		height:27rem;
	}
	.link {
		font-size:2.4rem;
		background:var(--blue-2);
		font-weight:500;
		color:#fff;
		padding:1.7rem 0;
		min-width:20rem;
		border-radius:2px;
		text-align:center;
		font-family:"Roboto Condensed", sans-serif;
		&:hover {
			background:var(--red);
		}
	}
}



` 
export default function Success(argument) {
	// body...
	


	return (
		<>
		<Meta title='Stripe- Payment Success'/>
		<SuccessListContainer>
		  <div className='SuccessListWrapper'>
		    <h2>Order Success</h2>
		  <img src={'/Success.svg'} alt='order-success' className='successImage'/>
		   <Link to={'/'} className='link'>Back Home</Link>
		  </div>
		</SuccessListContainer>
		<CopyRight/>
		</>
		)
}




