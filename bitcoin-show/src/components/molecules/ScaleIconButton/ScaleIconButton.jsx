import React, {Component} from 'react'
import Icon from '../../atoms/Icon/Icon.jsx'
class ScaleIconButton extends Component{
     constructor(props){
         super(props);
          this.state = {x : 2}
     }
    // show = () =>{
    //     this.setState({scaleIn : true});
    // }
    shouldComponentUpdate (nextProps, nextState){
        console.log('renderizando ScaleIconButton: '+ this.props.scaleIn)
        console.log(this.state.x)
        this.setState({x:1});
        console.log(this.state.x)
        return false;//nextProps.scaleIn !== this.props.scaleIn
    }
    componentWillUpdate (nextProps, nextState){
    }
    render(){
        console.log('LOG');
        return(
            <a className={this.props.className + (this.props.scaleIn ? ' scale-transition scale-in' : ' scale-transition scale-out')}>
                <Icon 
                    className={this.props.iconClassName} 
                    icon={this.props.icon}/>
            </a>
        )
    }
}

export default ScaleIconButton; 