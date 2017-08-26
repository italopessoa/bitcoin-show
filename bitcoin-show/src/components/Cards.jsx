import React, { Component } from 'react';


class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [{}, {}, {}, {}] };
  }

  render() {
    return (
      <div>
        {
          this.state.cards.map((c, index) => (
            <button
              key={index}
              onClick={() => this.props.onClick()}
            >Card: {index}
            </button>),
          )
        }
      </div>
    );
  }
}

export default Cards;
