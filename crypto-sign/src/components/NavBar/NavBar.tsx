import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import { Button } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const handleLightTheme = () => {
    setTheme('light');
  };

  const handleDarkTheme = () => {
    setTheme('dark');
  };

  return (
    <>
    <div className="navbar_wrapper">
      <div className="navbar">
  
        <Button ghost size="small">
          <Link to="/">
            Back
          </Link>
        </Button>
  
        <Link to="/">
          <div className="logo">
          <LineChartOutlined />
          <h1>
            <span className="span-logo">Crypto</span>
            <span className="green">Sign</span>
          </h1>
          </div>
        </Link>
  
        <div className="switcher">
          <Button ghost size="small" onClick={handleLightTheme}>
            Light
          </Button>
          <Button ghost size="small" onClick={handleDarkTheme}>
            Dark
          </Button>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default NavBar;
