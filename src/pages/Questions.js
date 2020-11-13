import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questionsAPI } from '../servicesAPI';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      actualQuestionIndex: 0,
      selectedAnswer: '',
      assertions: 0,
      answersDisabled: false,
      repeatCount: true,
      stopCount: false,
    };
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleAnswers = this.handleAnswers.bind(this);
    this.handleUniqueAnswer = this.handleUniqueAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.count = this.count.bind(this);
    this.prepareQuestions = this.prepareQuestions.bind(this);
    this.sortRandomAnswers = this.sortRandomAnswers.bind(this);
  }

  componentDidMount() {
    const { tokenObj: { token } } = this.props;
    const questionsQuantity = 5;
    questionsAPI(questionsQuantity, token)
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
        // onClick={ (actualQuestionIndex < 5) ? this.handleNext : window.location.assign('/feedback') }
        onClick={ this.handleNext }
      >
        Próxima
      </button>);
    const interval = 30000;
    if (repeatCount) this.count(interval);
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

  count(interval) {
    const thousand = 1000;
    let timer = interval / thousand;
    let id = '';
    const frame = () => {
      const { stopCount } = this.state;
      if (timer === 0) {
        this.handleUniqueAnswer('incorrect');
        clearInterval(id);
      } else if (stopCount) {
        clearInterval(id);
        this.setState({ stopCount: false });
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
      stopCount: true,
      answersDisabled: true,
    }));
  }

  handleNext() {
    this.setState((actualState) => ({
      actualQuestionIndex: actualState.actualQuestionIndex + 1,
      selectedAnswer: '',
      answersDisabled: false,
      repeatCount: true,
      stopCount: false,
    }));
  }

  render() {
    const { questions, actualQuestionIndex } = this.state;
    const magicNumberFive = 5;
    return (
      <div>
        <p id="timer" />
        { (questions === 'ERROR_QUESTIONS') ? 'Sem Questões' : '' }
        { (actualQuestionIndex < magicNumberFive)
          ? (
            (questions !== 'ERROR_QUESTIONS' && questions.length > 0)
              ? this.handleQuestion(actualQuestionIndex) : <h1>Carregando...</h1>
          ) : <Redirect to="/feedback" /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tokenObj: state.tokenObj,
});

export default connect(mapStateToProps)(Questions);

Questions.propTypes = {
  tokenObj: PropTypes.objectOf(PropTypes.string).isRequired,
};
