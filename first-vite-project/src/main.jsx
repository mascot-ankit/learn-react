import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chotu from './chotu.jsx'

const MyElement = (
    <a href="https://google.com" target="_blank">Google Me</a>
)

createRoot(document.getElementById('root')).render(


  <>
  <App />
  </>


)
