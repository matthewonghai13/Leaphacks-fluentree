import React from 'react';
import '../stylesheets/Login.css';

// import svg bg, logo
import svgBg from '../SVGFiles/login_bg.svg';
import svgTitle from '../SVGFiles/login_title.svg';

// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// login page for webapp
function Login() {
  return (
    <div id = 'body-div'>
      {/* div for background image */}
      <div className = 'Login-page' style = {{ backgroundImage: `url(${svgBg})`}}>

        {/* logo */}
        <img className = 'scale-down-top' src = {svgTitle} alt = 'logo'></img>

        <p id = 'intro'>A customizable language learning app</p>
        

      </div>
    </div>
      
    
    
    
    
  );
}

export default Login;
