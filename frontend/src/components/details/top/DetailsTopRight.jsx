import React, { useState } from 'react'
import styled from 'styled-components'
import { ImLocation } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiFillCreditCard } from 'react-icons/ai'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Rating } from '../../common'

export default function DetailsTopRight() {
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const onChange = e => {
        setQty({ ...qty, [e.target.name]: e.target.value })
    }
    const {
        productDetails,
    } = useSelector(store => store.product)

    // get the product id from the params
    const { id } = useParams()

    // // handle the qty selection to cart
    // const handleAddToCart = ()=> {
    //   navigate(`/avada/cart/${id}?qty=${qty}`)
    // }
    const [read, setRead] = useState(false)
    return (
        <DetailsTopRightContainer>
            <div className="contentTop">
                <h2>{productDetails?.title}
                    <span>1.5 Zetec Compact SUV 112 Pshift</span>
                </h2>
                <div className='ratingWrapper'><Rating value={productDetails?.rating} type='review' /> ({productDetails?.rating}) </div>
                <h3>${productDetails?.price}</h3>
            </div>
            <p>
                {read ? productDetails?.description : `${productDetails?.description?.substring(0, 180)} ...`}
                {" "}
                <button onClick={() => setRead(!read)}>
                    {read ? 'Show less' : '  Read more'}
                </button>
            </p>

            <div className="contentBottom">
                {productDetails?.info?.map(x => {
                    return <>
                        <div className="location">
                            <ImLocation />
                            <h4><span>Location: </span> {x?.location}</h4>
                        </div>
                        <div className="location">
                            <BsTelephoneFill />
                            <h4><span>Contact Dealer via Phone:</span> (246) {x?.dealerContact} </h4>
                        </div>
                        <div className="location">
                            <AiFillCreditCard />
                            <h4><span>Financing Options: </span>Yes Available</h4>
                        </div>
                    </>
                })}

                <div className="btnContainer">
                    <div className="btnWrapper">
                        <button className='cartBtn' disabled={qty >= productDetails?.countInStock} onClick={() => setQty(qty + 1)}><BiPlus /></button>
                        <h3>{qty}</h3>
                        <button className='cartBtn' disabled={qty <= 1} onClick={() => setQty(qty - 1)}><BiMinus /></button>
                    </div>
                    <Link to={`/avada/cart/${id}?qty=${qty}`} className='addBtn'>Add to Cart</Link>
                </div>

            </div>
        </DetailsTopRightContainer>
    )
}


const DetailsTopRightContainer = styled.div`
width:90%;
display:flex;
flex-direction:column;
gap:1.6rem;
  .contentCenter {
    width:100%;
    display:flex;
   flex-direction:column;
   gap:4rem;
    .contentCenterIcons {
        padding-bottom:4rem;
        border-bottom:1px solid rgb(34, 34, 34);
        width:90%;
        margin:0 auto;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:2rem;

        .iconWrapper {
            display:flex;
            flex-direction:column;
            gap:1.6rem;
            h4 {
                font-size:1.8rem;
                font-weight:400;
                color:rgb(34, 34, 34);
            }
            .icons {
                width:12rem;
                height:13rem;
                border:1px solid var(--blue-1);
            }
        }

    }
    h3 {
        font-size:2.7rem;
        font-weight:700;
        color:var(--dark-1);
    }
  }

  .contentBottom {
    width:90%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin:0 auto;

    .btnContainer {
        width:100%;
        display:flex;
        align-items:center;
        gap:2rem;
        @media (max-width:480px) {
            flex-direction:column;
            align-items: flex-start;
        }
                .btnWrapper {
                    display:flex;
                    align-items:center;
                    height:4rem;
                    border-radius:6px;
                    gap:1rem;
                    margin:2.5rem 0;
                    h3 {
                        font-size:3rem;
                        font-weight:600;
                        color:var(--dark-1);
                    }
                    .cartBtn {
                        border:none;
                        outline:none;
                        width:7rem;
                        height:100%;
                        background:rgb(0 0 0 / 8%);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        cursor:pointer;
                        &:hover {
                            background:rgb(0 0 0 / 13%);
                            svg {
                                color:var(--dark-1);
                            }
                        }
                        svg {
                            width:2rem;
                            height:2rem;
                            color:var(--dark-1);
                        }
                    }

                }

    .addBtn {
      border:none;
      outline:none;
      padding:1.6rem 2rem;
      background:var(--blue-1);
      color:#fff;
      width:200px;
      text-align: center;
      font-size:1.7rem;
      cursor:pointer;
      &:hover {
        background:var(--red);
      }
    }
}
    .location {
        width:100%;
        display:flex;
        align-items:center;
        gap:2rem;
        line-height:2;
        svg {
            font-size:2.4rem;
            color:var(--blue-1);
        }
        h4 {
            font-size:1.6rem;
            color:var(--text-color);
            font-weight:600;
            span {
                font-weight:400;
                color:rgb(34, 34, 34);
            }
        }
    }
  }

 .contentTop {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2.5rem;
    padding-bottom:3rem;
    border-bottom:1.3px solid rgb(34, 34, 34);
    .ratingWrapper {
        display:flex;
        align-items:center;
        gap:1rem;
        font-size:2rem;
        font-weight:400;
        color:var(--grey);
    }
     h2 {
        font-size:4rem;
        font-weight:700;
        color:var(--text-color);
        span {
            font-weight:400;
            color:var(--grey-1);
            font-size:1.9rem;
            display:block;
            padding-top:1rem;
        }
     }
     h3 {
        font-size:3rem;
        font-weight:600;
        color:var(--red);
     }
 }
 p{
        font-size:1.8rem;
        font-weight:400;
        color:rgb(34, 34, 34);
        padding:2rem 0;
        line-height:30.96px;
        font-family:"Barlow", sans-serif;
        button {
            border:none;
            outline:none;
            font-size:1.9rem;
            color:var(--red);
            background:transparent;
            font-weight:600;
            margin-left:.4rem;
        }
     }
`