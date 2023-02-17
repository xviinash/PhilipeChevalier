import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'
import HeaderComponent from './components/HeaderComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderComponent/>
    <App />
  </React.StrictMode>,
)
