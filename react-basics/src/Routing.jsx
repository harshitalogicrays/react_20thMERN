import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Firstfuncomp from './functionalcomponents/Firstfuncomp'
import PropsDemoChildren from './functionalcomponents/PropsDemoChildren'
import Counter from './functionalcomponents/Counter'
import Form1 from './functionalcomponents/Form1'
import Pagenotfound from './Pagenotfound'
import Home from './functionalcomponents/Home'
import FormValidations from './functionalcomponents/FormValidations'

const Routing = () => {
  return (
  <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='fundemo' element={<Firstfuncomp/>}/>
            <Route path='funprops' element={<PropsDemoChildren/>}/>
            <Route path='funstate/counter' element={<Counter/>}/>
            <Route path='funform' element={<Form1/>} /> 
            <Route path='funform/validation' element={<FormValidations/>}/> 
        </Route>

        <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  </>
  )
}

export default Routing
