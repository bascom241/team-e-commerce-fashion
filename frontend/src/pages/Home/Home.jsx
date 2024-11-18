import React from 'react'
import Data from '../../components/data'
import { useState } from 'react'
const Home = () => {

  const [products, setProducts] = useState(Data);
  return (
    <div>
      <div>

      </div>

      <div>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-gray-600 mb-3'>Classifications</h1>
          <p className='text-gray-600'>Finding Best Products now in your finger tips</p>
        </div>
        {products.map(p => (
          <div>
            <img src={p.img}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Home
