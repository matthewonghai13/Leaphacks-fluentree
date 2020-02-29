import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


// bootstrap dependencies

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/nav.css';

// login page for webapp

function Nav() {
  return (
    <Navbar className = "nav">
      <Navbar.Brand href="/">fluentree</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              Signed in as: <a href="#login">Bob Bobberson</a>
          </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
