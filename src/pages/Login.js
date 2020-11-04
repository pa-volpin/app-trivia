import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggeButton = this.toggeButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      this.toggeButton();
    });
  }

  toggeButton() {
    const { email, name } = this.state;

    const isDisabled = (email === '' || name === '');
    this.setState({ isDisabled });
  }

  render() {
    const { name, email, isDisabled } = this.state;

    return (
      <>
        <input
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          placeholder="nome"
          data-testid="input-player-name"
        />
        <input
          type="email"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          placeholder="email"
          data-testid="input-gravatar-email"
        />
        {/* <Link to="/play"> */}
        <button
          type="submit"
          disabled={ isDisabled }
          data-testid="btn-play"
        >
          Jogar
        </button>
        {/* </Link> */}
      </>
    );
  }
}

export default Login;
