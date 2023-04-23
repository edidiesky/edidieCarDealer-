import React, {useState} from 'react'
import Styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { 
savePaymentType
} from '../../../Features'
import {useDispatch} from 'react-redux'

export default function PaymentIndex() {
  const dispatch = useDispatch()
  const [type, setType] = useState('')
  // get the cart content
  console.log(type)

  // initialize navigate

  const navigate = useNavigate()
  // handling the submission of the address form
  const handleAdressForm = (e)=> {
    e.preventDefault()
    dispatch(savePaymentType(type))
    if(!type) {
      navigate('/payment')
    } else {
    navigate('/placeorder')
  }
  }

  return (
    <PaymentIndexContainer>
      <h2>Payment Method</h2>
      <div className='paymentWrapper'>
        <h3>Select Payment Method</h3>
        <form className='radioForm'>
              <div className='form-radio'>
               <input 
                type='radio'
                name='type'
                id='Paypal'
               value={"Paypal"}
               required='true'
               checked={type === 'Paypal'}
               onChange={(e)=> setType(e.target.value)}
               />
               <label htmlFor='Paypal' className='form-label'>
                 <div className='formspan'></div>
                 Paypal or Credit Card
               </label>
              </div>
              <div className='form-radio'>
               <input 
                type='radio'
                name='type'
                id='Stripe'
               value={"Stripe"}
               required='true'
               checked={type === 'Stripe'}
               onChange={(e)=> setType(e.target.value)}
               />
               <label htmlFor='Stripe' className='form-label'>
                 <div className='formspan'></div>
                 Stripe Payment System
               </label>
              </div>
              <div className='btnWrapper'>
               <button type='submit' onClick={handleAdressForm}>Continue</button>
               </div>
         </form>
      </div>
    </PaymentIndexContainer>
  )
}

const PaymentIndexContainer = Styled.div`
width:100%;
border:1px solid var(--grey-2);
padding:2rem;
display:flex;
flex-direction:column;
gap:3rem;


 h2 {
  font-size:3rem;
  font-weight:700;
  color:var(--dark-1);
  text-align:center;
  line-height:1.5;
  border-bottom:1px solid var(--grey-2);
  padding:1rem 0;
  text-transform:uppercase;
  width:100%;
  text-align:start;
 }

 .paymentWrapper {
  width:100%;
  display:flex;
  flex-direction:column;
  gap:2rem;

  h3 {
  font-size:2rem;
  font-weight:600;
  color:var(--grey);
  text-align:start;
  width:100%;
 }
   .radioForm {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2rem;
    align-items:flex-start;
    .form-radio {
      position:relative;
      display:flex;
      align-items:center;
      gap:2rem;
      input {
        display:none;

        &:checked  ~ label .formspan::after {
          opacity:1;
          visibility:visible;
        }
      }

      .form-label {
            font-size:1.3rem;
            color:#000;
            font-weight:400;
            display:flex;
           align-items:center;
            position:relative;
            transform:translateX(30px);
            @media (max-width:1080px) {
              font-size:1.5rem;
            }

            .formspan {
              position:absolute;
              width: 2rem;
                height: 2rem;
                border-radius: 50%;
                position: absolute;
                left:-20%;
                top: 50%;
                transform:translateY(-50%);
                border:2px solid #000;

              &::after {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                display: block;
                position: absolute;
                top: 50%;
                left:50%;
                opacity:0;
                visibility:hidden;
                transform:translate(-50%, -50%);
              background:var(--blue-1);
              content:"";
              @media (max-width:780px) {
                width:.7rem;
                height:.7rem;
              }

              }
            }
      }
    }
    .btnWrapper {
      width:100%;
      display:flex;
      align-items:center;
      padding-top:2.5rem;

    button {
      border: none;
      outline: none;
      padding: 1.8rem 3rem;
      font-size: 1.8rem;
      color: var(--white);
      background-color: var(--red);
      cursor: pointer;
      &:hover {
        background-color: var(--blue-1);
      }
    }
  }
  }
 }
`

