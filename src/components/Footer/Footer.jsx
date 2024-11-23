
import products from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const Footer = () => {
  return (
    <div className=''>
        <div className='text-center'>
            <h1 className='text-[40px] font-semibold'>Offers</h1>
            <p className="text-gray-400">Explore the latest trends in women fashion, 
            from elegant dresses to stylish accessories, and stay ahead of the curve!</p>
        </div>
        <div className='flex px-3 md:px-[120px] pt-16'>
        <Swiper pagination={{
                type: 'fraction',
              }}
              navigation={true}
              slidesPerView={3} 
          spaceBetween={10}
              modules={[ Navigation]}
              className="mySwiper md:-mb-[60px]">

            {products.map((img, index )=> {
            return  <SwiperSlide key={index}> <img src={img.image} alt='images'  className='h-[70%]'/> </SwiperSlide>
                
            })}
            </Swiper>
            
        
        </div>
            <hr className='bg-gray-400 w-[100%]'/>
        <footer className='flex flex-col md:flex-row text-center md:text-left justify-between px-[100px] pb-10'>
            <div>
                <h2 className='tex-xl font-bold py-3'>Fashionista</h2>
                <p className='w-[100%] md:w-[20vw] text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Iusto a qui sunt inventore, autem quisquam perferendis officiis hic consequuntur</p>
            </div>
            <div>
                <h3 className='text-xl font-bold py-3'>company</h3>
                <ul className='text-gray-400'>
                    <li><a href='#'>about
                        </a></li>
                    <li><a href='#'>careers
                        </a></li>
                    <li><a href='#'>brand center
                        </a></li>
                    <li><a href='#'>blog
                    </a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold py-3'>Shop by</h3>
                <ul className='text-gray-400'>
                    <li><a href='#'>Kids
                        </a></li>
                    <li><a href='#'>Western Wear
                        </a></li>
                    <li><a href='#'>Sports & Activewear
                        </a></li>
                    <li><a href='#'>Men Clothing
                    </a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold py-3'>legal</h3>
                <ul className='text-gray-400'>
                    <li><a href='#'>privacy policy
                        </a></li>
                    <li><a href='#'>terms & conditions
                        </a></li>
                    <li><a href='#'>contact us
                        </a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold py-3'>reach out to us</h3>
                <ul className='flex gap-3 justify-center'>
               <img src='https://rdemo.ecommercesourcecode.com/website-fashionista/assets/x-ERUlYkum.png' alt='twitter' className='h-6'/>
               <img src='https://rdemo.ecommercesourcecode.com/website-fashionista/assets/instagram-5mFpOXIZ.png' alt='twitter' className='h-6'/>
               <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2ZzUrDQBDH82S7Vby1JTsoPpAieFBv0qMP4UyEQq03L4KWWh/Am4eASXupYEeiWL9o6W5jdgPzgzku+f/2m00UCYIgBE3DYKwArxTgRANxFaUAJwqor+KkvVZ4beiwqtB6URk8cO557+HhU4Ja1gLFtAlI4NJewODYe3CYV24tEEBo/l4ioEvoxc2dhI86Q767TznLpzyb8Q+CHoGN7YSvb554GTpkgePOcGn44AUGo5RrLZCPX/4E3ju55a3di5Xaexd4/b1imd/XxartvQvYThktAvA/vb6I52wa3gjYMBil9RY47z7WW+D07CE8AdmFQEaAZAppOYlJdiGWbRTkNspyEuu6XSVUyU+L6wlgZi8A1C/7QudcBnv2AnHS9h4cPqoB2IxcKH4u+A6vgPadwn9JUKt4n6/yuV0V3zLYc+55QRCEqCreAAESa+zxbT1rAAAAAElFTkSuQmCC' alt='twitter' className='h-6'/>
               <img src='https://rdemo.ecommercesourcecode.com/website-fashionista/assets/linkedin-Zl9YMHdr.png' alt='twitter' className='h-6'/>
            </ul>
            </div>
           
        </footer>
    </div>
  )
}

export default Footer