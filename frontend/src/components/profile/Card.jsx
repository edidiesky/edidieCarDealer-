import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'
import {useNavigate, Link} from 'react-router-dom'
import {BiCheck} from 'react-icons/bi'
import moment from 'moment';
import {FaTimes} from 'react-icons/fa'
import {adminDeleteProduct, adminDeleteCustomer} from '../../Features'
import {useSelector, useDispatch} from 'react-redux'
import {RxDotsHorizontal} from 'react-icons/rx'
import {MdEdit} from 'react-icons/md'
import {BsTrash} from 'react-icons/bs'
export default function Card({x}) {
  let createddate = moment(x?.createdAt)
  createddate = createddate.format("dddd, MMMM Do YYYY, h:mm:ss a")

  const dispatch = useDispatch()
  const navigate = useNavigate()


  // Handling Order Navigation
  const handleOrderNav = ()=> {
    navigate(`/order/${x?._id}`)
  }


    return (
    <tr key={x?._id}>
           <td>{x._id}</td>
           <td>{createddate}</td>
           <td>${x.TotalShoppingPrice}</td>
           <td>{x.isPaid?<span className='tablespan true'>Paid</span>: <span className='tablespan false'>Not Paid</span>}</td>
           <td>{x.isDelivered?<span className='tablespan true'>Delivered</span>: <span className='tablespan false'>Not Delivered</span>}</td>
           <td>
               <div className='action'>
                    <h4 className='details' onClick={handleOrderNav}>See Details</h4>
               </div>
            </td>
         </tr>
    )
}