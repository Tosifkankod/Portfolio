import React from 'react';
import './Home.css';
import { CiLocationOn } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Home = () => {
  return (
    <div className='text-white flex items-center justify-center border-2 w-[100%] h-screen relative'>
      <div className='absolute w-full h-full z-[-1]'>
        {/* Scattered p elements with fixed positions */}
        <p className='w-[15px] h-[15px] absolute top-[10vh] left-[10vw] rotate-[10deg] rounded-md bg-red-500'></p>
        <p className='w-[20px] h-[20px] absolute top-[25vh] left-[30vw] rotate-45 rounded-md bg-blue-700'></p>
        <p className='w-[26px] h-[26px] absolute top-[50vh] left-[20vw] rotate-45 rounded-md bg-yellow-400'></p>
        <p className='w-[26px] h-[26px] absolute top-[15vh] left-[80vw] rotate-45 rounded-md bg-orange-600'></p>
        <p className='w-[20px] h-[20px] absolute top-[65vh] left-[75vw] rotate-[60deg] rounded-md bg-green-800'>1</p>
        <p className='w-[24px] h-[24px] absolute top-[25vh] left-[65vw] rotate-[20deg] rounded-md bg-pink-400'>1</p>
        <p className='w-[20px] h-[20px] absolute top-[65vh] left-[20vw] rotate-[35deg] rounded-md bg-blue-300'>1</p>
        <p className='w-[20px] h-[20px] absolute top-[80vh] left-[60vw] rotate-[35deg] rounded-md bg-orange-300'>1</p>
      </div>

      <div>
        <h1 className='myname md:text-8xl text-5xl font-bold text-center'>Hi, I'm Tosif.</h1>
        <p className='myname flex items-center justify-center gap-2 text-lg'>
          <CiLocationOn className='text-lg' /> Mumbai, IND
        </p>
        <p className='px-4 text-center mt-16 text-gray-400'>
          I’m a problem solver at heart, turning complex <HiMiniComputerDesktop className='text-white inline' /> challenges into elegant software solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
