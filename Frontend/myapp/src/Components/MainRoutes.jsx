import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Homepage } from '../Pages/Homepage'
import { Privateroute } from './Privateroute'
import { Logout } from '../Pages/Logout'
import { Postpage } from '../Pages/Postpage'

export const MainRoutes = () => {
  return (
    <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Routes>
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/postpage"  element={<Privateroute><Postpage/></Privateroute>}/>
        <Route path="/logout" element={<Privateroute><Logout/></Privateroute>}/>
    </Routes>
</div>
  )
}
