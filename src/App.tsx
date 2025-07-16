import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import HeadphonePage from './pages/headphonePage';
import { Navbar } from './components/Navigation/Navbar';
import { AboutUs } from './components/Landing-page/AboutUs';
import { Footer } from './components/Navigation/Footer';

function App() {

  return (

    <div className="bg-[#101010]">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/headphones' element={<HeadphonePage />} />
      </Routes>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
