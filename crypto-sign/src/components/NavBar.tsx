import React from 'react'
import { GiCoins } from 'react-icons/gi'
import './NavBar.css'
import {Link} from 'react-router-dom'
import useTheme from '../hooks/useTheme'

const NavBar = () => {
  const { theme, setTheme } = useTheme()

  const handleLightTheme = () => {
    setTheme('light')
  }

  const handleDarkTheme = () => {
    setTheme('dark')
  }

  return (
    <>
    <Link to='/'>
        <div className='navbar'>
            <GiCoins className='navbar__icon' />
            <h1><span className='logo'>Crypto</span><span className='green'>Sign</span></h1>
            
        </div>
    </Link>
    <div className='switcher'>
      <div className='switch__theme' onClick={handleLightTheme}>Light</div>
      <div className='switch__theme' onClick={handleDarkTheme}>Dark</div>
    </div>
  </>
  )
}

export default NavBar