import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { gravatarAPI } from '../servicesAPI';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      score: -1,
    };

    this.getPlayerDataFromStorage = this.getPlayerDataFromStorage.bind(this);
  }

  componentDidMount() {
    this.getPlayerDataFromStorage();
  }

  getPlayerDataFromStorage() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const { score, assertions } = player;
    this.setState({ score, assertions });
  }

  render() {
    const { name, gravatarEmail } = this.props;
    const { score, assertions } = this.state;
    const threeCorrectAnswers = 3;

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
        <p data-testid="feedback-text">
          {
            assertions >= threeCorrectAnswers
              ? 'Mandou bem!'
              : 'Podia ser melhor...'
          }
        </p>
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Jogar novamente
          </button>
        </Link>
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
