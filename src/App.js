import './App.css';
import BuyProperty from './Component/BuyProperty/BuyProperty.js';
import Home from './Component/Home/Home.js';
import Navbar from './Component/Navbar/Navbar.js';
import Search from './Component/Search/Search.js';
import RentProperty from './Component/RentProperty/RentProperty.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Search" element = {<Search/>}/>
      <Route path ="/BuyProperty" element = {<BuyProperty/>}/>
      <Route path ="/RentProperty" element = {<RentProperty/>}/>
      </Routes>
      </>
  );
}

export default App;
