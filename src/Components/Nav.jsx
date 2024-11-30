import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav_box">
               <a href="#/" className="nav_logo">Logo</a>
               <ul className="nav_list">
                <li><NavLink to={'/'} className="nav_link">Home</NavLink></li>
                <li><NavLink to={'/about'} className="nav_link">About</NavLink></li>
                <li><NavLink to={'/shop'} className="nav_link">Shop</NavLink></li>
                <li><NavLink to={'/signup'} className="nav_link">SignUp</NavLink></li>
               </ul>


            </div>
        </div>
    </nav>
  )
}

export default Nav