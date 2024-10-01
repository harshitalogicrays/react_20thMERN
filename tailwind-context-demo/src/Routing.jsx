import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import PageNotFound from "./pages/PageNotFound"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./features/Products"
import AboutPage from "./pages/AboutPage"

const router  = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<Products/>},
            {path:'about',element:<AboutPage/>}
        ]

    },
    {path:"*",element:<PageNotFound/>}
])

export default router