import React, {Component} from 'react'

import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'

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
              return(<CardPanel key={index} onSelectHandler={this.selectCardHandler} itemIndex={index} 
                    className={'red white-text touchable waves-effect waves-light ' + (this.state.selectedIndex === index ? 'selected-answer' : '')} content={option} />);
            })
          }
        </div>
      )
  }
}

export default QuestionOptionsPanel;