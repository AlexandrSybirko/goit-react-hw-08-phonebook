import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap'



export default function AuthNav() {
  return (
    <div >
      <DropdownButton id="dropdown-basic-button" title="Авторизация">
  <Dropdown.Item ><NavLink
        to="/register"
        exact
        
      >
        Регистрация
      </NavLink></Dropdown.Item>
  <Dropdown.Item ><NavLink
        to="/login"
        exact
        
      >
        Логин
      </NavLink></Dropdown.Item>
 
</DropdownButton>
    </div>
  );
}


