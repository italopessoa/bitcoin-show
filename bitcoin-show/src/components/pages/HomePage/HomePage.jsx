// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import QuestionPanel from '../../organisms/QuestionPanel/QuestionPanel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { skip: 3, cards: 1, help: 1, shouldSkipQuestion: false };
    this.skipQuestion = this.skipQuestion.bind(this);
  }
  componentDidUpdate(prevState) {
    console.log(' HOMEPAGE: componentDidUpdate');
    if (prevState.shouldSkipQuestion) {
      this.setState({ shouldSkipQuestion: false });
    }
  }
  skipQuestion() {
    console.log(' HOMEPAGE: skipQuestion()');
    this.setState({ shouldSkipQuestion: true });
  }
  showCards() {
    console.log('mostrar cartas');
  }
  showHelp() {
    console.log('opiniao do povo');
  }
  render() {
    return (
      <div>
        <header>
          <Navbar
            showCardsOnClick={this.showCards}
            showHelpOnClick={this.showHelp}
            skipQuestionOnClick={this.skipQuestion}
          />
        </header>
        <main>
          <div className="row">
            <div className="col l8 push-l2">
              <QuestionPanel shouldSkipQuestion={this.state.skipQuestion} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;
