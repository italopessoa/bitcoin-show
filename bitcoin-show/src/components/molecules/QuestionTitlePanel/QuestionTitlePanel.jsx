import React, { Component } from 'react';
import CardPanel from '../../atoms/CardPanel/CardPanel';
// import IconButton from '../../molecules/IconButton/IconButton.jsx'
import './QuestionTitlePanel.css';

class QuestionTitlePanel extends Component {
  constructor(props) {
    super(props);
  //   this.state = {questionTitle : 'Quem é foi autor do manifesto comunista?'}
    this.getContent = this.getContent.bind(this);
  }
  // shouldComponentUpdate = (nexProps, prevState) => {
  //   return prevState.questionTitle === 'Essa é a nova pergunta?'
  // }
  componentWillUpdate() {
    console.log('renderizando QuestionTitlePanel');
  }
  getContent() {
    return (
      <div>
        <h5 className="white-text">Quem é foi autor do manifesto comunista?</h5>
      </div>
    );
  }
  render() {
    return (
      <CardPanel
        className="red"
        id="questionTitle"
        content={this.getContent()}
      />
    );
  }
}

export default QuestionTitlePanel;
