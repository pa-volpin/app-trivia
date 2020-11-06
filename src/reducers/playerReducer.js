import { LOGIN } from '../actions/playerAction';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  const { type, name, gravatarEmail } = action;
  switch (type) {
  case LOGIN:
    return ({ ...state, name, gravatarEmail });
  default:
    return state;
  }
};

export default playerReducer;
