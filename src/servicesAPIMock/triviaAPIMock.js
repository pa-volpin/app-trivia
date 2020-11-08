const time = 3000;
const tokenURL = 'https://opentdb.com/api_token.php?command=request';
const tokenAPIMock = () => setInterval(() => ({ token: tokenURL, date: new Date() }),
  time);

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

const questionsAPIMock = () => {
  setTimeout(console.log('Questions From Mock API'), time);
  return questionsResponse;
};

export { tokenAPIMock, questionsAPIMock };
