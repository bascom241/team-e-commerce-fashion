


import { useState } from 'react'
import products from "../../components/data";
import Signup from '../../components/Account/SignUp';

const Home = () => {

  const [list, setList] = useState(products);
  console.log(setList);
  
  return (
    <div>
      <div></div>
    
      <div>
            <div className="text-center py-[40px]">

            <h1 className="text-[48px] font-semibold">Classifications</h1>
            <p className="text-gray-400">Finding Best Products Now in Your Fingertips</p>
            </div>
            <div>
                <div className="flex justify-center px-20 md:px-[96px] gap-5 flex-wrap">
                   {list.map(item =>{
                 return   <>
                    <div className="flex border items-center px-10 h-[122px] w-[100%] md:w-[237px] rounded-xl gap-5">

                    <p>{item.category}</p>
                    <img src={item.image} alt="item" className="h-20"/>
                    </div>
                    </>
                   })}
                </div>

            </div>
            <div className="text-center py-[40px] px-[40px] md:px-[120px]">
                <h1 className="text-[48px] font-semibold">New Arrivals</h1>
                <p className="text-gray-400 ">Discover the latest in fashion with our new arrivals! From chic dresses to trendy tops, our collection has everything you need to elevate your style. Whether you're looking for casual everyday wear or something special for a night out, our new arrivals are sure to impress.</p>
            </div>
        </div>


    </div>
  );
};

export default Home;
