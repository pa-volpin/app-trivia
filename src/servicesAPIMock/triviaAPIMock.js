// ======================================================================================
const tokenURL = 'https://opentdb.com/api_token.php?command=request';
// const tokenURL = '';

const tokenAPIMock = () => new Promise((resolve, reject) => {
  function makeToken() {
    localStorage.setItem('token', tokenURL);
    return ({ token: tokenURL, date: new Date() });
  }
  function errorToken() {
    localStorage.setItem('token', 'ERROR_TOKEN');
    return ({ token: 'ERROR_TOKEN', date: 'ERROR_TOKEN' });
  }
  if (tokenURL !== '') return resolve(makeToken());
  return reject(errorToken());
});

// ======================================================================================
const questionsResponse = [
  {
    question: 'Primeira questão',
    category: 'Categoria 1',
    correct_answer: 'Correct Answer',
    incorrect_answers: ['Incorrect 1', 'Incorrect 2', 'Incorrect 3'],
  },
  {
    question: 'Segunda questão',
    category: 'Categoria 2',
    correct_answer: 'Correct Answer',
    incorrect_answers: ['Incorrect 1', 'Incorrect 2', 'Incorrect 3'],
  },
];
// const questionsResponse = [];

const questionsAPIMock = () => new Promise((resolve, reject) => {
  function getQuestions() {
    return questionsResponse;
  }
  function errorQuestions() {
    return 'ERROR_QUESTIONS';
  }
  return (questionsResponse.length > 0)
    ? resolve(getQuestions()) : reject(errorQuestions());
});

export { tokenAPIMock, questionsAPIMock };
