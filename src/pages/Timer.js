import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTimerAction } from '../actions';

class Timer extends Component {
  constructor(){
    super();
    this.state = { seconds: 30, stop: false };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { seconds } = this.state;
      const { stop } = this.props;
      if (seconds > 0 && !stop) {
        this.setState((prevState) => ({ seconds: prevState.seconds - 1}));
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { seconds } = this.state;
    const { addTimer } = this.props;
    addTimer(seconds);
    return(
      <div>
        <h1>{ `Tempo restante: ${seconds}` }</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ addTimer: (e) => dispatch(addTimerAction(e))});

const mapStateToProps = (state) => ({
  seconds: state.timer.seconds, 
  stop: state.timer.stop,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
