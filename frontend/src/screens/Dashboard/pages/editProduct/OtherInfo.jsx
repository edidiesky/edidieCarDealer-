import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../../components/forms'


export default function EditOtherInfo({ onChange1, formdata1, setFormData1 }) {

  const {
    productDetails
  } = useSelector(store => store.product)

  useEffect(() => {
    if (productDetails) {
      const {
        price,
        price2,
        countInStock,
        colors,
        percentage,
        capacity
      } = productDetails
      setFormData1({
        price,
        price2,
        countInStock,
        colors,     
        percentage,
        capacity
      })
    }
  }, [setFormData1, productDetails])

  const inputData = [
    { id: 1, name: 'price', placeholder: 'Add your product price', type: 'number', text: 'Product price', required: true },
    { id: 2, name: 'countInStock', placeholder: 'Add your product countInStock', type: 'number', text: 'Product countInStock'},
    { id: 3, name: 'percentage', placeholder: 'Add your product percentage', type: 'number', text: 'Product percentage' },
    { id: 4, name: 'capacity', placeholder: 'Add your product capacity', type: 'number', text: 'Product capacity' },
    { id: 5, name: 'colors', placeholder: 'Add your product colors', type: 'text', text: 'Product colors' },
    { id: 6, name: 'price2', placeholder: 'Add your product selling price', type: 'number', text: 'Product Selling Price' },
  ]


  return (
    <EditOtherInfoWrapper>
      <div className='EditProductFormTop'>
        {inputData.slice(0, 1).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
        {inputData.slice(5, 6).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
      </div>
      <div className='EditProductFormBottom'>
        {inputData.slice(1, 2).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
      </div>
      <div className='EditProductFormBottom'>
        {inputData.slice(2, 3).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
      </div>
      <div className='EditProductFormBottom'>
        {inputData.slice(3, 4).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
      </div>
      <div className='EditProductFormBottom'>
        {inputData.slice(4, 5).map(input => {
          return <Input
            id={input.text}
            onChange={onChange1}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            value={formdata1[input.name]}
            input={input}
            key={input.id}
            required={input.required}
            pattern={input.pattern}
            errorMessage={input.errorMessage}
          />
        })}
      </div>
    </EditOtherInfoWrapper>
  )

}



const EditOtherInfoWrapper = Styled.div`
width:100%;
display:flex;
		flex-direction:column;
		width:100%;
		gap:1.6rem;
.EditProductFormBottom, .EditProductFormTop {
			width:100%;
			display:flex;
			flex-direction:column;
			gap:1.6rem;
			padding:2rem 3rem;
     	display:flex;
	background:var(--white);
	box-shadow:0 2px 3px var(--grey-2);
	border-radius:4px;
		flex-direction:column;
		width:100%;
		gap:1.6rem;
		}
`

