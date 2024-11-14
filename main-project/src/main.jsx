import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routing'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider> 
    </ChakraProvider>,
)
