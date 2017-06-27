import React, { Component } from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
// import IconButton from '../../molecules/IconButton/IconButton.jsx'
import ScaleIconButton from '../../molecules/ScaleIconButton/ScaleIconButton.jsx'

import './QuestionTitlePanel.css'
class QuestionTitlePanel extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {questionTitle : 'Quem é foi autor do manifesto comunista?'}
    // }
    // shouldComponentUpdate = (nexProps, prevState) => {
    //   return prevState.questionTitle === 'Essa é a nova pergunta?'
    // }
    componentWillUpdate = (nextProps, nextState) => {
        console.log('renderizando QuestionTitlePanel');
    }
    render() {
        return (
            <CardPanel className="red" id="questionTitle" content={
                <div>
                    <h5 className="white-text">Quem é foi autor do manifesto comunista?</h5>
                    <div style={{ 'float': 'right' }}  /*className="hide-on-med-and-down"*/>
                        <ScaleIconButton
                            className="btn-floating btn-large waves-effect waves-light green"
                            iconClassName="material-icons"
                            scaleIn={this.props.scaleIn}
                            icon="done" />
                    </div>
                </div>
            }
            />
        );
    }
}

export default QuestionTitlePanel;
