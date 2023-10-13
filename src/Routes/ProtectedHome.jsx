import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedHome({children}) {
    const token = localStorage.getItem('token')
    if(token){
        return children
    }
  return <Navigate to='/' />
}

export default ProtectedHome