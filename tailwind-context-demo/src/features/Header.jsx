import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image1 from '/src/assets/images/a.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import {BsLock} from 'react-icons/bs'
import { toast } from 'react-toastify'
import { ShowOnLogin, ShowOnLogout } from './misc'
import { ContextCart } from './CartContext'
import ThemBtn from './ThemBtn'
const Header = () => {
  const data= ContextCart()
  const navigate = useNavigate()
    const navigation = [
        {id:1, name: 'Home', href: '/'},
        {id:2, name: 'About', href: '/about'},
        {id:3, name: 'Products', href: '/products'}
      ]

      const handleLogout=()=>{
        sessionStorage.removeItem("20thjunmini")
        toast.success("loggedOut Successfully")
        navigate('/')
      }

      let [username,setUsername]=useState('')
      useEffect(()=>{
        if(sessionStorage.getItem("20thjunmini") != null){
          let obj =JSON.parse(sessionStorage.getItem("20thjunmini"))
          setUsername(obj.name)
        }
      },[sessionStorage.getItem("20thjunmini")])
  return (
  <>
  <Disclosure as="nav" className="bg-gray-800">
      <div className="px-4 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white">
              <img src={Image1} className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink key={item.id} to={item.href}
                  className={({ isActive }) =>
                    isActive ? "bg-white text-black  rounded-md px-3 py-2 text-sm font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <ThemBtn/>
            <NavLink to='/cart'
              type="button"
              className="relative rounded-full ms-8 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <FaShoppingCart aria-hidden="true" className="h-8 w-8" />
              <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full ">{data?.cartItems.length ?? 0}</span>
           
            </NavLink>
            <div className="hidden sm:ml-6 sm:block">
            <ShowOnLogout>
            <NavLink to="/login" className={({ isActive }) =>
             isActive ? "bg-white text-black  rounded-md px-3 py-2 text-sm font-bold mr-2" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-2"}><BsLock  className="inline-flex h-5 w-5" /> Login</NavLink>

       <NavLink to="/register" className={({ isActive }) =>
             isActive ? "bg-white text-black  rounded-md px-3 py-2 text-sm font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>Register</NavLink>
             </ShowOnLogout>
</div>
          <ShowOnLogin>
          <a to="/login" className= "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-2">Welcome {username}</a>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" onClick={handleLogout}>
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            </ShowOnLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
             to={item.href}
              className={({ isActive }) =>
                isActive ? "bg-white text-black block rounded-md px-3 py-2 text-base font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"} >
              {item.name}
            </NavLink>
          ))}
        <div>
            <NavLink to="/login"   className={({ isActive }) =>
                isActive ? "bg-white text-black block rounded-md px-3 py-2 text-base font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"}><BsLock  className="inline-flex h-5 w-5" /> Login</NavLink>

       <NavLink to="/register" className={({ isActive }) =>
                isActive ? "bg-white text-black block rounded-md px-3 py-2 text-base font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"}>Register</NavLink>
</div>
        </div>
      </DisclosurePanel>
 </Disclosure>
  </>
  )
}

export default Header
