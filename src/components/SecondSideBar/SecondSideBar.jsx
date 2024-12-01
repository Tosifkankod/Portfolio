import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './SecondSideBar.css';
import Navigation from './Navigation/Navigation';

const SecondSideBar = ({ toggle }) => {
  const sidebarRef = useRef(null);
  const prevToggleRef = useRef(toggle); // Ref to keep track of previous toggle state

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (prevToggleRef.current !== toggle) {
      // Animate based on the transition from the previous state to the new state
      gsap.fromTo(
        sidebar,
        {
          left: prevToggleRef.current ? '0px' : '-100%',
          borderRadius: prevToggleRef.current ? '0%' : '50%',
        },
        {
          left: toggle ? '0px' : '-100%',
          borderRadius: toggle ? '0%' : '50%',
          duration: 1,
          ease: toggle ? 'power4.out' : 'power2.in',
        }
      );

      // Update previous toggle state
      prevToggleRef.current = toggle;
    }
  }, [toggle]); // Track only toggle for animation updates

  return (
    <div
      ref={sidebarRef}
      className="sidebar fixed left-[-100%] flex flex-col justify-center bg-[#1C1D20] z-[99] h-[100vh] w-[100%] md:w-[550px] p-16 shadow-2xl shadow-gray-900"
    >
      <Navigation />
    </div>
  );
};  

export default SecondSideBar;
