import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import { Navbar } from './components/Navigation/Navbar';

function App() {

  return (

    <div className="bg-[#101010]">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
