import React, { Component } from 'react';
import { questionsAPI } from '../servicesAPI';
import Header from './Header';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    };

    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.saveQuestions = this.saveQuestions.bind(this);
  }

  async componentDidMount() {
    // const token = localStorage.getItem('token');
    const token = 'a79ad379dd9c75416f0a481c6aa4708a60744482dac4aa2c6e39df1f95e23a53';
    const questionsQuantity = 5;
    const questions = await questionsAPI(questionsQuantity, token);
    this.saveQuestions(questions);
  }

  saveQuestions(questions) {
    this.setState({ questions });
  }

  handleAnswers(questionObj) {
    const incorrectAnswers = questionObj.incorrect_answers
      .map((incorrect) => ({ ans: incorrect, type: 'incorrect' }));
    const correctAnswer = { ans: questionObj.correct_answer, type: 'correct' };
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    // let allAnswersRandom = [];
    // let max = allAnswers.length - 1;
    // let min = 0;
    // const randomIndex = (max, min) => Math.random()*(max - min) + min;
    // let indexUsed = [];

    // allAnswers.forEach(answer => {
    //   let indexNow = parseInt(randomIndex(max, min));
    //   while(indexUsed.includes(indexNow)) {
    //     indexNow = parseInt(randomIndex(max, min));
    //   }
    //   indexUsed.push(indexNow);
    //   allAnswersRandom[min] = allAnswers[indexNow];
    //   console.log(indexUsed)
    //   min += 1;
    // });

    let ii = 0;
    return allAnswers.map((answer, index) => {
      const { type } = answer;
      const testId = (type === 'correct') ? 'correct-answer' : `wrong-answer-${ii}`;
      ii = (type === 'incorrect') ? ii + 1 : ii;

      return (<p key={ index } data-testid={ testId }>{ answer.ans }</p>);
    });
  }

  handleQuestions(questions) {
    return questions.map((questionObj, index) => (
      <article key={ index }>
        <p data-testid="question-category">{ questionObj.category }</p>
        <p data-testid="question-text">{ questionObj.question }</p>
        <div>
          { this.handleAnswers(questionObj) }
        </div>
      </article>
    ));
  }

  render() {
    const { questions } = this.state;
    return (
      <div>
        <Header />
        { questions.length > 0 ? this.handleQuestions(questions)[0] : 'Sem Questões'}
      </div>
    );
  }
}

export default Game;
