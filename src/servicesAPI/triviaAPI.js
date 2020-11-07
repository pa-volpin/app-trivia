import questionsAction from '../actions/questionsAction';

const tokenURL = 'https://opentdb.com/api_token.php?command=request';

const tokenAPI = () => fetch(tokenURL)
  .then((response) => response.json())
  .then((r) => ({ token: r.token, date: new Date() }));

const questionsBaseURL = 'https://opentdb.com/api.php?';
const defaultAmount = 5;

// const questionsAPI = (amount = defaultAmount, token) => {
//   const questionsURL = `${questionsBaseURL}amount=${amount}&token=${token}`;
//   return fetch(questionsURL)
//     .then((response) => response.json())
//     .then((r) => r.results);
// };

const questionsAPI = (amount = defaultAmount, token) => {
  const questionsURL = `${questionsBaseURL}amount=${amount}&token=${token}`;

  // console.log

  return (dispatch) => {
    return fetch(questionsURL)
      .then(response => response.json())
      .then(data => {
        dispatch(questionsAction(data.results))
      })
  }
};

export { tokenAPI, questionsAPI };

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest())
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         // response.data is the users
//         const users = response.data
//         dispatch(fetchUsersSuccess(users))
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchUsersFailure(error.message))
//       })
//   }
// }