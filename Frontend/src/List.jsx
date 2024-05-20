import Navbar from './components/Navbar';
import NavbarSide from './components/NavbarSide';
import { NavLink, useParams  } from 'react-router-dom';

const List = () => {
  const { id } = useParams();
  console.log(id);
  return ( 
<>

<Navbar/>
 <>
    <Navbar/>
      <section className="flex h-screen ">
<NavbarSide/>
<div className="pt-46 flex flex-col justify-center mx-auto text-center">
<ul>
<NavLink to={`/:id `}>
  <li className='cursor-pointer'>Karl</li>

</NavLink>
  <li className='cursor-pointer'>Cécilia</li>
</ul>

        </div>
        
        </section>

    </>
</>
  );
};

export default List;