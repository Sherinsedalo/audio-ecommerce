import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import { Navbar } from './components/Navigation/Navbar';
import { AboutUs } from './components/Landing-page/AboutUs';

function App() {

  return (

    <div className="bg-[#101010]">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <AboutUs />
    </div>
  )
}

export default App
