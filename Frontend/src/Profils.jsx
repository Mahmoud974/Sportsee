import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import { NavLink } from 'react-router-dom';

const Profils = () => {
  return ( 
<>

<Navbar/>
 <>
    <Navbar/>
      <section className="flex h-screen ">
<NavbarSide/>
<div className="pt-46 flex flex-col justify-center mx-auto text-center">
<ul>
    <li>okoo</li>
</ul>
        </div>
        
        </section>

    </>
</>
  );
};

export default Profils;