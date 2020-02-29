import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// bootstrap dependencies


import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// login page for webapp

function App() {
  return (
    <Navbar>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
