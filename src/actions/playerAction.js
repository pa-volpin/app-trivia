const LOGIN = 'LOGIN';

const playerAction = (player) => ({
  type: LOGIN,
  name: player.name,
  gravatarEmail: player.gravatarEmail,
});

export default playerAction;
export { LOGIN };
