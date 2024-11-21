import React, { useState } from 'react'
import products from '../data'
import { Link } from 'react-router-dom'
import { PiShoppingCart } from "react-icons/pi";
const NewArrival = () => {

    const [productList,setPrroductList] = useState(products);
    return (
        <div>
            <div>
            <ul className='flex gap-8 items-center justify-center my-4'>        
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>All</li>
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>Jalabia</li>
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>Tops</li>
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>Trousers</li>
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>Jean</li>
                <li className='bg-black/10 py-2 px-6 rounded-[5px] transform transition-all duration-300 hover:bg-black hover:text-white'>Baggy</li>
                </ul>
            </div>

            <div className='grid grid-cols-4 justify-items-center gap-8 px-10 mt-16 '>
            {productList.map((product, index)=> (<div key={index} className='bg-white shadow-lg p-4 border flex  gap-4 flex-col w-64 h-80 rounded-md'>
                <img src={product.image} className='w-full h-40 object-contain'/>
                <h4 className='px-6'>{product.name}</h4>
                <p className='px-6'>{product.category}</p>
                <div className='flex justify-between '>
                <p className='text-[1.2rem] font-bold'>${product.price}</p>
                    <PiShoppingCart className="text-white ml-8 bg-black p-1 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer border-2 border-transparent transform transition-all duration-300 hover:bg-white hover:text-black hover:border-black" />
                </div>
            </div>))}
            
            </div>

         
        </div>
    )
}

export default NewArrival
