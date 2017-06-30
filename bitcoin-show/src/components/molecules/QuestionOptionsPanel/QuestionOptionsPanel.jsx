import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPanel from '../../atoms/CardPanel/CardPanel';
import Log from '../../utils/Log';
import './QuestionOptionsPanel.css';

class QuestionOptionsPanel extends Component {
  constructor(props) {
    super(props);
    this.log = new Log(this.constructor.name);
    this.state = { selectedIndex: -1 };
    this.getClassName = this.getClassName.bind(this);
    this.selectCardHandler = this.selectCardHandler.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.questionId !== this.props.questionId) {
      this.setState({ selectedIndex: -1 });
    } else if (nextProps.removeWrongOptions > 0) {
      this.wrongOptions = [];
      let x = nextProps.removeWrongOptions;
      while (x > 0) {
        if (x !== nextProps.correctAnswer) {
          this.wrongOptions.push(x);
        }
        x -= 1;
      }
    } else {
      this.wrongOptions = [];
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.selectedIndex !== this.state.selectedIndex) || nextState.selectedIndex === -1;
  }
  componentWillUpdate() {
    this.log.info('renderizando QuestionOptionsPanel');
  }
  getClassName(index) {
    let defaultClassName = 'red white-text touchable waves-effect waves-light';

    if (this.wrongOptions && (this.wrongOptions.indexOf(index) >= 0)) {
      defaultClassName = defaultClassName.concat(' hide-wrong-answer');
    }

    { (this.state.selectedIndex === index) && (defaultClassName = defaultClassName.concat(' selected-answer')); }

    return defaultClassName;
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
