import React, { Component } from 'react';
import CardPanel from '../CardPanel'

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [{}, {}, {}, {}] };
  }
  componentWillMount() {
    const array = ['spades', 'clubs', 'diamonds', 'heart'];
    for (let i = array.length - 1; i >= 0; i--) {

      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }
    this.nipes = array;
  }
  style = {
    backgroundColor: 'grey',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '800',
  }
  nipes = [];
  getRandomNumber = (min, max) => (
    Math.random() * (max - min) + min
  )
  render() {
    return (
      <div style={this.style} className="row center">
        {
          this.state.cards.map((c, index) => (
            <div key={index} className="col l6 m6 s6"
              onClick={() => this.props.cardSelected(this.getRandomNumber(0, 4), this.props.currentQuestion)}
            >
              <CardPanel
                touch
                content={
                  <h1 >
                    <span className={`icon-${this.nipes[index]}`} />
                  </h1>
                }
              />
            </div>
          ),
          )
        }
      </div>
    );
  }
}

export default Cards;
