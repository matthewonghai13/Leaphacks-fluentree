import React from 'react';
import logo from '../logo.svg';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card'
import '../App.css';
// bootstrap dependencies
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Review extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  // style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
 
  render() {
    return (
      <ReactCardFlip 
        isFlipped={this.state.isFlipped} 
        flipDirection="horizontal">

        <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center"}} onClick={this.handleClick}>
          {/* <Card style={{ width: '34rem'marginTop: "10%"}} > */}
            <Card style={{ color: "black", width: '34rem', height: '20rem', marginTop: '10%'}}>
              <Card.Body style={{ marginTop: '23%'}}>Front of card</Card.Body>
            </Card>
          {/* </Card> */}
        </a>

        <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center"}} onClick={this.handleClick}>
          <Card style={{ color: "black", width: '34rem', height: '20rem', marginTop: '10%'}}>
              <Card.Body style={{ marginTop: '23%'}}>Back of card</Card.Body>
            </Card>
        </a>

      </ReactCardFlip>
      
    )
  }
}

export default Review;
