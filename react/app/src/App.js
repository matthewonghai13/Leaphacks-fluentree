import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Navbar from "./components/Nav";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
          <Route path = {"/Login"} component = {Login}></Route>
<<<<<<< HEAD
          {/* <Route path = {"Home"}></Route> */}
=======
          <Route path = {"/Review"} component = {Review}></Route>
>>>>>>> 5ee7fd935f757d1ed1225e5f7765a26572f1e56b
        </Router>
    </div>
  );
}

export default App;
