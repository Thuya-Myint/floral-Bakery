import React from 'react';
import Logos from './assets/image/logo/logo.png'

const Header = () => {
  return (
    <div className='w-screen h-screen headerImage relative'>

        <div className='w-full h-full absolute'>
          
          {/* logo */}
          <div className='flex justify-between items-center'>
             <img src='Logos' alt='' className='w-[70px] h-[50px] rounded-full'/>
          </div>
          
          
          {/* nav */}
          <div className='flex'> 
            <div>Home</div>
            <div>Service</div>
            <div>Product</div>
            <div>Contact Us</div>
            <div>About us</div>
          </div>


        </div>


        <div className='mt-[100px] pl-[50px]'>
            <div className='border-l-5 text-[2rem] text-white pl-5' >
               Where Flowers meet Flour.
            </div>
            <div className='mt-[40px] text-white/70 text-[1.3rem] w-[30%]'>
            Savor the scent, taste the petals
            and let every bite bloom with
            beauty.
          </div>
          <div className='mt-[20px] w-fit text-white/80 '>
            Step into a world where artisan baking is infused with the delicate charm of fresh blooms.
          </div>
          <div className='mt-[20px] text-white'>
            Visit us today. Taste the difference nature makes.
            <button>Go</button>
          </div>
        </div>
    </div>
  
  );
}

export default Header;
