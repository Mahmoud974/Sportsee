import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return ( 
<>

<Navbar/>
 <>

      <section className="flex h-screen ">
<NavbarSide/>
<div className="pt-46 flex flex-col justify-center mx-auto text-center">
<h1 className="text-9xl font-bold text-[#FE2905]">404</h1>
<p>Oups! la page que vous demandez n'existe pas</p>
<NavLink to="/" className="underline">Retourner sur la page d'acceuil</NavLink>
        </div>
        
        </section>

    </>
</>
  );
};

export default ErrorPage;