
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Pagination} from '../common'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import {
  getCustomerOrder,
 clearUserAlertError} from '../../Features'
import Message from '../loaders/Message'
import LoaderIndex from '../loaders'

export default function Orders() {
  const {isLoading, orders:userorders} = useSelector(store=> store.order)
  const dispatch = useDispatch()  

  useEffect(()=> {
    dispatch(getCustomerOrder())
  }, [])

  return (
    <OrdersContainer>
    {userorders?.length === 0? <Message alertText={'you have no orders'} alertType={'danger'}/>:(
    <Table>
      <div className='TableTop'>
         <div className='TableTopRight'>
           <h2>My Order List </h2>
         </div>
      </div>
       <div className='TableContainer'>
         <table className='tableWrapper'>
         <thead>
          <tr>
          <th>My Order Id</th>
           <th>Date</th>
           <th>Total Price</th>
           <th>Paid At</th>
           <th>Delivered</th>
           <th></th>
         </tr>
        </thead>
        <tbody>
        {userorders?.map(x=> {
          return <Card x={x} key={x._id} type='orders'/>
        })}
        </tbody>
     
       </table>
    </div>
    {!userorders?.length ===0 && <Pagination/>}
    </Table>
    )}
    </OrdersContainer>
    )
}


const OrdersContainer = styled.div`
width:100%;
margin:0 auto;
`

const Table = styled.div`
width:100%;
padding:2rem 1.6rem;
margin-top:1rem;
background:var(--white);
border: 1px solid var(--grey-2);
padding:2rem;
border-radius:5px;
display:flex;
flex-direction:column;
gap:2rem;

.TableTop {
  padding:.4rem 0;
  display:flex;
  align-items:center;
  width:100%;
  @media (max-width:780px) {
    flex-direction:column;
    justify-content:flex-end;
  }
  
  .TableTopRight{
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    width:100%;
   h2 {
  font-size: 4rem;
  font-weight: 600;
  color: var(--text-color);
  padding-bottom: 2rem;

  border-bottom: 1px solid var(--grey-2);
  text-align:start;
  width:100%;
 }

  }

  .TableTopLeft {
    display:flex;
    align-items:center;
    gap:1.5rem;
    form {
    padding:1.4rem 3rem;
    display:flex;
    align-items:center;
    gap:2rem;
    background:var(--grey-3);
    border-radius:7px;

    svg {
      width:2rem;
      height:2rem;
      color:var(--grey);
    }

    input {
      flex:1;
      border:none;
      background:inherit;
      font-size:1.5rem;
      outline:none;
      border:none;
      font-weight:500;
      color:var(--grey);
      font-family:inherit;
      &::placeholder {
        font-size:1.4rem;
        font-weight:400;
        color:var(--grey-2);
      }
    }
  }
  .addBtn {
    border:none;
    padding:1.4rem 2rem;
    font-size:1.3rem;
    border-radius:4px;
    color:#fff;
    background:#1b3d8c;
    font-weight:600;
    outline:none;
    cursor:pointer;
    &:hover {
      background:var(--red);
    }
  }
  }
}

.TableContainer {
display:flex;
flex-direction:column;
gap:2rem;
width:100%;
overflow-x:auto;
&::-webkit-scrollbar {
      width:10px;
      height:10px;
      background:#f8f8f8;
      border-radius:10px;
    }
    &::-webkit-scrollbar-thumb {
      background:var(--grey);
      border-radius:10px;
      transition:all .5s;
      &:hover {
        background:#333;
      }
    }   

.tableWrapper {
    border-collapse:collapse;
    width:100%;
    min-width:1000px;
    
thead {
  tr {
    text-align:start;
    z-index:200;
    background:var(--grey-3);
    text-align:start;
    transition:all .3s var(--transition-2);
    &:hover {
        background:rgb(0 0 0 / 13%);
      }
    th {
      font-size:1.4rem;
      color:var(--grey);
      font-weight:400;
      word-break:break-all;
      text-align:center;
      border-bottom:1px solid var(--grey-2);
      padding:2rem 1.8rem;
      transition:all .3s var(--transition-2);
    }
  }
 }

 tbody {
  tr {
    transition:all .5s var(--transition-2);
    z-index:200;
      
      &:hover {
        background:rgb(0 0 0 / 13%);
        
      }
    td {
      font-size:1.3rem;
      font-weight:600;
      width:auto;
      text-align:center;
      padding:1.5rem;
      color:var(--dark-1);
      border-bottom:1px solid var(--grey-2);
       .true {
            color:e72d2d;
        }
        .cartProduct {
                    width:100%;
                    display:flex;
                    align-items:center;
                    gap:2rem;
                    justify-content:center;
                    .imageWrapper {
                    width:6rem;
                    position:relative;
                    height:8rem;
                    border-radius:5px;
                    img {
                        position:absolute;
                        top:0;
                        width:100%;
                        height:100%;
                        left:0;
                        border-radius:5px;
                        object-fit:cover;
                    }
                    }
                     
                }
        .tablespan{
          display: block;
    padding: 1rem 1.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    width: 100%;
    border-radius: 4px;
    color: #333;
    text-align: center;
          &.true {
             color: #045235;
             background:#04523517;
          }
          &.false {
            color: #e50b0b;
            background: #e50b0b12;
          }
        }

         .imageGradient {
          position:absolute;
          bottom:0;
          left:0;
          height:100%;
          width:100%;
          background:rgba(0,0,0,.03);
          display:flex;
          align-items:center;
          width:100%;
          justify-content:center;
          transition:all .6s var(--ease);
         }
        }
        .true {
          color:var(--success-color);
          font-size:1.2rem;
        }
        .false {
          color:var(--error-color);
          font-size:1.2rem;
        }
      
      .header {
        display:flex;
        flex-direction:column;
        gap:.7rem;
        h3 {
          font-size:1.2rem;
          color:#777;
          font-weight:600;
        }
        p {
          font-size:1.2rem;
          color:#ccc;
          font-weight:400;
          width:80%;
          margin:0 auto;
          text-align:center;
          line-height:1.8;
        }
      }

      .action {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1.8rem;
        svg {
          font-size:1.7rem;
          cursor:pointer;
        }
        .details{
          padding:.8rem 1rem;
          background:var(--grey-3);
          border-radius:5px;
        }
      }

      
    }
  }
 }

}
`

