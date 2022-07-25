
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import NavBar from './components/NavBar';




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
