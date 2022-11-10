import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export function useAuthStatus() {
    const [loggedIn,setLoggedIn] = useState(false)
    const [cheackingStatus,setCHeackingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true)
            }
            setCHeackingStatus(false)
        })
    },[])
  return (
    {loggedIn,cheackingStatus}
  )
}
