import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import"@css/style.css"
import Quote from "./Pages/quotes/Quote";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Quote />
  </StrictMode>
)
