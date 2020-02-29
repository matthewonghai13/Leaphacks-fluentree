import React from 'react';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../stylesheets/LangMenu.css';


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
      <div class = "mainDiv">
        <h1>Pick your Language.</h1>
      </div>
      <div class="container langSelect">
        <div class="row">
          <div class="col-sm spanish" onClick={()=>{ selectLanguage('spanish'); }}>
            Spanish
          </div>
          <div class="col-sm french" onClick={()=>{ selectLanguage('french'); }}>
            French
          </div>
          <div class="col-sm japanese" onClick={()=>{ selectLanguage('japanese'); }}>
            Japanese
          </div>
        </div>
      </div>
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
