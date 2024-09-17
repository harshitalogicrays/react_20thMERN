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
import ParentCounter from './functionalcomponents/ParentCounter'
import ReactHookFormDemo from './functionalcomponents/ReactHookFormDemo'
import CustomCompDemo from './functionalcomponents/CustomCompDemo'
import Products from './functionalcomponents/Products'

const Routing = () => {
  return (
  <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='fundemo' element={<Firstfuncomp/>}/>
            <Route path='funprops' element={<PropsDemoChildren/>}/>
            <Route path='funstate/counter' element={<Counter num=''/>}/>
            <Route path='funform' element={<Form1/>} /> 
            <Route path='funform/validation' element={<FormValidations/>}/> 
            <Route path='lifting' element={<ParentCounter/>} /> 
            <Route path='rhf' element={<ReactHookFormDemo/>} />
            <Route path='custom' element={<CustomCompDemo/>}/>
            <Route path='products' element={<Products/>}/>
        </Route>

        <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  </>
  )
}

export default Routing
