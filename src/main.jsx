import React from 'react'
import ReactDOM from 'react-dom/client'
import "../dist/output.css";
import App from './App.jsx'
import CursorShadow from './components/CursorShadow.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <CursorShadow />
      <App />
    </LanguageProvider>,
  </React.StrictMode>
)
