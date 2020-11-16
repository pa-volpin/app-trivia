import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTimerAction } from '../actions';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();
    this.state = { seconds: 30 };
  }

  componentDidMount() {
    const magicThousand = 1000;
    this.interval = setInterval(() => {
      const { seconds } = this.state;
      const { stop } = this.props;
      if (seconds > 0 && !stop) {
        this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
      } else {
        clearInterval(this.interval);
      }
    }, magicThousand);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { seconds } = this.state;
    const { addTimer } = this.props;
    const magicThirty = 30;
    addTimer(seconds);
    return (
      <div
        className="timer"
      >
        <h2
          style={ { background:
            `linear-gradient(90deg, teal ${seconds / (magicThirty * 100)}%,
              white ${seconds / (magicThirty * 100)}%,
              white ${100 - seconds * (100 / magicThirty)}%,
              white ${100 - seconds * (100 / magicThirty)}%)` } }
        >
          { `Tempo restante: ${seconds}` }
        </h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTimer: (e) => dispatch(addTimerAction(e)),
});

const mapStateToProps = (state) => ({
  stop: state.timer.stop,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  addTimer: PropTypes.string.isRequired,
  stop: PropTypes.bool.isRequired,
};
