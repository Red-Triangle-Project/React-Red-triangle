import './App.css';
import BuyProperty from './Component/BuyProperty/BuyProperty';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';
import RentProperty from './Component/RentProperty/RentProperty';
import Details from './Component/Details/Details'; // Import the Details component
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/BuyProperty" element={<BuyProperty />} /> 
        <Route path="/RentProperty" element={<RentProperty />} />
        <Route path="/property/:id" element={<Details />} /> {/* Update to use Details */}
      </Routes>
    </>
  );
}

export default App;

