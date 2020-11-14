import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questionsAPIMock } from '../servicesAPIMock';
import { addStopAction, addTimerAction } from '../actions';
import Timer from './Timer';


class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      actualQuestionIndex: 0,
      selectedAnswer: '',
      assertions: 0,
      score: 0,
    };
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleUniqueAnswer = this.handleUniqueAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.prepareQuestions = this.prepareQuestions.bind(this);
    this.sortRandomAnswers = this.sortRandomAnswers.bind(this);
  }

  componentDidMount() {
    const { tokenObj: { token } } = this.props;
    const questionsQuantity = 5;
    const { name, gravatarEmail } = this.props;
    const gameState = { player: { name, assertions: 0, score: 0, gravatarEmail } };
    localStorage.setItem('state', JSON.stringify(gameState));
    const { seconds } = this.props;
    if (seconds === 0) this.handleUniqueAnswer('incorrect');
    questionsAPIMock(questionsQuantity, token)
      .then((r) => this.prepareQuestions(r))
      .catch((r) => this.setState({ questions: r }));
  }

  prepareQuestions(questions) {
    const questionsPrepared = questions
      .map((question) => this.sortRandomAnswers(question));
    this.setState({ questions: questionsPrepared });
  }

  sortRandomAnswers(questionObj) {
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
    questionObj.randomAnswers = allAnswersRandom;
    return questionObj;
  }

  handleQuestion(index) {
    const { questions, repeatCount, selectedAnswer } = this.state;
    const actualQuestion = questions[index];
    const buttonNext = (
      <button
        data-testid="btn-next"
        type="button"
        onClick={ this.handleNext }
      >
        Próxima
      </button>);
    return (
      <article>
        <p data-testid="question-category">{ actualQuestion.category }</p>
        <p data-testid="question-text">{ actualQuestion.question }</p>
        <div>
          { this.handleAnswers(actualQuestion) }
        </div>
        { (selectedAnswer !== '') ? buttonNext : '' }
      </article>
    );
  }

  handleAnswers(question) {
    const { randomAnswers } = question;
    let indexOfIncorrectAnswers = 0;
    return randomAnswers.map((answer, index) => {
      const { ans, type } = answer;
      const testId = (type === 'correct')
        ? 'correct-answer' : `wrong-answer-${indexOfIncorrectAnswers}`;
      indexOfIncorrectAnswers = (type === 'incorrect')
        ? indexOfIncorrectAnswers + 1 : indexOfIncorrectAnswers;
      const { answersDisabled, selectedAnswer } = this.state;
      const { seconds } = this.props;
      return (
        <button
          key={ index }
          type="button"
          data-testid={ testId }
          className={ (selectedAnswer !== '' || seconds === 0) ? `${type}-answer` : '' }
          onClick={ () => this.handleUniqueAnswer(type) }
          disabled={ (selectedAnswer !== '' || seconds === 0) }
        >
          { ans }
        </button>
      );
    });
  }

  handleScore(timer) {
    const { questions, actualQuestionIndex } = this.state;
    const difficulty = questions[actualQuestionIndex].difficulty;
    const level = { easy: 1, medium: 2, hard: 3 };
    const difficultyMultiplier = level[difficulty];
    const score = 10 + (timer * difficultyMultiplier);
    return score;
  }

  handleUniqueAnswer(type) {
    const { seconds, addStop } = this.props;
    const scoreAdd = (type === 'correct') ? this.handleScore(seconds) : 0;
    const assertion = (type === 'correct') ? 1 : 0;
    const { score, assertions } = this.state;
    const { name, gravatarEmail } = this.props;
    const gameState = { player: { name, assertions: assertions+assertion, score: score + scoreAdd, gravatarEmail  } };
    localStorage.setItem('state', JSON.stringify(gameState));
    addStop(true);
    this.setState((actualState) => ({ selectedAnswer: type }));
  }

  handleNext() {
    this.setState((actualState) => ({
      actualQuestionIndex: actualState.actualQuestionIndex + 1,
      selectedAnswer: '',
      answersDisabled: false,
    }));
  }
  
  render() {
    const { questions, actualQuestionIndex } = this.state;
    const magicNumberFive = 5;
    const aboutQuestions = () => {
      const loadingOrQuestion = (questions !== 'ERROR_QUESTIONS' && questions.length > 0)
        ? this.handleQuestion(actualQuestionIndex) : (<h1>Carregando...</h1>);
      return loadingOrQuestion;
    };
    return (
      <div>
        { (questions === 'ERROR_QUESTIONS' && actualQuestionIndex < magicNumberFive)
          ? 'ERROR' : '' }
        { (actualQuestionIndex < magicNumberFive)
          ? aboutQuestions() : <Redirect to="/feedback" /> }
        <Timer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTimer: (e) => dispatch(addTimerAction(e)),
  addStop: (e) => dispatch(addStopAction(e)),
});

const mapStateToProps = (state) => ({
  tokenObj: state.tokenObj,
  seconds: state.timer.seconds,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

Questions.propTypes = {
  tokenObj: PropTypes.objectOf(PropTypes.string).isRequired,
};
