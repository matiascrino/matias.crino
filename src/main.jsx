import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import "./css/output.css";
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
)
