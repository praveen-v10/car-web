import React from 'react'
import { navigationData } from '../data'
import { FaInstagram } from "react-icons/fa6";


export default function NavMobile() {

    
  const handleCallClick = () => {
    window.location.href = `tel:${'+91 8072875342'}`;
  };

  return (
   <ul className='flex flex-col px-6 pt-4 pb-4 gap-y-4'>
    {navigationData.map((item,Index) => {
        return (
            <li key={Index}>
                <a className=' text-gray-700 font-medium' href={item.href}>
                    {item.name}
                </a>
            </li>
            
        )
    })}
    <li className='flex gap-x-4 justify-center items-center'>
    <FaInstagram color="black" />
    <FaInstagram color="black" />
    <FaInstagram color="black" />
  
            <button onClick={handleCallClick}>
              <FaInstagram color="black" />
            </button>
    </li>
   </ul>
  )
}
