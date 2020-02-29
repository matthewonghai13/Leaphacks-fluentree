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
        flipDirection="vertical">

        <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} onClick={this.handleClick}>
          <Card style={{ width: '18rem'}} >
            <Card body className="text-center">Front of card</Card>
          </Card>
        </a>

        <a style={{ cursor: 'pointer', display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} onClick={this.handleClick}>
          <Card  style={{ width: '18rem' }}>
            <Card body  className="text-center">Back of card</Card>
          </Card>
        </a>

      </ReactCardFlip>
      
    )
  }
}

export default Review;
