import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Users = () => {
    return (
       <>

<Navbar/>
 <>

      <section className="flex h-screen ">
<NavbarSide/>
<div className="pt-46 ml-12 flex flex-col">
<h1 className="text-xl  mt-2 font-bold text-black">Select User</h1>

<NavLink to="/12" className="underline">Karl</NavLink>
<NavLink to="/18" className="underline">Cécilia</NavLink>
        </div>
        
        </section>

    </>
</>
    );
};

export default Users;