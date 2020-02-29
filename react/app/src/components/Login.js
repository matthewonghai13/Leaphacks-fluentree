import React from 'react';
import '../stylesheets/Login.css';

// import svg bg, logo
import svgBg from '../SVGFiles/login_bg.svg';
// import svgTitle from '../SVGFiles/login_title.svg';

// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// login page for webapp

function Login() {
  return (
    <body>
      {/* div for background image */}
      <div className = 'Login' style = {{ backgroundImage: `url(${svgBg})`}}>

        {/* logo */}
        
        

      </div>
    </body>
    
    
    
  );
}

export default Login;
