import React, { useEffect } from 'react';
import './Home.css';
import { CiLocationOn } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // Target all elements with the class 'scattered'
    const scatteredElements = gsap.utils.toArray('.scattered');

    // Apply GSAP animation to each scattered element for parallax effect
    scatteredElements.forEach((el) => {
      // Capture initial top position
      const initialTop = el.getBoundingClientRect().top + window.scrollY;
     
      gsap.fromTo(el,
        {
          // Initialize with current position
          y: 0, 
        },
        {
          // Apply the parallax effect
          y: 200, // Change this value as needed
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: "top bottom", // Adjust these values based on your layout
            end: "bottom top",
            scrub: true,
            markers: false // Set to true if you want to debug
          }
        }
      );
    });
  }, []);

  return (
    <div className='text-white flex items-center justify-center w-[100%] h-screen relative'>
      <div className='absolute w-full h-full z-[-1]'>
        {/* Scattered p elements with fixed positions */}
        <p className='scattered w-[15px] h-[15px] top-[1vh] left-[50vw] rotate-[10deg] rounded-md bg-gray-500'></p>
        <p className='scattered w-[15px] h-[15px] top-[1vh] left-[30vw] rotate-[10deg] rounded-md bg-gray-500'></p>
        <p className='scattered w-[15px] h-[15px] top-[25vh] left-[20vw] rotate-[10deg] rounded-md bg-gray-500'></p>
        <p className='scattered w-[20px] h-[20px] top-[25vh] left-[36vw] rotate-45 rounded-md bg-gray-700'></p>
        <p className='scattered w-[26px] h-[26px] top-[50vh] left-[20vw] rotate-45 rounded-md bg-gray-400'></p>
        <p className='scattered w-[26px] h-[26px] top-[35vh] left-[75vw] rotate-45 rounded-md bg-gray-600'></p>
        <p className='scattered w-[20px] h-[20px] top-[65vh] left-[75vw] rotate-[60deg] rounded-md bg-gray-800'>1</p>
        <p className='scattered w-[24px] h-[24px] top-[25vh] left-[65vw] rotate-[20deg] rounded-md bg-gray-400'>1</p>
        <p className='scattered w-[20px] h-[20px] top-[55vh] left-[45vw] rotate-[35deg] rounded-md bg-gray-300'>1</p>
        <p className='scattered w-[20px] h-[20px] top-[70vh] left-[55vw] rotate-[35deg] rounded-md bg-gray-300'>1</p>
      </div>

      <div>
        <h1 className='myname md:text-8xl text-5xl font-bold text-center'>Hi, I'm Tosif.</h1>
        <p className='myname flex items-center justify-center gap-2 text-lg'>
          <CiLocationOn className='text-lg' /> Mumbai, IND
        </p>
        <p className='px-4 text-center mt-16 text-gray-400'>
          I’m a problem solver at heart, turning complex <HiMiniComputerDesktop className='text-gray-400 inline' /> challenges into elegant software solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
