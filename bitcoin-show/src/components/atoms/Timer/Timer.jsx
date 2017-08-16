import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Log from '../../utils/Log';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.log = new Log(this.constructor.name);
    this.state = { time: props.time };
    this.tick = this.tick.bind(this);
    this.initialTime = props.time;
    this.startTimer = this.startTimer.bind(this);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillReceiveProps(nextProps) {
    this.log.error(nextProps.reset);
    if (nextProps.reset) {
      this.log.info('set statee **********************');
      this.setState({ time: this.initialTime });
      clearInterval(this.timerID);
      this.startTimer();
    } else if (nextProps.time !== this.initialTime && this.timerID) {
      this.log.info('STOP');
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
      this.log.error('stop'+this.state.time);
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
