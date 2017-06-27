import React, { Component } from 'react';
import CardPanel from '../../atoms/CardPanel/CardPanel';
// import IconButton from '../../molecules/IconButton/IconButton.jsx'
import ScaleIconButton from '../../molecules/ScaleIconButton/ScaleIconButton';
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
        <div style={{ float: 'right' }}/* className="hide-on-med-and-down"*/>
          <ScaleIconButton
            className="btn-floating btn-large waves-effect waves-light green"
            iconClassName="material-icons"
            scaleIn={this.props.scaleIn}
            icon="done"
          />
        </div>
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
