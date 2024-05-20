import React from 'react';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';

const NavbarSide = () => {
    return (
         <div className="  bg-black px-2 h-auto n flex justify-evenly  flex-col ">
<ul className='flex flex-col justify-center mx-auto items-center space-y-6'>
  <li>
      <img src={icon1} alt="" className="w-12" />
      </li>
      <li>
    
      <img src={icon2} alt="" className="w-12" /> 
      </li>
      <li>

      <img src={icon3} alt="" className="w-12" />
      </li>
      <li> 
      <img src={icon4} alt="" className="w-12" />
  </li>

</ul>
<p className='-rotate-90 w-full flex text-sm text-white'>Copiryght, SportSee 2020</p>
  </div>
    );
};

export default NavbarSide;