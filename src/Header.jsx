import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
      <Link to='/'>Home Page</Link>
      <Link to='/about'>About Page</Link>
    </div>
  )
}

export default Header
