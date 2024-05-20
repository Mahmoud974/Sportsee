import React from 'react';
import icon5 from '../assets/calories-icon.png';
import icon6 from '../assets/protein-icon.png';
import icon7 from '../assets/carbs-icon.png';
import icon8 from '../assets/fat-icon.png';

const Badges = ({data}) => {
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data.keyData || {};
    const items = [
  { id: 1, icon: icon5, calories: `${calorieCount || 0}kCal`, label: 'Calories' },
  { id: 2, icon: icon6, calories: `${proteinCount || 0}g`, label: 'Proteines' },
  { id: 3, icon: icon7, calories: `${carbohydrateCount || 0}g`, label: 'Glucides' },
  { id: 4, icon: icon8, calories: `${lipidCount || 0}g`, label: 'Lipides' },
];
    return (
       <ul className='space-y-14 mt-12'>
      {items.map((item) => (
        <li key={item.id} className="bg-gray-50 rounded-xl mx-16">
          <div className='flex py-6 px-8 w-[270px]'>
            <img src={item.icon} alt="" className=''/>
            <div className="ml-4">
              <p className="text-xl text-gray-650 font-black">{item.calories}</p>
              <p className="text-1xl text-gray-700 mt-2">{item.label}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    );
};

export default Badges;