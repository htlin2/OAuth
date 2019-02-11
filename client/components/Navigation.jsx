import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Login </NavLink>
      <NavLink to="/">Signup </NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </div>
  );
};

export default Navigation;
