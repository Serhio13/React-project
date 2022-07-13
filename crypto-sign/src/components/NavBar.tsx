import React from 'react'
import { GiCoins } from 'react-icons/gi'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <GiCoins className='navbar__icon' />
            <h1>Crypto <span className='green'>Sign</span></h1>
        </div>
    </Link>
  )
}

export default NavBar