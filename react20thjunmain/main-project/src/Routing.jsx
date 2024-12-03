import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/dashboard";
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";
import AddItem from "./features/Admin/AddItem";
import ViewItems from "./features/Admin/ViewItems";
import Orders from "./features/Admin/Orders";
import OrderDetails from "./features/Admin/OrderDetails";
import Contact from "./features/Contact";
import Products from "./features/Products";
import ProductDetails from "./features/ProductDetails";
import Cart from "./features/Cart";
import Checkout from "./features/Checkout";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";
import Thankyou from "./features/Thankyou";

const router = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'register',element:<Register/>},
            {path:'login',element:<Login/>},
            {path:'contact',element:<Contact/>},
            {path:'category/:name',element:<Products/>},
            {path:"/product/:id",element:<ProductDetails/>},
            {path:"/cart",element:<Cart/>},
            {path:'/checkout',element:<Protected><Checkout/></Protected>},
            {path:'/thankyou',element:<Protected><Thankyou/></Protected>},
        ]
    },
    {path:'admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'category/add',element:<AddCategory/>},
            {path:'category/view',element:<ViewCategory/>},
            {path:'category/edit/:cid',element:<AddCategory/>},
            {path:'item/add',element:<AddItem/>},
            {path:'item/view',element:<ViewItems/>},
            {path:'item/edit/:id',element:<AddItem/>},
            {path:'orders',element:<Orders/>},
            {path:'order/details/:id',element:<OrderDetails/>},
        ]
    },
   
    {path:'*',element:<PageNotFound/>}
])

export default router