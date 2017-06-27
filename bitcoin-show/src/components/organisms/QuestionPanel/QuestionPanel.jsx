import React, { Component } from 'react';
import QuestionTitlePanel from '../../molecules/QuestionTitlePanel/QuestionTitlePanel';
import QuestionOptionsPanel from '../../molecules/QuestionOptionsPanel/QuestionOptionsPanel';
import CardPanel from '../../atoms/CardPanel/CardPanel';
import './QuestionPanel.css';

class QuestionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnswer: -1 }
    this.getContent = this.getContent.bind(this);
  }
  funcaoTeste = (selectedAnswerIndex) => {
    if (selectedAnswerIndex != null && selectedAnswerIndex > -1) {
      this.setState({ selectedAnswer: selectedAnswerIndex });
    }
  }
  componentWillUpdate = (nextProps, nextState) => {
    console.log('renderizando QuestionPanel: ' + (this.state.selectedAnswer > -1));
  }
  getContent() {
    return (
      <div>
        <div className="row">
          <div className="col m12 zero-padding-left">
            <QuestionTitlePanel scaleIn={(this.state.selectedAnswer > -1)} />
          </div>
        </div>
        <div className="row ">
          <div className="col m9 s11">
            <QuestionOptionsPanel funcaoTeste={this.funcaoTeste} options={['Karl Marx', 'Tio patinhas', 'Chapolin colorado', 'Chespirito']} />
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <CardPanel className="card-panel blue darken-3 zero-padding-left"
        content={this.getContent()}
      />
    );
  }
}

export default QuestionPanel;
