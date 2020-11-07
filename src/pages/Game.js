import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionsAPI } from '../servicesAPI';
import Header from './Header';
import { questionsAction } from '../actions';

class Game extends Component {
  async componentDidMount() {
    const { addQuestions, tokenObj } = this.props;
    // console.log('token', tokenObj)

    // const token = localStorage.getItem('token');
    const token = '02505344b54f45c8296f9388d11caebc0698d2c6fdfde9c1d9247c40e32dd0cd';
    // console.log(token)
    const questionResponse = await questionsAPI(5, token);
    console.log(questionResponse)
      addQuestions(questionResponse);
    }
    
    render() {
      const { questions } = this.props;
      // console.log(questions)

    return (
      <div>
        <Header />
        {
          // questions && questions.map(questionObject => questionObject.category)
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ addQuestions: (e) => dispatch(questionsAPI(e)) });
const mapStateToProps = (state) => ({
  tokenObj: state.tokenObj,
  questions: state.questions,
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
