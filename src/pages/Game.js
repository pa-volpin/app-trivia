import React, { Component } from 'react';
import { questionsAPI } from '../servicesAPI';
import Header from './Header';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      actualQuestion: 0,
      selectedAnswer: '',
      assertions: 0,
      answersDisabled: false,
      repeatCount: true,
    };

    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.saveQuestions = this.saveQuestions.bind(this);
    this.handleUniqueAnswer = this.handleUniqueAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.count = this.count.bind(this);
  }

  async componentDidMount() {
    // const token = localStorage.getItem('token');
    const questionsQuantity = 5;
    const token = 'ecc813bb4f3c70b8634ac52c287f5f4800272bce0e92bc4ad7509f6c77838fc9';
    const questions = (token !== '') ? await questionsAPI(questionsQuantity, token) : [];
    this.saveQuestions(questions);
  }

  handleColor() {
    const otherAnswers = document.querySelectorAll('article > div > button');

    otherAnswers.forEach((answer) => {
      const attributes = answer.attributes[0].value;

      if (attributes.includes('correct-answer')) {
        answer.classList.add('correct-answer');
      } else {
        answer.classList.add('incorrect-answer');
      }
    });
  }

  saveQuestions(questions) {
    this.setState({ questions });
  }

  handleAnswers(questionObj) {
    const incorrectAnswers = questionObj.incorrect_answers
      .map((incorrect) => ({ ans: incorrect, type: 'incorrect' }));
    const correctAnswer = { ans: questionObj.correct_answer, type: 'correct' };
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const numberOfAnswers = allAnswers.length;
    const allAnswersRandom = [];
    for (let i = 0; i < numberOfAnswers; i += 1) {
      const indexRandom = Math.round(Math.random() * (allAnswers.length - 1));
      allAnswersRandom[i] = allAnswers[indexRandom];
      allAnswers.splice(indexRandom, 1);
    }

    let indexOfIncorrectAnswers = 0;
    return allAnswersRandom.map((answer, index) => {
      const { ans, type } = answer;
      const testId = (type === 'correct')
        ? 'correct-answer' : `wrong-answer-${indexOfIncorrectAnswers}`;
      indexOfIncorrectAnswers = (type === 'incorrect')
        ? indexOfIncorrectAnswers + 1 : indexOfIncorrectAnswers;
      const { answersDisabled, selectedAnswer } = this.state;
      return (
        <button
          key={ index }
          type="button"
          data-testid={ testId }
          className={ (selectedAnswer === '') ? '' : `${type}-answer` }
          onClick={ () => this.handleUniqueAnswer(type) }
          disabled={ answersDisabled }
        >
          { ans }
        </button>
      );
    });
  }

  handleQuestions(questions) {
    const buttonNext = (
      <button
        data-testid="btn-next"
        type="button"
        onClick={ this.handleNext }
      >
        Próxima
      </button>);
    const interval = 30000;
    const { repeatCount, selectedAnswer } = this.state;
    if (repeatCount) this.count(interval);
    return questions.map((questionObj, index) => (
      <article key={ index }>
        <p data-testid="question-category">{ questionObj.category }</p>
        <p data-testid="question-text">{ questionObj.question }</p>
        <div>
          { this.handleAnswers(questionObj) }
        </div>
        { (selectedAnswer !== '') ? buttonNext : '' }
      </article>
    ));
  }

  count(interval) {
    const thousand = 1000;
    let timer = interval / thousand;
    let id = '';
    const frame = () => {
      if (timer === 0) {
        this.handleUniqueAnswer('incorrect');
        clearInterval(id);
      } else {
        document.getElementById('timer').innerHTML = timer;
        timer -= 1;
      }
    };
    id = setInterval(frame, thousand);
  }

  handleUniqueAnswer(type) {
    const point = (type === 'correct') ? 1 : 0;
    this.setState((actualState) => ({
      selectedAnswer: type,
      assertions: actualState.assertions + point,
      repeatCount: false,
      answersDisabled: true,
    }));
  }

  handleNext() {
    this.setState((actualState) => ({
      actualQuestion: actualState.actualQuestion + 1,
      selectedAnswer: '',
      answersDisabled: false,
    }));
  }

  render() {
    const { questions, actualQuestion } = this.state;
    return (
      <div>
        <p id="timer" />
        <Header />
        { questions.length > 0
          ? this.handleQuestions(questions)[actualQuestion] : 'Sem Questões' }
      </div>
    );
  }
}

export default Game;
