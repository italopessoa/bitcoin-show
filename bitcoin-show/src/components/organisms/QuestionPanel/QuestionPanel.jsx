import React, { Component } from 'react';
import QuestionTitlePanel from '../../molecules/QuestionTitlePanel/QuestionTitlePanel';
import QuestionOptionsPanel from '../../molecules/QuestionOptionsPanel/QuestionOptionsPanel';
import CardPanel from '../../atoms/CardPanel/CardPanel';
import ScaleIconButton from '../../molecules/ScaleIconButton/ScaleIconButton';
import Timer from '../../atoms/Timer/Timer';
import axios from 'axios'
import './QuestionPanel.css';

class QuestionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnswer: -1, time: 30 };
    this.getContent = this.getContent.bind(this);
    this.funcaoTeste = this.funcaoTeste.bind(this);
    this.checkAnswer = this.checkAnswer;
  }
  componentWillUpdate() {
    console.log(`renderizando QuestionPanel: ${(this.state.selectedAnswer > -1)} time= ${this.state.time}`);
  }
  getContent() {
    return (
      <div>
        <div className="row">
          <div className="col m12 zero-padding-left">
            <QuestionTitlePanel scaleIn={(this.state.selectedAnswer > -1)} />
              <div style={{marginTop:'20px'}}>
                <ScaleIconButton 
                  onClick={this.checkAnswer}
                  className="btn-floating btn-large waves-effect waves-light green"
                  iconClassName="material-icons"
                  scaleIn={(this.state.selectedAnswer > -1)}
                  icon="done"
                />
              </div>
          </div>
        </div>
        <div className="row ">
          <div className="col m9 s11">
            <QuestionOptionsPanel
              funcaoTeste={this.funcaoTeste}
              options={['Karl Marx', 'Tio patinhas', 'Chapolin colorado', 'Chespirito']}
            />
            <Timer onComplete={this.checkAnswer} time={this.state.time} />
          </div>
        </div>
      </div>
    );
  }
  funcaoTeste(selectedAnswerIndex) {
    if (selectedAnswerIndex != null && selectedAnswerIndex > -1) {
      this.setState({ selectedAnswer: selectedAnswerIndex});
    }
  }
  checkAnswer() {
    console.log('verificando resposta');
  }
  render() {
    return (
      <CardPanel
        className="blue darken-3 zero-padding-left"
        content={this.getContent()}
      />
    );
  }
}

export default QuestionPanel;
