import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time };
    this.tick = this.tick.bind(this);
    this.initialTime = props.time;
    this.startTimer = this.startTimer.bind(this);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.setState({ time: this.initialTime });
    } else if (nextProps.time !== this.initialTime && this.timerID) {
      console.log('STOP');
      clearInterval(this.timerID);
    }
  }
  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
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
      <h1 id="timer"><span>{this.state.time}</span></h1>
    );
  }
}

export default Timer;

Timer.propTypes = {
  reset: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

Timer.defaultProps = {
  reset: false,
};
