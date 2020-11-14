import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gravatarAPI } from '../servicesAPI';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      score: -1,
    };

    this.getScoreFromStorage = this.getScoreFromStorage.bind(this);
  }

  componentDidMount() {
    this.getScoreFromStorage();
  }

  getScoreFromStorage() {
    const { score } = JSON.parse(localStorage.getItem('state')).player;
    this.setState({ score });
  }

  render() {
    const { name, gravatarEmail } = this.props;
    const { score } = this.state;

    return (
      <header>
        <h1 data-testid="feedback-text">Feedback Do Jogo</h1>
        <p data-testid="header-player-name">{ name }</p>
        <img
          alt="user avatar"
          data-testid="header-profile-picture"
          src={ gravatarAPI(gravatarEmail) }
        />
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
});

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
