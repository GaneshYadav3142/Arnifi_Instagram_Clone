
import React from 'react'

import {Navigate, useLocation} from 'react-router-dom'

export const Privateroute = ({children}) => {
    const isAuth=localStorage.getItem("isAuth") || false
    const location=useLocation()
    return isAuth?children: <Navigate state={location.pathname} replace={true} to="/login"/>
} 