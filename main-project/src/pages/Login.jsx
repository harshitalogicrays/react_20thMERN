import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '/src/assets/images/login.png'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {register,handleSubmit, formState: { errors },trigger}=useForm()
    let submitForm=(user)=>{ }
  return (
    <><Container className='mt-5'>
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
