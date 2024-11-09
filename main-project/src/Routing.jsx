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

const router = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'register',element:<Register/>},
            {path:'login',element:<Login/>},
        ]
    },
    {path:'admin',element:<AdminLayout/>,
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