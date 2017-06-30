// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import QuestionPanel from '../../organisms/QuestionPanel/QuestionPanel';
import Log from '../../utils/Log';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.log = new Log(this.constructor.name);
    this.state = { skip: 3, cards: 1, help: 1, shouldSkipQuestion: false, isCardsAvailable: true };
    this.skipQuestion = this.skipQuestion.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
    this.showCards = this.showCards.bind(this);
    this.showHelp = this.showHelp.bind(this);
  }
  componentDidUpdate(prevState) {
    this.log.info(' HOMEPAGE: componentDidUpdate');
    if (prevState.shouldSkipQuestion) {
      this.setState({ shouldSkipQuestion: false });
    }
  }
  skipQuestion() {
    this.log.info(' HOMEPAGE: skipQuestion()');
    this.setState({ shouldSkipQuestion: true });
  }
  showCards() {
    if (this.state.cards > 0) {
      this.log.info('mostrar cartas');
      this.setState(prevState => ({ shouldShowCards: true, cards: prevState.cards - 1 }));
    } else if (this.state.shouldShowCards) {
      this.log.info('CARTAS ZERADAS');
      this.setState({ shouldShowCards: false });
    }
  }
  showHelp() {
    this.log.info('opiniao do povo');
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
              <QuestionPanel
                shouldSkipQuestion={this.state.shouldSkipQuestion}
                shouldShowCards={this.state.shouldShowCards}
                cardsCallback={this.showCards}
                removeWrongOptions={this.state.cards}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;
