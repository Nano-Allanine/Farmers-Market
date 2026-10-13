import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter as Allan } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
 <Allan>
 <StrictMode>
    <App />
  </StrictMode>
  </Allan>
)
