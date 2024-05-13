'use client'

import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
const Header = () => {
  const [toggel,setToggel]=useState(false)
  return (
    <header>
      

      <ul className="flex justify-around text-[#838383] 
      py-2 items-center space-x-2 mx-6 px-6
      border-2 border-b-slate-200">

         <div className="flex md:hidden">
         
         {
          toggel ? ( < X onClick={() => setToggel(prev => !prev)} />) : 
          (   <AlignJustify onClick={() => setToggel(prev => !prev)} />  )
         }
         </div>

     <div
     className={toggel ? "flex-row justify-center items-center space-y-1" : "hidden md:flex justify-around items-center space-x-16"}
     > 
            <li>
          <Link href={'/'}>home </Link>
          </li>
        <li>
            <Link href={'/about'}>Aboute</Link>
        </li>
        
        <li>
            <Link href={'/admin'}>admine</Link>
        </li>

        <li>
          <Link href={'/product'}>product </Link>
          </li>
        <li>
            <Link href={'/about'}>Aboute</Link>
        </li>
        
        <li>
            <Link href={'/admin'}>admine</Link>
        </li>


          </div> 
        
          
            <li>
          <Link href={'/login'}> 
          <button className=' text-black border-2 border-slate-300 rounded 
           px-2 py-1 my-1'>
             Deploy
            </button></Link>
        
           <Link href={'/learn'}> 
           <button className='bg-[#171717] text-white rounded 
            px-5 py-1 mx-2 my-4'>
              learn
              </button></Link>
              
        </li>

      </ul>
    </header>
  )
}

export default Header
