import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import HeadphonePage from './pages/headphonePage';
import SpeakersPage from './pages/speakersPage';
import EarphonesPage from './pages/earphonesPage';
import MarkTwoHeadphonesDetails from './pages/productDetails/MarkTwoHeadphonesDetails';
import MarkOneHeadphonesDetails from './pages/productDetails/MarkOneHeadphonesDetails.tsx';
import XxHeadphonesDetails from './pages/productDetails/XxHeadphonesDetails.tsx';
import { Navbar } from './components/Navigation/Navbar';
import { AboutUs } from './components/Landing-page/AboutUs';
import { Footer } from './components/Navigation/Footer';
import { CartProvider } from './context/cart';



function App() {

  return (
<CartProvider>
    <div className="bg-[#101010]">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/headphones' element={<HeadphonePage />} />
        <Route path='/speakers' element={<SpeakersPage />} />
        <Route path='/earphones' element={<EarphonesPage />} />
        <Route path='/headphones/MarkTwoHeadphones' element={<MarkTwoHeadphonesDetails />} />
        <Route path='/headphones/MarkOneHeadphones' element={<MarkOneHeadphonesDetails />} />
        <Route path='/headphones/xx59Headphones' element={<XxHeadphonesDetails />} />
        {/* Add more routes as needed */}
      </Routes>
      <AboutUs />
      <Footer />
    </div>
    </CartProvider>
  )
}

export default App
