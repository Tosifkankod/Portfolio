import React from 'react';
import Home from './Home/Home';
import About from './About/About'
import Skills from './Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from './Contact/Contact';
import { FaInstagram, FaLinkedin  } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

import './Main.css'

const Main = () => {
    return(
        <div className='p-3 lg:px-10 */flex-1'>
            <Home />    
            <About />
            <Skills />
            <Experience />
            <Contact/>
            <div className='contact flex rounded-xl fixed text-neutral-700 w-1/2 lg:w-1/6 justify-around text-2xl  px-6 py-2'>
                <a href="https://www.instagram.com/tosifjerry" target='_blank' className=' hover:bg-neutral-700 hover:text-white p-2 rounded-md '>
                    <FaInstagram/>
                </a>
                <a href="https://linkedin.com/in/tosif-kankod" target='_blank' className=' hover:bg-neutral-700 hover:text-white p-2 rounded-md'>
                    <FaLinkedin/>
                </a>
                <a href="mailto:tosifkankod146@gmail.com" className=' hover:bg-neutral-700 hover:text-white p-2 rounded-md' >
                    <ImMail/>

                </a>
            </div>  
            <div className='p-4 h-screen flex items-center justify-center cursor-pointer'>
                <div className='getintouch-cont flex items-center justify-center'>
                    <div className='emoji_boy lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]'></div>
                    <h1 className='text-white text-center text-3xl lg:text-5xl'>get in touch</h1>

                </div>
            </div>

        </div>
    )   
}

export default Main; 