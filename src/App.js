import './App.css';
import BuyProperty from './Component/BuyProperty/BuyProperty.js';
import Home from './Component/Home/Home.js';
import Search from './Component/Search/Search.js';
import RentProperty from './Component/RentProperty/RentProperty.js';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header.js';
// import ReviewCard from './Component/ReviewCard/ReviewCard'
// import PopularSection from './Component/PopularSection/PopularSection.js';
import ValueSection from './Component/Home/ValueSection/ValueSection.js'
import ContactSection from './Component/Home/Contact/ContactSection/ContactSection.js';
import Subscribe from './Component/Home/Subscribe/Subscribe.js';
import Footer from './Component/Footer/Footer.js'
import ScrollEffects from './Component/Home/ScrollEffects /ScrollEffects.js';
import ThemeSwitcher from './Component/ThemeSwitcher/ThemeSwitcher.js';
import Details from './Component/Details/Details'; 
import FavPro from './Component/FavPro/FavPro';

function App() {
  return (
      <>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Search" element = {<Search/>}/>
      <Route path ="/BuyProperty" element = {<BuyProperty/>}/>
      <Route path ="/RentProperty" element = {<RentProperty/>}/>
      <Route path="/property/:id" element={<Details />} /> 
        <Route path="/WatchLater" element={<FavPro />} />
      </Routes>
      <Header />
      {/* <ReviewCard /> */}
      {/* <PopularSection /> */}
      <ValueSection />
      <ContactSection />
      <Subscribe />
      <Footer />
      <ScrollEffects />
      <ThemeSwitcher />
      </>

  );
}

export default App;
