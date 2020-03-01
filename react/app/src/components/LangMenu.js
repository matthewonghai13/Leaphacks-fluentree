import React from 'react';
// bootstrap dependencies
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardConsumer} from "./../context";
import '../stylesheets/LangMenu.css';

// import all the images
import spain from '../PNGs/spain.jpg';
import france from '../PNGs/france.jpg';
import japan from '../PNGs/japan.jpg';
import work_img from '../PNGs/work.jpg';
import travel_img from '../PNGs/travel.jpg';
import culture_img from '../PNGs/culture.jpg';

import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


// login page for webapp

// var spanish = false;
// var french = false;
// var japanese = false;

// var work = false;
// var travel = false;
// var culture = false;

var spanishClass = "card";

class LangMenu extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        spanish: false,
        french: false,
        japanese: false,
        work: false,
        travel: false,
        culture: false
    };

    this.selectLanguage = this.selectLanguage.bind(this);
    this.selectCardType = this.selectCardType.bind(this);
    this.updateMaster = this.updateMaster.bind(this);
  }
  // sets global language variables for submission
  selectLanguage(langToSelect) { 
    switch(langToSelect) {
      case "spanish":
        this.setState({spanish: !this.state.spanish})
        this.setState({french: false})
        this.setState({japanese: false})
        break;
      case "french":
        this.setState({french: !this.state.french})
        this.setState({spanish: false})
        this.setState({japanese: false})
        break;
      case "japanese":
        this.setState({japanese: !this.state.japanese})
        this.setState({french: false})
        this.setState({spanish: false})

        break;
      default:
        break;
    }
  
    
  
    // alert("" + this.state.spanish + this.state.french + this.state.japanese);
  }

  updateMaster(switchLanguage, switchTopics) {
    if(this.state.spanish) {
      switchLanguage("Spanish")
    } else if(this.state.french) {
      switchLanguage("French");
    } else if(this.state.japanese) {
      switchLanguage("Japanese");
    }
  
    let topics = [];
    if(this.state.work) {
      topics.push("Work");
    }
    if(this.state.travel) {
      topics.push("Travel");
    }
    if(this.state.culture) {
      topics.push("Culture");
    }
    console.log(topics);
    switchTopics(topics);
  }

  
  // sets global study reason variables for submission
  selectCardType(cardToSelect) { 
    switch(cardToSelect) {
      case "work":
        this.setState({work: !this.state.work, travel: false, culture: false})
        break;
      case "travel":        
        this.setState({travel: !this.state.travel, work: false, culture: false})

        break;
      case "culture":        
        this.setState({culture: !this.state.culture, work: false, travel: false})

        break;
      default:
        break;
    }
  }

  render() {
    
    let spanishClass = this.state.spanish ? "selected card" : "unselected card";
    let frenchClass = this.state.french ? "selected card" : "unselected card";
    let japaneseClass = this.state.japanese ? "selected card" : "unselected card";

    let workClass = this.state.work ? "selected card" : "unselected card";
    let travelClass = this.state.travel ? "selected card" : "unselected card";
    let cultureClass = this.state.culture ? "selected card" : "unselected card";
    return (
      <CardConsumer>
      { value => {
        const {switchLanguage, switchTopics} = value;
        let language;
        let topics = [];
        return (
        <body>
          {/* pick language */}
          <div class = "mainDiv">
            <h1>Pick a Language</h1>
          </div>

          <div class="card-deck">
            <div id="spanish" class={spanishClass} onClick={()=>{ this.selectLanguage('spanish'); }}>
              <img src = {spain} class="card-img-top" alt="spain"></img>
              <div class="card-body">
                <h5 class="card-title">Spanish</h5>
                <p class="card-text">¡Hola! Me alegra tenerte aquí.<br></br>
                Haga clic para continuar su aprendizaje.</p>
              </div>
            </div>
            <div id="french" class={frenchClass} onClick={()=>{ this.selectLanguage('french'); }}>
              <img src = {france} class="card-img-top" alt="france"></img>
              <div class="card-body">
                <h5 class="card-title">French</h5>
                <p class="card-text">salut! Heureux de vous avoir ici.<br></br>
                Cliquez pour continuer votre apprentissage</p>
              </div>
            </div>
            <div id="japanese" class={japaneseClass} onClick={()=>{ this.selectLanguage('japanese'); }}>
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
            <div class={workClass} onClick={()=>{ this.selectCardType('work'); }}>
              <img src = {work_img} class="card-img-top" alt="work"></img>
              <div class="card-body">
                <h5 class="card-title">Work</h5>
                <p class="card-text">Enhance your business trip<br></br>
                with essential vocabulary.</p>
              </div>
            </div>
            <div class={travelClass} onClick={()=>{ this.selectCardType('travel'); }}>
              <img src = {travel_img} class="card-img-top" alt="travel"></img>
              <div class="card-body">
                <h5 class="card-title">Travel</h5>
                <p class="card-text">Travel professionally<br></br>
                by making the most out of your getaway.</p>
              </div>
            </div>
            <div class={cultureClass} onClick={()=>{ this.selectCardType('culture'); }}>
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
            <Link to="/Review"><button type="button" class="btn btn-success" onClick={()=>{this.updateMaster(switchLanguage, switchTopics)}}>Begin!</button></Link>
          </div>
        </body>
        )}}
      </CardConsumer>
    )
  }
}







export default LangMenu;
