import React from 'react';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../stylesheets/LangMenu.css';

// import all the images
import spain from '../PNGs/spain.jpg';
import france from '../PNGs/france.jpg';
import japan from '../PNGs/japan.jpg';
import work_img from '../PNGs/work.jpg';
import travel_img from '../PNGs/travel.jpg';
import culture_img from '../PNGs/culture.jpg';

import {Link} from "react-router-dom";


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

      {/* pick language */}
      <div class = "mainDiv">
        <h1>Pick a Language</h1>
      </div>

      <div class="card-deck">
        <div class="card" onClick={()=>{ selectLanguage('spanish'); }}>
          <img src = {spain} class="card-img-top" alt="spain"></img>
          <div class="card-body">
            <h5 class="card-title">Spanish</h5>
            <p class="card-text">¡Hola! Me alegra tenerte aquí.<br></br>
            Haga clic para continuar su aprendizaje.</p>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectLanguage('french'); }}>
          <img src = {france} class="card-img-top" alt="france"></img>
          <div class="card-body">
            <h5 class="card-title">French</h5>
            <p class="card-text">salut! Heureux de vous avoir ici.<br></br>
            Cliquez pour continuer votre apprentissage</p>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectLanguage('japanese'); }}>
          <img src = {japan} class="card-img-top" alt="japan"></img>
          <div class="card-body">
            <h5 class="card-title">Japanese</h5>
            <p class="card-text">こんにちは！ ここにいてよかった。<br></br>
            クリックして学習を続けます</p>
          </div>
        </div>
      </div>

      {/* end pick language */}

      {/* pick reason */}
      <div class = "mainDiv">
        <h1>Why are you Studying?</h1>
      </div>

      <div class="card-deck">
        <div class="card" onClick={()=>{ selectCardType('work'); }}>
          <img src = {work_img} class="card-img-top" alt="work"></img>
          <div class="card-body">
            <h5 class="card-title">Work</h5>
            <p class="card-text">Enhance your business trip<br></br>
            with essential vocabs.</p>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectCardType('travel'); }}>
          <img src = {travel_img} class="card-img-top" alt="travel"></img>
          <div class="card-body">
            <h5 class="card-title">Travel</h5>
            <p class="card-text">Travel professionally<br></br>
            by making the most out of your getaway.</p>
          </div>
        </div>
        <div class="card" onClick={()=>{ selectCardType('culture'); }}>
          <img src = {culture_img} class="card-img-top" alt="culture"></img>
          <div class="card-body">
            <h5 class="card-title">Culture</h5>
            <p class="card-text">Learn more than just the language.<br></br>
            Immerse yourself.</p>
          </div>
        </div>
      </div>
      {/* end pick reason */}
      <div className = "buttonDiv">
        <Link to="/Review"><button type="button" class="btn btn-success">Begin!</button></Link>
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
