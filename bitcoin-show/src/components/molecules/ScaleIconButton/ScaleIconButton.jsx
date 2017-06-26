import React, {Component} from 'react'
import Icon from '../../atoms/Icon/Icon.jsx'
class ScaleIconButton extends Component{
    constructor(props){
        super(props);
        this.state = {scaleIn : true}
    }
    show = () =>{
        this.setState({scaleIn : true});
    }
    render(){
        return(
            <a className={this.props.className + (this.state.scaleIn ? ' scale-transition scale-in' : ' scale-transition scale-out')}>
                <Icon 
                    className={this.props.iconClassName} 
                    icon={this.props.icon}/>
            </a>
        )
    }
}

export default ScaleIconButton; 