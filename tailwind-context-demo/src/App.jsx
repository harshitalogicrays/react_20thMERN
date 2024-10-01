// import './App.css'

import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
   <>
     {/* <h1 className="text-3xl font-bold underline border-2 text-orange-900">
      Hello world!
    </h1>
    <h2 className="bg-slate-400 hover:text-red-500 hover:text-2xl transition-all duration-300">Welcome User</h2>

    <input type="text" className="border-2 w-9/12 md:w-36 border-red-500 rounded-md mt-12 focus:bg-slate-400"/> */}
  
    <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
  newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
  theme="colored"/>

      <Outlet/>
   </>
  )
}

export default App

