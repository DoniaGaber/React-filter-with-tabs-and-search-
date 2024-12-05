import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.scss'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
