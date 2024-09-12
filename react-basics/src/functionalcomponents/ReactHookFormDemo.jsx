import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../assets/images/register.png'
import { useForm } from 'react-hook-form'
const ReactHookFormDemo = () => {
    const {register,handleSubmit, formState: { errors },trigger,getValues}=useForm()
    let submitForm=(user)=>{ //user ={username:"dhaval",email:'',password:'',cpassword:''}
        // alert(JSON.stringify(user))
        console.log(getValues())
    }
  return (
   <><Container>
        <Row> <Col xs={4}>  <Image src={Image1} fluid/>  </Col>
            <Col>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" 
                        {...register('username',{required:"username is required",
                            minLength:{value:5,message:"min 5 char"}   })}
                        onBlur={()=>trigger('username')}></Form.Control>
                    {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                    </Form.Group>
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
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"  name="cpassword" {...register('cpassword',{required:"confirm password is required",
                            validate:(cpwd)=>{
                                const {password} = getValues()
                                return password==cpwd || "mismatch password"
                            }
                        })}onBlur={()=>trigger('cpassword')}></Form.Control>
                        {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
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

export default ReactHookFormDemo
