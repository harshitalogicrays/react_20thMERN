import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./features/Header";

function App() {

  // console.log(import.meta.env.VITE_BASE_URL)
  return (
  <>
 <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
  newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
  theme="colored"/>
  <Header/>
  <Outlet/>
  </>
  )
}

export default App
