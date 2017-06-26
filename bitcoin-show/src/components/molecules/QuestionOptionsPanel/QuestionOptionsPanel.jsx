import React, {Component} from 'react'
import AnswerCardPanel from '../../atoms/AnswerCardPanel/AnswerCardPanel.jsx'
import './QuestionOptionsPanel.css'

class QuestionOptionsPanel extends Component{
  constructor(props){
    super(props);
    this.state = {selectedIndex: -1}
  }
  selectCardHandler = (index) =>{
    this.setState({selectedIndex : index});
  }
  render(){
    return (
        <div>
          {
            this.props.options.map((option,index) =>{
              return(<AnswerCardPanel key={index} onSelectHandler={this.selectCardHandler} itemIndex={index} 
                    className={'red white-text touchable waves-effect waves-light ' + (this.state.selectedIndex === index ? 'selected-answer' : '')} 
                    content={<h6>{option}</h6>} />);
            })
          }
        </div>
    )
  }
}

export default QuestionOptionsPanel;