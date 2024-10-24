import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '/src/assets/images/login.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loader from '../features/Loader'
import { useDispatch } from 'react-redux'
import { LOGIN_USER } from '../redux/authSlice'

const Login = () => {
    const [isLoading,setIsLoading] =useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit, formState: { errors },trigger}=useForm()
    let submitForm=async(user)=>{
        setIsLoading(true)
        try{
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users?email=${user.email}`)
            if(res.data.length==0) toast.error("Invalid credentails")
            else if(res.data[0].password != user.password)toast.error("Invalid credentails")
            else {
                let obj = {userEmail:res.data[0].email,userName:res.data[0].username,userRole:res.data[0].role,userId:res.data[0].id} 
                dispatch(LOGIN_USER(obj))
                toast.success("loggedIn successfully")
                if(res.data[0].role=='1'){  navigate('/')}
                else if(res.data[0].role=='0'){  navigate('/admin')}
                 }
        setIsLoading(false)
        }
        catch(err){
            toast.error(err.message);setIsLoading(false)
        }
     }
  return (
    <>
        {isLoading && <Loader/>}
    <Container className='mt-5'>
        <Row> <Col xs={4}>  <Image src={Image1} fluid/>  </Col>
            <Col>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" 
                        {...register('email',{required:{value:true,message:"Email is required"},
                            pattern:{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{2,3}$/,message:"Invalid Email"}
                        })}onBlur={()=>trigger('email')}></Form.Control>
                        {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" {...register('password',{required:"password is required"})}
                        onBlur={()=>trigger('password')}></Form.Control>
                         {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button type="submit">Submit</Button>
                    </div>
                    
                  
                </Form>
            </Col>
        </Row>
    </Container>
   </>
  )
}

export default Login
