import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { CartProvider } from './context/cart';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
