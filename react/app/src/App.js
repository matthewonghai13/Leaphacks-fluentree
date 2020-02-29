import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Navbar from "./components/Nav";
import Review from "./components/Review";
import Splash from "./components/Splash";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path = {"/Login"} component = {Login}></Route>
            <Route path = {"/Review"} component = {Review}></Route>
            <Route component = {Splash} />
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
