import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
  <div className="fixed w-full  bg-black py-5 flex px-8 justify-between items-center">
<NavLink to='/'>
      <img src={logo} alt="" className="w-40" />
</NavLink>
    <ul className="flex space-x-56 text-white"> 
    <NavLink to='/'>
       <li>Accueil</li>
</NavLink>
 
  <li>Profil</li>
  <li>Réglage</li>
  <li>Communauté</li>
</ul>
  </div>
  

 </nav>
    );
};

export default Navbar;