// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import QuestionPanel from '../../organisms/QuestionPanel/QuestionPanel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { pass: 3, cards: 1, crowd: 1, skipQuestion: false };
    this.pass = this.pass.bind(this);
  }
  cards() {
    console.log('mostrar cartas');
  }
  pass() {
    console.log('pular pergunta');
    //this.setState({ skipQuestion: true });
  }
  crowd() {
    console.log('opiniao do povo');
  }
  componentDidUpdate() {
    this.setState({ skipQuestion: false });
  }
  render() {
    return (
      <div>
        <header>
          <Navbar
            cardsOnClick={this.cards}
            crowdOnClick={this.crowd}
            passOnClick={this.pass}
          />
        </header>
        <main>
          <div className="row">
            <div className="col l8 push-l2">
              <QuestionPanel />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

  export default HomePage;
