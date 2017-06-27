import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time };
    this.tick = this.tick.bind(this);
    this.initialTime = props.time;
  }
  componentDidMount() {
    console.log('timer mount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.time !== this.initialTime && this.timerID)
      clearInterval(this.timerID);

    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    //console.log('renderizando Timer');
    return this.state.time > 0;
  }
  tick() {
    if (this.state.time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }));
    } else {
      clearInterval(this.timerID);
      this.props.onComplete();
    }
  }
  render() {
    return (
      <h1><span>{this.state.time}</span></h1>
    );
  }
}

export default Timer;
