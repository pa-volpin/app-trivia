import React, { Component } from 'react';
import { questionsAPI } from '../servicesAPI';
import Header from './Header';
import '../App.css';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    };

    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.saveQuestions = this.saveQuestions.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  async componentDidMount() {
    // const token = localStorage.getItem('token');
    const questionsQuantity = 5;
    const token = '2328682ae1d303064ff1d5d16b2490a22310553c91f9ebbcd1a9422d1b1e6cc9';
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
      return (
        <button
          key={ index }
          data-testid={ testId }
          onClick={ this.handleColor }
          type="button"
        >
          { ans }
        </button>);
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
