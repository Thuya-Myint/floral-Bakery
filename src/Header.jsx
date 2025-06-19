import React from 'react';
import Logo from './assets/image/logo/logo.png'

const Header = () => {

  const navItems = [
    "Home",
    "Products",
    "Service",
    "Contact Us",
    "About Us",
  ]



  return (
    <div className='w-screen h-screen headerImg relative'>
      {/* black div */}
      <div className='absolute inset-0 w-full h-full bg-black/50'>
        <nav className='flex  justify-between items-center  px-4 py-2  '>

          {/* logo */}
          <div>
            <img src={Logo} alt="" className='w-[70px] h-[70px] rounded-full ' />
          </div>

          {/* navigation item */}
          <div className='flex gap-6 text-white geistMonoULight text-[0.9rem] '>
            {
              navItems.map(nav => (
                <button key={nav} className='hover:cursor-pointer'>{nav}</button>
              ))
            }
          </div>

        </nav>

        {/* Where Flowers meet Flour */}
        <div className='mt-[100px] pl-[50px] geistMonoULight'>
          <div className='border-l-4 text-[2rem] text-white pl-4 border-rod'>
            Where Flowers meet Flour.
          </div>
          <div className='mt-[40px] text-white/70 text-[1.3rem] w-[30%] geistMonoThin'>
            Savor the scent, taste the petals
            and let every bite bloom with
            beauty.
          </div>
          <div className='mt-[20px] geistMonoThin w-fit text-white/80 '>
            Step into a world where artisan baking is infused with the delicate charm of fresh blooms.
          </div>
          <div className='mt-[20px] text-white'>
            Visit us today. Taste the difference nature makes.
            <button className='transition-all duration-300 active:opacity-40 py-1 cursor-pointer bg-rod/40 border-2 border-rod  hover:bg-rod/60 px-6 rounded-full '>Go</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Header;
