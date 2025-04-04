import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Game.css'
import App from './Cartitas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
