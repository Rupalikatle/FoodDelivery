import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Food_Img from './Images/Food_Img.png'

const Navbar = () => {
  return (
     <nav className='container'>
      <a className='logo'>
                    <img className='logo-1' src={Food_Img} alt="" />
                </a>
      <div className='nav-container'>
        <ul>
            
          
         {/* <a>FOOD DELIVERY</a> */}
         <NavLink to="/" className='link'>Home</NavLink>
          <NavLink to="/menu" className='link'>Menu</NavLink>
           {/* <NavLink to="/payment" className='link'>Payment</NavLink>  */}
            <NavLink to="/contact" className='link'>Contact</NavLink>
        </ul>
        </div>
        </nav>
   
  )
}

export default Navbar



