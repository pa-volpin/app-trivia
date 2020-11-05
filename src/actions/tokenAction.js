const ADD_TOKEN = 'ADD_TOKEN';

const createTokenAction = (tokenObj) => ({ type: ADD_TOKEN, tokenObj });

export default createTokenAction;
export { ADD_TOKEN };
