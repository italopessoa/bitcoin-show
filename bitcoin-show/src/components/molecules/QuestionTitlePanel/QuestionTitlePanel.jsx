import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPanel from '../../atoms/CardPanel/CardPanel';
import Log from '../../utils/Log';
import './QuestionTitlePanel.css';

class QuestionTitlePanel extends Component {
  constructor(props) {
    super(props);
    this.log = new Log(this.constructor.name);
    this.getContent = this.getContent.bind(this);
  }
  // shouldComponentUpdate = (nexProps, prevState) => {
  //   return prevState.questionTitle === 'Essa é a nova pergunta?'
  // }
  componentWillUpdate() {
    this.log.info('renderizando QuestionTitlePanel');
  }
  getContent() {
    return (
      <div>
        <h5 className="white-text">{this.props.question}</h5>
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

QuestionTitlePanel.propTypes = {
  question: PropTypes.string.isRequired,
};
