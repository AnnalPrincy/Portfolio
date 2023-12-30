import React from 'react'
import './Navbar.scss'
import menu from '../../demo/src/assets/menu.png'
import { useState } from 'react'
const Navbar = () => {

 const [toggle, setToggle] =useState(true)

 const togglechange = ()=>{

    setToggle(!toggle)
  
 }
  
 return (
    <>
    <div className="section w-width">
    <div className="header">
        <div className="logo">
            <h1>Portfolio</h1>
        </div>
        <div className= {toggle?"nav_list":"nav_list active"}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Achievements</li>
                <li>Contact</li>
            </ul>
        </div>
        <div onClick={togglechange} className="ham ">

          <img src={menu} alt="" />
        </div>
        
    </div>
    </div>

    </>
  )
}

export default Navbar
