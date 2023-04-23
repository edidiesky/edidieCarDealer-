import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
export const ProtectAdmin =({children})=> {
  // const navigate = useNavigate()
 const {userInfo} = useSelector(store=> store.user)
 if (!userInfo.isAdmin) {
  return <Navigate to='/auth/signin'/>
 }

 return (
  children
  )
}





