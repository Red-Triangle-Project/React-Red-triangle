import './App.css';
import BuyProperty from './Component/BuyProperty/BuyProperty';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';
import RentProperty from './Component/RentProperty/RentProperty';
import Details from './Component/Details/Details'; 
import { Route, Routes } from 'react-router-dom';
import FavPro from './Component/FavPro/FavPro';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/BuyProperty" element={<BuyProperty />} /> 
        <Route path="/RentProperty" element={<RentProperty />} />
        <Route path="/property/:id" element={<Details />} /> 
        <Route path="/WatchLater" element={<FavPro />} />
      </Routes>
    </>
  );
}

export default App;

