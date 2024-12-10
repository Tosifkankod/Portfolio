import './Skills.css'


const Skills = () => {
  

  return (
    <div className="skills  w-full text-white    p-6">
      <h1 className="text-6xl font-bold mb-12  text-white inline-block px-0">
        Skills 🌟
      </h1>
      <h1 className='mb-4 text-lg font-bold text-gray-400 drop-shadow-md '>Programming Languages_</h1>
      <div className='flex gap-2 flex-wrap cursor-pointer'>
          <div className='chip flex items-center justify-center text-xl bg-yellow-400 text-white font-bold shadow-yellow-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/JS.png" className="w-[25px] " alt="" />
              Javascript 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-600 text-white font-bold shadow-blue-600 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/typescript.png" className="w-[20px] " alt="" />
              Typescript 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-orange-400 text-white font-bold shadow-orange-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/java.png" className="w-[16px] " alt="" />
              Java 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-700 text-white font-bold shadow-blue-800 shadow-md gap-2 px-4 py-1'>
            C++ 
          </div>
    </div>

    
    <h1 className='mb-4 text-lg font-bold mt-8 text-gray-400'>More Technologies _</h1>
    <div className='flex gap-2 flex-wrap cursor-pointer'>
          <div className='chip flex items-center justify-center text-xl bg-red-400 text-white font-bold shadow-red-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/html.png" className="w-[25px] " alt="" />
              HTML5 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-500 text-white font-bold shadow-blue-600 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/css.png" className="w-[16px] " alt="" />
              CSS3 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-blue-500 text-white font-bold shadow-blue-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/docker.png" className="w-[25px] " alt="" />
              docker 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-amber-500 text-white font-bold shadow-amber-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/GIT.png" className="w-[25px] " alt="" />
              git
          </div>
         
          <div className='chip flex items-center justify-center text-xl bg-slate-700 text-white font-bold shadow-slate-700 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/github.png" className="w-[20px] " alt="" />
              github
          </div>
          <div className='chip flex items-center justify-center text-xl bg-gray-500 text-white font-bold shadow-gray-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/nodejs.png" className="w-[25px] " alt="" />
              nodejs   
          </div>
    </div>

    <h1 className='mb-4 text-lg font-bold mt-8 text-gray-400'>Frameworks and Librarys_</h1>
    <div className='flex gap-2 flex-wrap cursor-pointer'>


          <div className='chip flex items-center justify-center text-xl bg-gray-800 text-white font-bold shadow-gray-800 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/react.png" className="w-[20px] " alt="" />
              React 
          </div>
          <div className='chip flex items-center justify-center text-xl bg-violet-700 text-white font-bold shadow-violet-700 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/angular.png" className="w-[20px] " alt="" />
              Angular 
          </div>
         
          <div className='chip flex items-center justify-center text-xl bg-gray-500 text-white font-bold shadow-gray-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/express.png" className="w-[25px] " alt="" />
              express   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-green-400 text-white font-bold shadow-green-400 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/mongodb.png" className="w-[25px] " alt="" />
              mongodb   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-yellow-600 text-white font-bold shadow-yellow-600 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/mysql.png" className="w-[25px] " alt="" />
              mysql   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-purple-500 text-white font-bold shadow-purple-700 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/redux.png" className="w-[25px] " alt="" />
              redux   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-red-500 text-white font-bold shadow-red-700 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/materialui.png" className="w-[25px] " alt="" />
              Material UI   
          </div>
          <div className='chip flex items-center justify-center text-xl bg-pink-500 text-white font-bold shadow-pink-500 shadow-md gap-2 px-4 py-1'>
              <img src="/portfolio/assets/logos/tailwind.png" className="w-[25px] " alt="" />
              tailwind   
          </div>
          
          
      </div>
    </div>
  );
};

export default Skills;
