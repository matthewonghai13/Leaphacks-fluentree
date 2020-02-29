import React from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/Login.css';

// import svg bg, logo
import svgBg from '../SVGFiles/login_bg.svg';
import svgTitle from '../SVGFiles/title_with_tree.svg';

// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// login page for webapp
function Login() {
  return (
    <div id = 'body-div'>
      {/* div for background image */}
      <div className = 'Login-page text-align-center' style = {{ backgroundImage: `url(${svgBg})`}}>

        {/* logo */}
        <img className = 'scale-down-top' src = {svgTitle} alt = 'logo'></img>

        <h4 id = 'intro' className = 'scale-up-top'>
          A customizable, smart language learning service<br></br>
          <Link to="/Menu"><button type="button" class="btn btn-success startButton">Get Started</button></Link>
        </h4>
        
        

      </div>
    </div>
  );
}

export default Login;
