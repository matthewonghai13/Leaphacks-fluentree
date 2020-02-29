import React from 'react';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../stylesheets/LangMenu.css';

// import all the images
import spain from '../PNGs/spain.jpg';
import france from '../PNGs/france.jpg';
import japan from '../PNGs/japan.jpg';


// login page for webapp

var spanish = false;
var french = false;
var japanese = false;

var work = false;
var travel = false;
var culture = false;


function Splash() {
  return (
    <body>

      {/* test pick language */}
      <div class = "mainDiv">
        <h1>Pick a Language</h1>
      </div>

      <div class="card-deck">
        <div class="card" onClick={()=>{ selectLanguage('spanish'); }}>
          <img src = {spain} class="card-img-top" alt="spain"></img>
          <div class="card-body">
            <h5 class="card-title">Spanish</h5>
            <p class="card-text">¡Hola! Me alegra tenerte aquí. <br></br>
            Haga clic para continuar su aprendizaje.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectLanguage('french'); }}>
          <img src = {france} class="card-img-top" alt="france"></img>
          <div class="card-body">
            <h5 class="card-title">French</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectLanguage('japanese'); }}>
          <img src = {japan} class="card-img-top" alt="japan"></img>
          <div class="card-body">
            <h5 class="card-title">Japanese</h5>
            <p class="card-text">¡Hola! Me alegra tenerte aquí.
            Haga clic para continuar su aprendizaje.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      {/* end test pick language */}

      <div class = "mainDiv">
        <h1>Why are you studying?</h1>
      </div>
      <div class="container langSelect">
        <div class="row">
          <div class="col-sm spanish" onClick={()=>{ selectCardType('work'); }}>
            Work
          </div>
          <div class="col-sm french" onClick={()=>{ selectCardType('travel'); }}>
            Travel
          </div>
          <div class="col-sm japanese" onClick={()=>{ selectCardType('culture'); }}>
            Culture
          </div>
        </div>
      </div>
    </body>
  );
}

// sets global language variables for submission
function selectLanguage(langToSelect) { 
  switch(langToSelect) {
    case "spanish":
      !spanish ? spanish = true : spanish = false;
      break;
    case "french":
      !french ? french = true : french = false;
      break;
    case "japanese":
      !japanese ? japanese = true : japanese = false;
      break;
    default:
      break;
  }
  alert("" + spanish + french + japanese);
}

// sets global study reason variables for submission
function selectCardType(cardToSelect) { 
  switch(cardToSelect) {
    case "work":
      !work ? work = true : work = false;
      break;
    case "travel":
      !travel ? travel = true : travel = false;
      break;
    case "culture":
      !culture ? culture = true : culture = false;
      break;
    default:
      break;
  }
  alert("" + work + travel + culture);
}

export default Splash;
