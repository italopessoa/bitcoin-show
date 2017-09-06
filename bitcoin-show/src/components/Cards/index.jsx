import React, { Component } from 'react'
import CardPanel from '../CardPanel'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [{}, {}, {}, {}] }
    this.style = {
      backgroundColor: 'grey',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: '800',
    }
    this.nipes = []
  }
  componentWillMount() {
    const array = ['spades', 'clubs', 'diamonds', 'heart']
    for (let i = array.length - 1; i >= 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const itemAtIndex = array[randomIndex]

      array[randomIndex] = array[i]
      array[i] = itemAtIndex
    }
    this.nipes = array
  }
  getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min)
  }
  render() {
    return (
      <div style={this.style} className="row center">
        {
          this.state.cards.map((c, index) => (
            <div key={index} className="col l6 m6 s6"
              onClick={() => this.props.cardSelected(this.getRandomNumber(0, 4), this.props.currentQuestion)}
            >
              <CardPanel touch>
                <h1 >
                  <span className={`icon-${this.nipes[index]}`} />
                </h1>

              </CardPanel>
            </div>
          ),
          )
        }
      </div>
    )
  }
}

export default Cards
