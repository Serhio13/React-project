import React from 'react'
import { GiCoins } from 'react-icons/gi'
import './NavBar.css'
import {Link} from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import { Button } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'

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
            <LineChartOutlined  />
            <h1><span className='logo'>Crypto</span><span className='green'>Sign</span></h1>
            
        </div>
    </Link>
    <div className='switcher'>
      <Button ghost size='small' onClick={handleLightTheme}>Light</Button>
      <Button ghost size='small' onClick={handleDarkTheme}>Dark</Button>
    </div>
  </>
  )
}

export default NavBar