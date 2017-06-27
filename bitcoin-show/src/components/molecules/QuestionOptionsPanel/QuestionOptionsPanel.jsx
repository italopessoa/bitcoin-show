import React, { Component } from 'react';
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx';
import './QuestionOptionsPanel.css';

class QuestionOptionsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1 };
    this.getClassName = this.getClassName;
    this.selectCardHandler = this.selectCardHandler.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.selectedIndex !== this.state.selectedIndex);
  }
  componentWillUpdate() {
    console.log('renderizando QuestionOptionsPanel');
  }
  getClassName(index) {
    return `red white-text touchable waves-effect waves-light  ${this.state.selectedIndex === index ? 'selected-answer' : ''}`;
  }
  selectCardHandler(index) {
    this.setState({ selectedIndex: index });
    this.props.funcaoTeste(index);
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
