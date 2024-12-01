/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'html': '#E54C21', 
        'c' : "#0180CD" ,
        'css' : "#214CE5" ,
        'docker' : "#006DB8" ,
        'express' : "#828282" ,
        'GIT' : "#828282" ,
        'github' :  "#000000" ,
        'java' : "#F96C6E" ,
        'JS' : "#F7E018" ,
        'mongodb' : "#419933" ,
        'mysql' : "#E8A451" ,
        'nodejs' : "#80BD00" ,
        'redux' : "#80BD00" ,
        'tailwind' : "#0DB3D2" ,
        'angular' : "#820BF1" ,
      }, 
      boxShadow: {
        'html': '0 4px 6px rgba(229, 76, 33, 0.2)',   // Shadow for 'html' color
        'c': '0 4px 6px rgba(1, 128, 205, 0.2)',      // Shadow for 'c' color
        'css': '0 4px 6px rgba(33, 76, 229, 0.2)',    // Shadow for 'css' color
        'docker': '0 4px 6px rgba(0, 109, 184, 0.2)',  // Shadow for 'docker' color
        'express': '0 4px 6px rgba(130, 130, 130, 0.2)', // Shadow for 'express' color
        'GIT': '0 4px 6px rgba(130, 130, 130, 0.2)',    // Shadow for 'GIT' color
        'github': '0 4px 6px rgba(0, 0, 0, 0.2)',      // Shadow for 'github' color
        'java': '0 4px 6px rgba(249, 108, 110, 0.2)',  // Shadow for 'java' color
        'JS': '0 4px 6px rgba(247, 224, 24, 0.2)',     // Shadow for 'JS' color
        'mongodb': '0 4px 6px rgba(65, 153, 51, 0.2)',  // Shadow for 'mongodb' color
        'mysql': '0 4px 6px rgba(232, 164, 81, 0.2)',   // Shadow for 'mysql' color
        'nodejs': '0 4px 6px rgba(128, 189, 0, 0.2)',   // Shadow for 'nodejs' color
        'redux': '0 4px 6px rgba(128, 189, 0, 0.2)',    // Shadow for 'redux' color
        'tailwind': '0 4px 6px rgba(13, 179, 210, 0.2)', // Shadow for 'tailwind' color
        'angular': '0 4px 6px rgba(130, 11, 241, 0.2)', // Shadow for 'angular' color
      },
    },
  },
  plugins: [],
}