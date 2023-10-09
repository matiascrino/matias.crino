import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CursorShadow from './components/CursorShadow.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorShadow />
    <App />
  </React.StrictMode>,
)
