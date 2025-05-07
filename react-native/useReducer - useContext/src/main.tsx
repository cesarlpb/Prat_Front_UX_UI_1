import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TrollProvider } from './context/TrollContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrollProvider>
      <App />
    </TrollProvider>
  </StrictMode>,
)
