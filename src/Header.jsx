import React from 'react';
import image1 from './assets/images/cake/macron/cakeLandingPage.jpg'
import image2 from './assets/images/flower/flower5.png'
const Header = () => {
  return (
    <div>
    <div className='w-screen h-screen flex relative'>
      <div className='w-full h-full  bgImage1'>
        
      </div>



      {/* <div className='w-1/2 h-full bgImage2'>

      </div> */}

        <div className='w-full h-full  absolute flex flex-col justify-center  items-center  text-white font-kugile'>

        {/* <div className='w-full'>
          <div className='w-[180px] h-[200px] bg-white flex justify-center ml-24 mt-20 -rotate-[20deg] shadow-xl shadow-black/40'>
          <img src={image1} alt="" className='w-[90%] h-[80%] mt-[5%]'/>
        </div>
        </div> */}
        <div className='flex flex-col items-center bg-neutral-400/40 p-4 rounded-lg bg-Blur text-[2.5rem]'>
          Shoon Shoon
        <span className='px-4 font-shalyne'>
          &
        </span>
        Amyint
        </div>
      </div>
   
    </div>
    <div className='w-screen h-screen bg-amber-200'>
      <div>
        <image src={image2} alt="" className='w-[100px] h-[100px]'/>
      </div>
       <div className='w-full h-15 bg-amber-100 text-center text-2xl pt-2'>
        konnichiwa
      </div>
    </div>
       </div>
  );
}

export default Header;
