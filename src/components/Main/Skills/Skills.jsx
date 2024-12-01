import './Skills.css'
import html from '../../../assets/logos/html.png'
import css from '../../../assets/logos/css.png'
import docker from '../../../assets/logos/docker.png'
import express from '../../../assets/logos/express.png'
import GIT from '../../../assets/logos/GIT.png'
import github from '../../../assets/logos/github.png'
import java from '../../../assets/logos/java.png'
import JS from '../../../assets/logos/JS.png'
import mongodb from '../../../assets/logos/mongodb.png'
import mysql from '../../../assets/logos/mysql.png'
import nodejs from '../../../assets/logos/nodejs.png'
import redux from '../../../assets/logos/redux.png'
import tailwind from '../../../assets/logos/tailwind.png'
import angular from '../../../assets/logos/angular.png'
import typescript from '../../../assets/logos/typescript.png'
import react from '../../../assets/logos/react.png'



const Skills = () => {
  

  return (
    <div className="skills  w-full text-white    p-6">
      <h1 className="text-6xl font-bold mb-12  text-white inline-block px-0">
        Skills 🌟
      </h1>
      <h1 className='mb-4 text-lg font-bold text-gray-400 drop-shadow-md '>Programming Languages_</h1>
      <div className='flex gap-2 flex-wrap cursor-pointer'>
          <div className='chip flex items-center justify-center text-xl bg-yellow-400 text-white font-bold shadow-yellow-500 shadow-md gap-2 px-4 py-1'>
              <img src={JS} className="w-[25px] " alt="" />
              Javascript 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-600 text-white font-bold shadow-blue-600 shadow-md gap-2 px-4 py-1'>
              <img src={typescript} className="w-[20px] " alt="" />
              Typescript 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-orange-400 text-white font-bold shadow-orange-500 shadow-md gap-2 px-4 py-1'>
              <img src={java} className="w-[16px] " alt="" />
              Java 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-700 text-white font-bold shadow-blue-800 shadow-md gap-2 px-4 py-1'>
              {/* <img src={c} className="w-[20px] " alt="" /> */}
              C++ 
          </div>
    </div>

    
    <h1 className='mb-4 text-lg font-bold mt-8 text-gray-400'>More Technologies _</h1>
    <div className='flex gap-2 flex-wrap cursor-pointer'>
          <div className='chip flex items-center justify-center text-xl bg-red-400 text-white font-bold shadow-red-500 shadow-md gap-2 px-4 py-1'>
              <img src={html} className="w-[25px] " alt="" />
              HTML5 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-500 text-white font-bold shadow-blue-600 shadow-md gap-2 px-4 py-1'>
              <img src={css} className="w-[16px] " alt="" />
              CSS3 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-500 text-white font-bold shadow-blue-500 shadow-md gap-2 px-4 py-1'>
              <img src={docker} className="w-[25px] " alt="" />
              docker 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-amber-500 text-white font-bold shadow-amber-500 shadow-md gap-2 px-4 py-1'>
              <img src={GIT} className="w-[25px] " alt="" />
              git
          </div>
         
          <div className='chip flex items-center justify-center text-xl bg-slate-700 text-white font-bold shadow-slate-700 shadow-md gap-2 px-4 py-1'>
              <img src={github} className="w-[20px] " alt="" />
              github
          </div>
          <div className='chip flex items-center justify-center text-xl bg-gray-500 text-white font-bold shadow-gray-500 shadow-md gap-2 px-4 py-1'>
              <img src={nodejs} className="w-[25px] " alt="" />
              nodejs   
          </div>
    </div>

    <h1 className='mb-4 text-lg font-bold mt-8 text-gray-400'>Frameworks and Librarys_</h1>
    <div className='flex gap-2 flex-wrap cursor-pointer'>


          <div className='chip flex items-center justify-center text-xl bg-gray-800 text-white font-bold shadow-gray-800 shadow-md gap-2 px-4 py-1'>
              <img src={react} className="w-[20px] " alt="" />
              React 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-violet-700 text-white font-bold shadow-violet-700 shadow-md gap-2 px-4 py-1'>
              <img src={angular} className="w-[20px] " alt="" />
              Angular 
          </div>
         
          <div className='chip flex items-center justify-center text-xl bg-gray-500 text-white font-bold shadow-gray-500 shadow-md gap-2 px-4 py-1'>
              <img src={express} className="w-[25px] " alt="" />
              express   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-green-400 text-white font-bold shadow-green-400 shadow-md gap-2 px-4 py-1'>
              <img src={mongodb} className="w-[25px] " alt="" />
              mongodb   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-purple-500 text-white font-bold shadow-purple-700 shadow-md gap-2 px-4 py-1'>
              <img src={redux} className="w-[25px] " alt="" />
              redux   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-pink-500 text-white font-bold shadow-pink-500 shadow-md gap-2 px-4 py-1'>
              <img src={tailwind} className="w-[25px] " alt="" />
              tailwind   
          </div>
          
          
      </div>
    </div>
  );
};

export default Skills;
