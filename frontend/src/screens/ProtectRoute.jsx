import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
export const ProtectRoute =({children})=> {
  // const navigate = useNavigate()
 const {userInfo} = useSelector(store=> store.user)
 if (!userInfo) {
  return <Navigate to='/car-dealership/auth/login'/>
 }

 return (
  children
  )
}




