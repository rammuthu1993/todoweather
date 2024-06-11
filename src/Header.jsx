import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div><h1>Welcome!</h1>
    <p><Link to='login'>Login</Link></p>
    </div>
  )
}
