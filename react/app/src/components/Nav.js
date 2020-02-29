import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


// bootstrap dependencies

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/nav.css';

// import branding
import fluentree from '../SVGFiles/title.svg';

// import user image
import user from '../SVGFiles/user.svg';

// login page for webapp

function Nav() {
  return (
    <Navbar className = "nav">
      {/* test nav bar */}
      <Navbar.Brand href="#home">
        <img
          src = {fluentree}
          width="200"
          height="200"
          className="d-inline-block align-top"
          alt="fluentree logo"
        />
      </Navbar.Brand>

      {/* end test nav bar */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
              {/* <a href="#login">Bob Bobberson    </a> */}
              {/* <p>Bob Bobberson</p>
              <img id = 'user-img'
                src = {user} 
                alt = 'user'
                width = '10%'></img>
          </Navbar.Text> */}

          {/* test nav bar */}
          <Navbar.Brand href="#home">
            <img
              src = {user}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="fluentree logo"
            />
          </Navbar.Brand>

      {/* end test nav bar */}          
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
