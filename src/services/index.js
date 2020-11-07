export function fetchApiToken(expenseData) {
  return async (dispatch) => {
    const baseURL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(baseURL);
    const currencies = await response.json();
    const expense = { ...expenseData, exchangeRates: currencies };
    dispatch(expensesAction(expense));
  };
}