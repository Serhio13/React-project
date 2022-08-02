import React from 'react';
import './NavBar.sass';
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
      <header>
        <div className="container">
          <div className="navbar">

            <Button ghost size="small">
              <Link to="/">
                Back
              </Link>
            </Button>

            <Link to="/">
              <div className="navbar__logo">
                <LineChartOutlined />
                <h1>
                  <span className="navbar__logo-span">Crypto</span>
                  <span className="navbar__logo-green">Sign</span>
                </h1>
              </div>
            </Link>

            <div className="navbar__switcher">
              <Button ghost size="small" onClick={handleLightTheme}>
                Light
              </Button>
              <Button ghost size="small" onClick={handleDarkTheme}>
                Dark
              </Button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;