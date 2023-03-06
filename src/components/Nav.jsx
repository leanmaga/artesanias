import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

const Navbar = () => {
  return (
    

        <ul className="navbar">
            <li className="navbar__item">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/home">Home</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/sobremi">Sobre Mi</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item ">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/contacto">Contacto</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item ">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/aros">Productos</NavLink>
            </li>
                    
        </ul>
                
    
  )
}

export default Navbar
