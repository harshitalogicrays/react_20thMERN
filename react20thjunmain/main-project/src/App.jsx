import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./features/Header";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import './App.css'
function App() {
  const [siderBarOpen,setSideBarOpen] =useState(false)
  // console.log(import.meta.env.VITE_BASE_URL)
  return (
  <>
 <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
  newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
  theme="colored"/>
  <Header setSideBarOpen={setSideBarOpen}/>
  <Box ml={siderBarOpen ? '320px':'0'} transition="margin-left 0.3s ease"> 
    <Outlet/>
  </Box>

  </>
  )
}

export default App
