import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins/Coins';
import Coin from './components/Coin/Coin';
import NavBar from './components/NavBar/NavBar';
import FavList from './components/FavList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
          <Route path=":favorite" element={<FavList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
