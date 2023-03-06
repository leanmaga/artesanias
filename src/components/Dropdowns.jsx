import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

function DropdownButton() {
  return (
    <Dropdown>
      
      
        <Dropdown.Toggle className="container-boton" menuVariant="dark">
          <input id="dropdown-basic" type="button" value="Más productos" className="input-boton"/>
          <div className="wdth"></div>
          <div className="wdth1"></div>
        </Dropdown.Toggle>
      
      
        
      

      <Dropdown.Menu className="container-drop" variant="dark">
        <Dropdown.Item href="#/action-1">
            <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/funkos">
                Funkos
            </NavLink>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
            <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/llaveros">
                Llaveros
            </NavLink>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
            <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/otros">
                Otros
            </NavLink>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4">
            <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/aros">
                Aros
            </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
  );
}

export default DropdownButton;