import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionsAPI } from '../servicesAPI';
import Header from './Header';
import { questionsAction } from '../actions';

class Game extends Component {
  async componentDidMount() {
    const { addQuestions, tokenObj } = this.props;
    console.log(tokenObj)
    const questions = await questionsAPI(5, tokenObj.token);
    console.log(questions)
    addQuestions(questions);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ addQuestions: (e) => dispatch(questionsAction(e)) });
const mapStateToProps = (state) => ({ tokenObj: state.tokenObj });
export default connect(mapStateToProps, mapDispatchToProps)(Game);
