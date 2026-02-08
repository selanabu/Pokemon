import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TrainerProvider } from "./context/TrainerContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrainerProvider>
      <App />
    </TrainerProvider>
  </StrictMode>,
)
