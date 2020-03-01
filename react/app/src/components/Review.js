import React from 'react';

import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import {CardConsumer} from "./../context";
import '../App.css';
import '../stylesheets/Review.css'
// bootstrap dependencies
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false,
      currentWord: 0
      // wordArray: this.props.wordArray
    };
    this.handleClick = this.handleClick.bind(this);
    this.newCard = this.newCard.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  newCard() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped, currentWord: prevState.currentWord + 1 }));
  }
  // style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
 
  render() {
    let eng = ["report", "company", "money", "office", "business card"];
    let foreign = ["リポート", "会社（かいしゃ）", "お金（おかね）", "オフィス", "名刺（めいし）", "Done! Check back later."];

    
    return (
      <CardConsumer>
      { value => {
        const {getCard, updateCard, cards} = value;
        console.log(cards);
        return (
        <ReactCardFlip 
          isFlipped={this.state.isFlipped}
          currentWord = {0}
          flipDirection="horizontal" >

          <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center"}} onClick={this.handleClick}>
              <Card id="wordCard" border="dark">
                <Card.Body id="wordFront">{foreign[this.state.currentWord]}</Card.Body>
              </Card>
          </a>

          <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card id="wordCard" border="dark">
              <Card.Body id="wordBack">{eng[this.state.currentWord]}</Card.Body>
              
        <ListGroup className="list-group-flush" onClick={() => {{/*updateCard(this.state.currentWord);*/} this.newCard();}}>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item class="container" style={{ height:"60px", marginBottom: "20px", borderTop: "2px solid #ccc"}}>
                    <div class="row">
                      <div class="col" id="EH" style={{borderRight: "2px solid #ccc"}}>Easy</div>
                      <div class="col" id="EH" >Hard</div>
                    </div>
                </ListGroup.Item>
              </ListGroup>    

            </Card>
          </a>

        </ReactCardFlip> )
      }}
      </CardConsumer>
    )
  }
}

export default Review;
