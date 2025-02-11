import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from './context/ThemeContext.tsx';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider>
      <App />
     </ThemeProvider>
  </React.StrictMode>,
)
