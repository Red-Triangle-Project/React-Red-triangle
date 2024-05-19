import './App.css';
import BuyProperty from './Component/BuyProperty/BuyProperty';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import RentProperty from './Component/RentProperty/RentProperty';
import Details from './Component/Details/Details';
import { Route, Routes } from 'react-router-dom';
import FavPro from './Component/FavPro/FavPro';
import ValueSection from './Component/Home/ValueSection/ValueSection'
import Header from './Component/Header/Header'
import ContactSection from './Component/Home/Contact/ContactSection/ContactSection'
import Subscribe from  './Component/Home/Subscribe/Subscribe'
import Footer from './Component/Footer/Footer'
import ScrollEffects from './Component/Home/ScrollEffects /ScrollEffects'
import PopularSection from './Component/Home/PopularSection/PopularSection'
 
 
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
      <PopularSection/>
      <ValueSection />
      <ContactSection />
      <Subscribe />
      <Footer />
      <ScrollEffects />
      </>
  );
}
 
export default App;