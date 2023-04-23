import React from 'react'
import Styled from 'styled-components'
import { Card } from '../../common'
import {useSelector, useDispatch} from 'react-redux'

const data  =[
  {
    id:1,
    title:'Audi S4 2020',
    tags:['Manual','Petrol'," Blue"],
    price:'49,950.00',
    percentage:'4',
    capacity:'20,360',
    image:'../images/trend.jpg'
  },
  {
    id:2,
    title:'Tesla Model 3',
    tags:['Automatic','Electric'," Black"],
    price:'42,800.00',
    capacity:'207',
    image:'../images/citroen-4.jpg'
  },
   {
    id:3,
    title:'Jeep Grand Cherokee 2021',
    tags:['Automatic','Diesel',"Red"],
    price:'35,460.00',
    capacity:'207',
    image:'../images/honda3.jpeg'
  },
]

export default function RecentProductindex() {
    const { 
  product,
  isLoading, 
  isError, 
  alertText, 
  alertType} = useSelector(store => store.product)
  return (
    <RecentProductindexContainer>
        <div className="recentProductWrapper">
            <h2 className='recentTitle'>Recently Added Cars</h2>

            <div className="recentProductCardWrapper">
                {product?.slice(0,3).map((x, index)=> {
                return <Card x={x} key={x._id} index={index}/>
                })}        
            </div>
        </div>
    </RecentProductindexContainer>
  )
}


const RecentProductindexContainer = Styled.div`
width:100%;
 .recentProductWrapper {
    width:90%;
  max-width:1600px;
    padding:10rem 0;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:7rem;
    .recentTitle {
        font-size:3.5rem;
        color:var(--text-color);
        font-weight:700;
        width:100%;
        text-align:center;
    }
    .recentProductCardWrapper {
        width:100%;
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
        grid-gap:2rem;
    }
 }
`
