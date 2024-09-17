import React from 'react'
import { Button } from 'react-bootstrap'
import { MyButton, TextBox } from '../Customcsscomp'
import CustomButton from './CustomButtonComp'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <Button variant='danger' className='p-3'>button</Button>
    <MyButton>Click Me</MyButton>
    <TextBox type="date"></TextBox>
    <CustomButton>My Button</CustomButton>
    </>
  )
} 

export default Home
