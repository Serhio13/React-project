import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';
import getCoins from './services/coinGecoAPI'




function App() {

  return (
<Coins />
  )

  // return (
  //   <>
  //   {/* <Coins coin={Coins}/> */}
  //   </>
  // );
}

export default App;
