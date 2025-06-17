import React from 'react';

const Header = () => {
  return (
    <div className='w-screen h-screen flex relative'>
      <div className='w-1/2 h-full  bgImage1'>

      </div>
      <div className='w-1/2 h-full bgImage2'>

      </div>

      <div className='w-full h-full bg-black/30 absolute flex flex-col justify-center items-center text-[3rem] text-white font-kugile'>
        Shoon Shoon
        <span className='px-4 font-shalyne'>
          &
        </span>
        Amyint
      </div>
    </div>
  );
}

export default Header;
