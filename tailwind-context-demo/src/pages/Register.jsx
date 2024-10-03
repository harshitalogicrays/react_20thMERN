import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 mb-3">Register Here</h2>
          <hr/>
        </div>
   
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
          <div> <label htmlFor="username" className="block text-sm font-medium leading-3 text-gray-900"> Username</label>
              <div className="mt-2">
                <input name="username" type="text"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
                />
              </div>
            </div>
            <div> <label htmlFor="email" className="block text-sm font-medium leading-3 text-gray-900">  Email address</label>
              <div className="mt-2">
                <input name="email" type="text"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
                />
              </div>
            </div>
            <div> <label htmlFor="password" className="block text-sm font-medium leading-3 text-gray-900"> Password</label>
              <div className="mt-2">
                <input name="password" type="password"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
                />
              </div>
            </div>
            <div> <label htmlFor="cpassword" className="block text-sm font-medium leading-3 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input name="cpassword" type="password"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
         Already an Account?{' '}
            <Link to='/login' className="font-semibold leading-3 text-indigo-600 hover:text-indigo-500">   Sign In </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
