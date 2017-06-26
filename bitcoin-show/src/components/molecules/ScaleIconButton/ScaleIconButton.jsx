import React, {Component} from 'react'
import Icon from '../../atoms/Icon/Icon.jsx'
class ScaleIconButton extends Component{
    // constructor(props){
    //     super(props);
    //     // this.setState = {scaleIn : this.props.scaleIn}
    // }
    // show = () =>{
    //     this.setState({scaleIn : true});
    // }
    render(){
        console.log('renderizando ScaleIconButton: '+ this.props.scaleIn);
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