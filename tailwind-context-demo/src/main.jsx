import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routing.jsx'
import { RouterProvider } from 'react-router-dom'
import ThemeContext from './features/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext>
      <RouterProvider router={router}/>
 </ThemeContext>
  ,
)
