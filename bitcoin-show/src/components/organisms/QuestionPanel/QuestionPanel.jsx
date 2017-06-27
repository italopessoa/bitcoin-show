import React, { Component } from 'react'
import QuestionTitlePanel from '../../molecules/QuestionTitlePanel/QuestionTitlePanel.jsx'
import QuestionOptionsPanel from '../../molecules/QuestionOptionsPanel/QuestionOptionsPanel.jsx'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
import './QuestionPanel.css'

class QuestionPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAnswer: -1 }
    }
    funcaoTeste = (selectedAnswerIndex) => {
        if (selectedAnswerIndex != null && selectedAnswerIndex > -1) {
            this.setState({ selectedAnswer: selectedAnswerIndex });
        }
    }
    componentWillUpdate = (nextProps, nextState) => {
        console.log('renderizando QuestionPanel: ' + (this.state.selectedAnswer > -1));
    }
    render() {
        return (
            <CardPanel className="card-panel blue darken-3 zero-padding-left"
                content={
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
                }
            />
        );
    }
}

export default QuestionPanel;
