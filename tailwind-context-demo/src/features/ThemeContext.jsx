import React, { Children, createContext, useContext, useState } from 'react'
const theme = createContext()
const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode]=useState("light")
    const toggleTheme=()=>{
        themeMode=="light"?setThemeMode("dark"):setThemeMode("light")
    }
  return (
    <theme.Provider value={{themeMode,toggleTheme}}>
        <div className={`${themeMode=="dark"? "bg-gray-800 text-white min-h-screen":"bg-slate-100 text-black  min-h-screen"}`}>
            {children}
        </div>
     
    </theme.Provider>
  )
}

export default ThemeContext
export const ThemeChangeContext = ()=>useContext(theme)