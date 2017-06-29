import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [-1, -1, -1, -1] };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(x) {
    const c = [];
    for (let index = 0; index < this.state.cards.length; index++) {
      c.push((index === x ? (Math.floor((Math.random() * 4))) : -1));
    }
    this.setState({ cards: c });
  }
  createCard(index) {
    return (<div key={index} className="col s5 m5 l5" onClick={() => this.getRandomNumber(index)}>
      <div className="touchable card-panel light-blue darken-4 center">
        <h1>{this.state.cards[index] > -1 ? this.state.cards[index] : <i className="fa fa-question" aria-hidden="true"></i>}</h1>
      </div>
    </div>);
  }
  render() {
    return (
      <div id="divCartas" className="white-text blue lighten-3">
        <div className="row" id="divCartasRow">
          {
            this.state.cards.map((card, index) => {
              return (this.createCard(index));
            })
          }
        </div>
      </div>
    );
  }
}

export default Cards;
