import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'
import {getPage} from '../../Features'
import {useSelector, useDispatch} from 'react-redux'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
const PaginationContainer = Styled.div`
width:100%;
padding:1rem 0;
display:flex;
align-items:center;
justify-content:flex-end;
.PaginationWrapper {
	width:100%;
	display:flex;
	align-items:center;
	gap:1.5rem;
justify-content:flex-end;
	button {
		border:none;
		outline:none;
		height:4rem;
		width:6rem;
		border:1.5px solid var(--grey-2);
		background:transparent;
		font-size:1.4rem;
		font-weight:600;
		color:var(--text-color);
		border-radius:3px;
		transition:all .2s;
		cursor:pointer;
		display:flex;
	    align-items:center;
	    justify-content:center;

	    svg {
	    	font-size:2.4rem;
	    }
		&.active, &:hover {
			border:2.2px solid var(--text-color);
			box-shadow:0 1rem 3rem rgba(0,0,0,.3);
		}
	}
	.btnWrapper {
		display:flex;
	align-items:center;
	gap:.6rem;
	}
}

` 
export default function Pagination(argument) {
	// body...
	const [pagindex, setPagIndex] = useState(1)
	const dispatch = useDispatch()
	const {page, totalProduct, noOfPages} = useSelector(store=> store.product)
	const decreasePageNumber = (index)=> {
		if (page <=  noOfPages) {
			dispatch(getPage(noOfPages))
		} else {
			dispatch(getPage(page - 1))
		}
	}
	const increasePageNumber = (index)=> {
		if (page >  noOfPages) {
			dispatch(getPage(1))
		} else {
			dispatch(getPage(page + 1))
		}
	}
	const handlePage = (index)=> {
		setPagIndex(index + 1)
		dispatch(getPage(index))
	}
	return (
		<PaginationContainer>
		  <div className='PaginationWrapper'>
		    <button onClick={()=> decreasePageNumber(page)}><BiChevronLeft/></button>
		    <div className='btnWrapper'>
		    {[...Array(noOfPages).keys()].slice(0, 3).map((x, index)=> {
		    return <button 
		    key={index + 1} 
		    className={page === index + 1 ? 'active':""} 
		    onClick={()=> handlePage(index + 1)}
		    >{x + 1}</button>
		    })}
		    </div>
		    <button onClick={()=> increasePageNumber(page)}><BiChevronRight/></button>
		  </div>
		</PaginationContainer>
		)
}




