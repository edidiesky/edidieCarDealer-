import React, {useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment';
import {useParams} from 'react-router-dom'
import styled from 'styled-components/macro'
import Message from '../../loaders/Message'
import LoaderIndex from '../../loaders'
import {useDispatch, useSelector} from 'react-redux'

export default function OrderLeft() {


    // get the user state
    const {addressData} = useSelector(store=> store.user)
    // get the order state
    const { 
    order, 
    isLoading, 
    isError, 
    isSuccess,
    alertType,
    alertText,
    successdelivered
    } = useSelector(store=> store.order)

    // get the user content
    const {
  userDetails,
  paymentData
} = useSelector(store=> store.user)

   //  get the delivered date and payment date
   let deliveredDate = moment(order?.createdAt)

    deliveredDate = deliveredDate.format("dddd, MMMM Do YYYY, h:mm:ss a")

    let paymentdate = moment(order?.createdAt)
    paymentdate = paymentdate.format("dddd, MMMM Do YYYY, h:mm:ss a")
    

  return (
    <OrderLeftContainer>
     {/*Loading state*/}
    { isLoading && <LoaderIndex loading={isLoading}/>}
    <div className="OrderLeftWrapper">

      {/*Shipping Details*/}
      <div className="OrderLeftWrapperTop top1">
        <div className="OrderLeftTop">
            <h3>Shipping Details</h3>
        </div>
        <ul className="OrderLeftList">
            <li> <span>Name</span>: {addressData?.firstname} {addressData?.lastname}</li>
            <li> <span>Email</span>: {addressData?.email}</li>
            <li> <span>Address</span>: {addressData?.address} {addressData?.city}, {addressData?.country}</li>
        </ul>

    {/*alert Message for delivered*/}
        {!order?.isDelivered? 
        <Message alertText='Not being delivered' alertType='danger'/>
                :
        <Message alertText={`Delivered on ${deliveredDate}`} alertType='success'/>
        }

      </div>

  {/*Payment Method*/}
      <div className="OrderLeftWrapperTop">
        <div className="OrderLeftTop">
            <h3>Payment Method</h3>
        </div>
        <ul className="OrderLeftList">
            <li><span>Method</span>: {paymentData}</li>
          </ul>

      {/*alert Message for successfull payment*/}
           {!order?.isPaid? 
                <Message alertText='Not yet being paid' alertType='danger'/>
                :
                <Message alertText={`Paid on ${paymentdate}`} alertType='success'/>
           }
      </div>

     {/*OrderLeft Items*/}
      <div className="OrderLeftWrapperCenter">
        <div className="OrderLeftTop">
            <h3>Order Items</h3>
        </div>
        {order?.orderItems?.map(x=> {
           return <div className="OrderLeftCenter" key={x._id}>
               <div className="OrderLeftContentLeft">
                <div className="imageWrapper">
                    {x?.image && x?.image.map((x=> {
                        return <img src={x?.image} alt='images'/>
                     }))}
                </div>
                <h3>{x?.title}</h3>
            </div>
           <h3 className='summary'>${x?.price} * {x?.quantity} = ${x?.price}</h3>
           
        </div>
        })}
    </div>
        </div>
    </OrderLeftContainer>
  )
}

const OrderLeftContainer = styled.div`
width:100%;
border: 1px solid var(--grey-2);
 .OrderLeftWrapper {
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    gap:2rem;
    width:100%;
  .OrderLeftWrapperTop {
    width:100%;
    border-bottom:1px solid var(--grey-2);
    padding-bottom:1rem;
    &.top1 {
        padding-top:2rem;
    }
    .OrderLeftList {
        width:100%;
        display:flex;
        flex-direction:column;
        padding-left:2.5rem;
        li {
            padding:1rem 0;
            font-size:1.8rem;
            color:var(--dark-1);
            font-weight:600;
            font-family:"Barlow", sans-serif;
            span {
                color:var(--grey);
                font-weight:400;
            }
        }
    }
    .OrderLeftTop {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid var(--grey-2);
    padding:1.4rem;
    h3 {
        font-size:2.4rem;
        color:var(--dark-1);
        font-weight:600;
    }
 }

  }
 
 .OrderLeftWrapperCenter {
    width:100%;
 .OrderLeftTop {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid var(--grey-2);
    padding:1.4rem;
    h3 {
        font-size:2.4rem;
        color:var(--dark-1);
        font-weight:600;
    }
 }
 .OrderLeftCenter {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid var(--grey-2);
    padding:2rem 4rem;
    padding-bottom:2.4rem;
    @media (max-width:480px) {
        padding:2rem 2.4rem;
        flex-direction: column;
            align-items: flex-start;
            gap:1.4rem;
    }

    .OrderLeftContentLeft {
        width:100%;
        display:flex;
        align-items:center;
        gap:3rem;
        flex:1;
        @media (max-width:680px) {
            flex-direction: column;
            align-items: flex-start;
        }
        .imageWrapper {
                    width:15rem;
                    position:relative;
                    height:8rem;
                    borderLeft-radius:5px;
                    img {
                        position:absolute;
                        top:0;
                        width:100%;
                        height:100%;
                        left:0;
                        borderLeft-radius:5px;
                        object-fit:cover;
                    }
                    }
        h3 {
            font-size:2rem;
            color:var(--dark-1);
            font-weight:400;
            font-family:"Barlow", sans-serif;
        }
    }
    .summary {
            font-size:2rem;
            flex:1;
            text-align:end;
            color:var(--dark-1);
            font-weight:400;
            font-family:"Barlow", sans-serif;
        }
 }
}
}

`
