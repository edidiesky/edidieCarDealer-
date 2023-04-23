import React, {useEffect} from 'react'
import styled from 'styled-components/macro'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function OrderLeft() {
    // get the cart content
    const {isLoading,bag, TotalShoppingPrice, totalPrice} = useSelector(store=> store.bag)

    // get the user content
    const {
  addressData,
  userDetails,
  paymentData
} = useSelector(store=> store.user)

  // get the user content
    const {
  url,
  isError
} = useSelector(store=> store.order)

const navigate = useNavigate()

useEffect(()=> {
    if(url) {
        window.location.assign(url)
    }
}, [url])

  return (
    <OrderLeftContainer>
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
      </div>

  {/*Payment Method*/}
      <div className="OrderLeftWrapperTop">
        <div className="OrderLeftTop">
            <h3>Payment Method</h3>
        </div>
        <ul className="OrderLeftList">
            <li><span>Method</span>: {paymentData}</li>
          </ul>
      </div>

     {/*OrderLeft Items*/}
      <div className="OrderLeftWrapperCenter">
        <div className="OrderLeftTop">
            <h3>Order Items</h3>
        </div>
        {bag?.map(x=> {
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
    borderLeft-bottom:1px solid var(--grey-2);
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
        flex:1;
        display:flex;
        align-items:center;
        gap:3rem;
        @media (max-width:680px) {
            flex-direction: column;
            align-items: flex-start;
        }
        .imageWrapper {
                    width:15rem;
                    position:relative;
                    height:8rem;
                    border-top-left-radius:5px;
                    img {
                        position:absolute;
                        top:0;
                        width:100%;
                        height:100%;
                        left:0;
                        border-top-left-radius:5px;
                        object-fit:cover;
                    }
                    }
        h3 {
            font-size:1.8rem;
            color:var(--dark-1);
            font-weight:400;
            font-family:"Barlow", sans-serif;
        }
    }
    .summary {
            font-size:1.8rem;
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
