import './App.css';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import Details from './Component/Details/Details';
import { Route, Routes } from 'react-router-dom';
import FavPro from './Component/FavPro/FavPro';
import Header from './Component/Header/Header'
import ContactSection from './Component/Home/ContactSection/ContactSection'
import Footer from './Component/Footer/Footer'
import ScrollEffects from './Component/Home/ScrollEffects /ScrollEffects'
import AboutUs from './Component/Home/AboutUs/AboutUs';
import BuyProperty from './Component/BuyProperty/BuyProperty';
import RentProperty from './Component/RentProperty/RentProperty';
import ScrollUpButton from './Component/ScrollUpButton/ScrollUpButton'
 //
function App() {
  return (
 <>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Search" element = {<Search/>}/>
      <Route path="/property/:id" element={<Details />} />
        <Route path="/WatchLater" element={<FavPro />} />
        <Route path="/BuyProp" element={<BuyProperty/>} />
      <Route path="/RentProp" element={<RentProperty />} />
      </Routes>
      <Header />
      <ContactSection />
      <AboutUs/>
      <Footer />
      <ScrollUpButton/>
      <ScrollEffects />
      </>
  );
}
 
export default App;