import React from 'react'
import FetchPosts from './FetchPosts'
import HOCCompLogic from './HOCCompLogic'
import InputComponent from './InputComponent'

const Posts = HOCCompLogic(InputComponent,{url:"https://jsonplaceholder.typicode.com/posts",columns:["userId","id","title","body"]})

const Users = HOCCompLogic(InputComponent,{url:"https://jsonplaceholder.typicode.com/users",columns:["id","name","username","email","phone"]})


function HOCdemo() {
  return (
    <>
  {/* <FetchPosts></FetchPosts> */}
  <Posts/>
  <hr/>
  <Users/>
  </>
  )
}

export default HOCdemo
