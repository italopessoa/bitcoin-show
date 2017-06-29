import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPanel from '../../atoms/CardPanel/CardPanel';
import './QuestionOptionsPanel.css';

class QuestionOptionsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1 };
    this.getClassName = this.getClassName;
    this.selectCardHandler = this.selectCardHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.questionId !== this.props.questionId) {
      this.setState({ selectedIndex: -1 });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.selectedIndex !== this.state.selectedIndex) || nextState.selectedIndex === -1;
  }
  componentWillUpdate() {
    console.log('renderizando QuestionOptionsPanel');
  }
  getClassName(index) {
    return `red white-text touchable waves-effect waves-light  ${this.state.selectedIndex === index ? 'selected-answer' : ''}`;
  }
  selectCardHandler(index) {
    this.setState({ selectedIndex: index });
    this.props.onCardSelected(index);
  }
  render() {
    return (
      <div>
        {
          this.props.options.map((option, index) =>
          (
            <CardPanel
              key={index}
              onClickHandler={this.selectCardHandler}
              onClickArgs={index}
              className={this.getClassName(index)}
              content={<h6>{option}</h6>}
            />
          ))
        }
      </div>
    );
  }
}

export default QuestionOptionsPanel;

QuestionOptionsPanel.propTypes = {
  questionId: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCardSelected: PropTypes.func.isRequired,
};
