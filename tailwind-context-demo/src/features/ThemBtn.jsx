import React, { useState } from 'react'
import { ThemeChangeContext } from './ThemeContext'

const ThemBtn = () => {
    let {themeMode,toggleTheme}=ThemeChangeContext()
  return (
    <label className='flex items-center cursor-pointer'>
    <div className='relative'>
        <input type="checkbox" className='sr-only' onChange={toggleTheme} checked={themeMode=="dark"}></input>
        <div className={`block  w-14 h-6 rounded-full ${themeMode=="dark" ? "bg-blue-700": "bg-gray-400"}`} ></div>
        <div className={`absolute left-1 top-1 w-6 h-4 rounded-full 
        ${themeMode=="dark" ? "transform translate-x-full bg-white": " bg-blue-800"}`}></div>
    </div>
    </label>
  )
}

export default ThemBtn
