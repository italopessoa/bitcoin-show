import React, {Component} from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
import './QuestionOptionsPanel.css'

class QuestionOptionsPanel extends Component{
  constructor(props){
    super(props);
    this.state = {selectedIndex: -1}
    
  }
  selectCardHandler = (index) =>{
    this.setState({selectedIndex : index});
    this.props.funcaoTeste(index);
  }
  shouldComponentUpdate = (nextProps, nextState) =>{
    return (nextState.selectedIndex !== this.state.selectedIndex)
  }
  componentWillUpdate = (nextProps, nextState) => {
    console.log('renderizando QuestionOptionsPanel')
  }
  render(){
    return (
        <div>
          {
            this.props.options.map((option,index) =>{
              return(<CardPanel key={index} onClickHandler={this.selectCardHandler} onClickArgs={index} 
                    className={'red white-text touchable waves-effect waves-light ' + (this.state.selectedIndex === index ? 'selected-answer' : '')} 
                    content={<h6>{option}</h6>} />);
            })
          }
        </div>
    )
  }
}

export default QuestionOptionsPanel;