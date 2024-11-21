


import { useState } from 'react'
import products from "../../components/data";
import NewArrival from '../../components/NewArrival/NewArrival';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import image1 from '../../assets/product1.jpg'
import image2 from '../../assets/product2.jpg'
const Home = () => {

  const [list, setList] = useState(products);
  console.log(setList);


  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 5,  // Shows 3 images at once
    slidesToScroll: 1, // Scrolls 1 image at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Shows 2 images on tablets
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Shows 1 image on mobile
          slidesToScroll: 1
        }
      }
    ]
  }
  


  const images = [
    image1, image2, image1, image1, image1
  ]


  return (
    <div>
      <div></div>


      <div>
        <div className="text-center py-[40px]">

          <h1 className="text-[48px] font-semibold">Classifications</h1>
          <p className="text-gray-400">Finding Best Products Now in Your Fingertips</p>
        </div>
        <div>
          <div className=" sm:grid mx-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-flow-row gap-3 md:gap-4 lg:gap-12 mt-3 m">
            {list.map(item => {
              return <>
                <div className="flex border justify-around items-center px-2 h-[122px] rounded-xl gap-2">

                  <p>{item.category}</p>
                  <img src={item.image} alt="item" className="h-20" />
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
      <NewArrival />
      <div className='text-center mt-12 mb-16 '>
        <h1 className='font-bold text-[2.5rem] text-black/70' >Offers</h1>
        <p className='text-[1.2rem] text-black/70'>Explore the latest trends in women's fashion, from elegant dresses to stylish accessories, and stay ahead of the curve!</p>

      </div>
<div className='px-12 mb-16'>
      <Slider {...settings}>
            {images.map((img, index)=> (<div key={index}>
              <img src={img}/>
            </div>))}
      </Slider>
      </div>
    </div>
  );
};

export default Home;
