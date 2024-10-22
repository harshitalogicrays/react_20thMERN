import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routing'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/> ,
)
