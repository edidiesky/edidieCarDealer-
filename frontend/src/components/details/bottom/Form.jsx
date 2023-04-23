import React, {useState} from 'react'
import Styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {getRating, createReviewProduct} from '../../../Features'

export default function Form() {
    const dispatch = useDispatch()

    const { productDetails, rating} = useSelector(store=> store.product)
  const {userInfo} = useSelector(store=> store.user)


    const firstname = userInfo?.firstname
    const lastname = userInfo?.lastname

    const [formdata, setFormData] = useState({
    comment:'',
    email:userInfo?.email,
    name:firstname,
  })
  const {comment} = formdata
  const onChange = e=> {
    setFormData({...formdata, [e.target.name]:e.target.value})
  }
  

  const Reviewdata = {firstname,lastname, userrating:rating, comment}
  const id = productDetails?._id

  // handling review submission
  const handleReview =e=> {
    e.preventDefault()
    dispatch(createReviewProduct({Reviewdata, id}))
  }

  return (
    <FormContainer onSubmit={handleReview}>
        <label htmlFor="textarea">
            Your Review*
            {""}
            <textarea
            id='textarea'
            name='comment'
            value={formdata.comment}
            onChange={onChange}
            required='true'
            />
        </label>
        <label htmlFor="name">
            Your Name*
            {""}
            <input
            id='name'
            name='name'
            value={formdata.name}
            onChange={onChange}
            />
        </label>
        <label htmlFor="email">
            Your Email*
            {""}
            <input
            id='email'
            name='email'
            required='true'
            value={formdata.email}
            onChange={onChange}
            />
        </label>
        <button type='submit' className="submitReviewBtn">
            Submit
        </button>
    </FormContainer>
  )
}


const FormContainer = Styled.form`
display:flex;
flex-direction:column;
gap:3rem;
width:100%;

 .submitReviewBtn{
     border:none;
      outline:none;
      padding:1.8rem 2rem;
      background:var(--red);
      color:#fff;
      width:250px;
      margin-top:2rem;
      font-size:1.8rem;
      color:#fff;
      cursor:pointer;
      &:hover {
        background:var(--blue-1);
      }
 }

 label {
    display:flex;
    flex-direction:column;
    gap:.6rem;
    width:100%;
    font-size:1.7rem;
    color:var(--blue-2);
    font-weight:600;
    input {
        height:6rem;
        width:100%;
        border:1px solid #ccc;
        outline:none;
        border-radius:8px;
        padding:2rem 2rem;
        font-family:inherit;
        &:focus {
            border:1px solid #333;
        }
    }
    textarea {
        outline:none;
        height:15rem;
        font-size:1.4rem;
        border:1px solid #ccc;
        border-radius:8px;
        padding:2rem 2rem;
        font-family:inherit;
        &:focus {
            border:1px solid #333;
        }
    }
 }
`