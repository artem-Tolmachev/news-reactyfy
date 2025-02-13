import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from './context/ThemeContext.tsx';
import App from './App.tsx'
import { store } from './store/index.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
     </ThemeProvider>
  </React.StrictMode>,
)
