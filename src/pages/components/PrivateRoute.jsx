import React  from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import Spinner from './Spinner'

export default function PrivateRoute() {
    const {loggedIn ,cheackingStatus} = useAuthStatus()
    if(cheackingStatus){
        return <h3><Spinner/></h3>
    }
  return (
    loggedIn ? <Outlet/> : <Navigate to='/sing-in'/>
  )
}
