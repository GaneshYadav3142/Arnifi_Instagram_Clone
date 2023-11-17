import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerIcon} from '@chakra-ui/icons'
import "../Styles/Navbar.css"
export const Navbar = () => {

  const name=localStorage.getItem("name")
    const [isResponsive, setResponsive] = useState(false);

    const toggleResponsive = () => {
      setResponsive(!isResponsive);
    };

    useEffect(()=>{

    },[name])

  return (
   <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
    <Link to="/" className="active"> Home</Link>
    <Link to="/signup" >SignUp/Login</Link>
    <Link to="/postpage" >Postpage</Link>
    <Link to="/logout" >Logout</Link>
    
    <a  className="icon"  onClick={toggleResponsive}>
    <HamburgerIcon/>
      </a>
   </div>
  )
}
