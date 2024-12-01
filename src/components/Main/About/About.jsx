import React from 'react';
import './About.css'
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
    return (
        <div className=' py-10 overflow-hidden '>
            <h1 className='text-6xl font-bold px-6  mb-8  text-white inline-block'>About Me 🤞</h1>
            <div className='flex flex-col md:flex-row  items-center justify-center px-4'>
                <div className='md:w-1/2 p-4'>
                    <p className='text-lg md:text-2xl text-gray-600 text-justify'>
                        <span className='typewriter mr-2 inline-block'>
                            <Typewriter
                                words={['hello world!', 'Myself Tosif']}
                                typeSpeed={80} // Remove quotes for number value
                                loop={Infinity}
                                cursor
                                cursorStyle={'_'}
                            />
                        </span>
                        I’m a Software Developer based in Mumbai, specializing in creating full-stack websites using a variety of modern technologies. I excel in building dynamic, responsive, and efficient web solutions. Currently, I’m pursuing my Master’s in Computer Applications, continuously enhancing my skills in both front-end and back-end development.
                    </p>

                    {/* <p> */}
                        <ul >
                            <li className='text-lg md:text-2xl text-gray-600 mt-4'>🎓 Pursuing Masters in Computer Application</li>
                        </ul>
                    {/* </p> */}
                </div>
                <div className='md:w-1/2  p-4 flex justify-center'>
                    <img src="/portfolio/assets/profile.jpeg" className='box w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl ' alt="Profile" />
                </div>
                 

            

            </div>
        </div>
    );
}

export default About;
