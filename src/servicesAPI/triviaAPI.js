const tokenURL = 'https://opentdb.com/api_token.php?command=request';

const tokenAPI = () => fetch(tokenURL)
  .then((response) => response.json())
  .then((r) => ({ token: r.token, date: new Date() }));

const questionsBaseURL = 'https://opentdb.com/api.php?';
const defaultAmount = 5;

const questionsAPI = (amount = defaultAmount, token) => {
  const questionsURL = `${questionsBaseURL}amount=${amount}&token=${token}`;
  return fetch(questionsURL)
    .then((response) => response.json())
    .then((r) => r.results);
};

export { tokenAPI, questionsAPI };
