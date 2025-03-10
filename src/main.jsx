import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import StoreContextProvider from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </StrictMode>
);
