import React from 'react'
import { Navigate ,Link} from 'react-router-dom'
const token = localStorage.getItem('token')

function NotFound() {
  return (
    <div>
        <h1 style={{color:"green"}}>page Not Found 404</h1>
        <Link to="/">
        <button    >go Back</button>
        </Link>
    </div>
  )
}

export default NotFound