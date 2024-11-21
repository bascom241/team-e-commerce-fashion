
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import {Link,NavLink} from 'react-router-dom'

import React, { useState, useEffect } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { BsPersonFillCheck, BsSearchHeart, BsList, BsX } from "react-icons/bs";



const Navbar = () => {
  return (
    <>

   
    <div className="flex justify-between  px:2 sm:py-4 sm:px-16 items-center ">
      <h1 className="sm:text-4xl text-2xl sm:py-1 py-3 px-6">
        Fashionista
      </h1>

  
     <div>

      <ul className="sm:flex gap-2 items-center hidden">
      <input className="focus:outline-none border py-1 p-8 rounded-lg w-full " />
      <BsSearchHeart className="absolute ml-3 "/>
        <Link><PiShoppingCart className="text-white ml-8 bg-black p-1 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer border-2 border-transparent transform transition-all duration-300 hover:bg-white hover:text-black hover:border-black" /></Link>
        <Link><FaRegHeart className="text-white bg-black p-1 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer border-2 transform transition-all duration-300 hover:text-black hover:bg-white border-transparent hover:border-black" /></Link>
        <Link><BsPersonFillCheck className="text-white bg-black p-1 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer hover:text-black hover:bg-white hover:border-black transform transition-hover duration-300 border-2 border-transparent"/></Link>
      </ul>
      <BsList className="sm:hidden flex text-3xl mt-3 mr-4"/>
     </div>

    </div>
    <hr className="mx-12 my-4"/>
    <div>
    <ul className="flex justify-center items-center gap-14 py-2">
      <NavLink className="hover:text-black/40">Home</NavLink>
      <Link className="hover:text-black/40">Jalabia</Link>
      <Link className="hover:text-black/40">Tops</Link>
      <Link className="hover:text-black/40">Trousers</Link>
      <Link className="hover:text-black/40">Jean</Link>
      <Link className="hover:text-black/40">Baggy</Link>
    </ul>
    </div>

    <hr className="mx-12 my-4"/>
   
    </>
  )
}

export default Navbar
